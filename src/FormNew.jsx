import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = Yup.object().shape({
  fullName: Yup.string().required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  age: Yup.number()
    .min(18, "Age must be 18")
    .typeError("Age must be number")
    .required("Please enter your age"),
  password: Yup.string()
    .min(4, "Minimum 4 character")
    .max(8, "Maximum 8 character")
    .required("Please enter your password")
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "This is not matched with password")
    .required("Please re-type your password"),
});

const FormNew = () => {
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <input
            {...register("fullName")}
            type="text"
            name="fullName"
            placeholder="Enter your name"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 my-2"
          />
        </p>
        {errors.fullName && (
          <span className="text-red-400 mb-2 text-xs block">
            {errors.fullName?.message}
          </span>
        )}
        <p>
          <input
            {...register("email")}
            type="email"
            name="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 my-2"
          />
        </p>
        {errors.email && (
          <span className="text-red-400 mb-2 text-xs block">
            {errors.email?.message}
          </span>
        )}
        <p>
          <input
            {...register("age")}
            type="number"
            name="age"
            placeholder="Enter your age"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 my-2"
          />
        </p>
        {errors.age && (
          <span className="text-red-400 mb-2 text-xs block">
            {errors.age?.message}
          </span>
        )}
        <p>
          <input
            {...register("password")}
            type="password"
            name="password"
            placeholder="Enter your password"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 my-2"
          />
        </p>
        {errors.password && (
          <span className="text-red-400 mb-2 text-xs block">
            {errors.password?.message}
          </span>
        )}
        <p>
          <input
            {...register("confirmPassword")}
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 my-2"
          />
        </p>
        {errors.confirmPassword && (
          <span className="text-red-400 mb-2 text-xs block">
            {errors.confirmPassword?.message}
          </span>
        )}
        <button
          className="px-4 py-2 rounded-md border border-blue-500 bg-blue-500 text-white focus:outline-none hover:bg-blue-700 cursor-pointer ease-linear delay-200"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormNew;
