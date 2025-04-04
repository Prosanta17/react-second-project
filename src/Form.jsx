import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  fullName: yup.string().required("Please enter your name"),
  email: yup.string().email().required("Please enter your email"),
  age: yup
    .number()
    .typeError("Age must be an number")
    .positive("Age must be positive")
    .min(18, "Age must be at least 18")
    .integer("Age must be an integer")
    .required("Please enter your age"),
  password: yup
    .string()
    .min(4, "Password must be at least 4 characters")
    .max(8, "Password must be maximum 8 characters")
    .required("Please enter your password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "This is not matched with password")
    .required("Please re-type your password"),
});

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    reset();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>
        <input
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 my-2"
          type="text"
          placeholder="Enter your name"
          {...register("fullName")}
        />
      </p>
      <p className="text-xs text-red-500">{errors.fullName?.message}</p>
      <p>
        <input
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 my-2"
          type="email"
          placeholder="Enter your email"
          {...register("email")}
        />
      </p>
      <p className="text-xs text-red-500">{errors.email?.message}</p>
      <p>
        <input
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 my-2"
          type="number"
          placeholder="Enter your age"
          {...register("age")}
        />
      </p>
      <p className="text-xs text-red-500">{errors.age?.message}</p>
      <p>
        <input
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 my-2"
          type="password"
          placeholder="Password"
          {...register("password")}
        />
      </p>
      <p className="text-xs text-red-500">{errors.password?.message}</p>
      <p>
        <input
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 my-2"
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
      </p>
      <p className="text-xs text-red-500">{errors.confirmPassword?.message}</p>
      <button
        className="px-4 py-2 rounded-md border border-blue-500 bg-blue-500 text-white focus:outline-none hover:bg-blue-700 cursor-pointer ease-linear delay-200"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
