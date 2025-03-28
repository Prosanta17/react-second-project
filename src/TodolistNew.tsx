import React, { useState } from "react";
interface Task {
  id: number;
  name: string;
  completed: boolean;
}

const TodolistNew = () => {
  const [todoList, setTodoList] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const handleTask = (e: any) => setNewTask(e.target.value);

  const handleAddTask = () => {
    const task: Task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      name: newTask,
      completed: false,
    };
    if (newTask !== "") {
      setTodoList([...todoList, task]);
    }
    setNewTask("");
  };

  const handleDelete = (id: number) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const handleCompleted = (id: number) => {
    setTodoList(
      todoList.map((task: Task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="max-w-lg mx-auto px-4 bg-blue-100 rounded-lg shadow-lg p-6">
      <div className="addtask flex justify-between items-center mb-4">
        <input
          type="text"
          className="border-1 border-black rounded px-3 py-2 text-black w-full"
          placeholder="Add Task"
          onChange={handleTask}
          value={newTask}
        />
        <button
          onClick={handleAddTask}
          className="cursor-pointer border-1 bg-blue-500 text-white px-3 py-2 rounded whitespace-nowrap"
        >
          Add Task
        </button>
      </div>
      <div className="taskList">
        <ul>
          {todoList.map((task: Task, index: number) => {
            return (
              <li
                key={task.id}
                className="flex justify-between items-center"
                style={{
                  backgroundColor: task.completed ? "green" : "transparent",
                  color: task.completed ? "white" : "black",
                }}
              >
                {index + 1}. {task.name}
                <div>
                  <span
                    onClick={() => handleCompleted(task.id)}
                    className="text-xl cursor-pointer px-3 py-1 border-1 bg-green-600 rounded text-white align-middle"
                  >
                    Completed
                  </span>
                  <span
                    onClick={() => handleDelete(task.id)}
                    className="text-2xl cursor-pointer px-3 border-1 bg-red-600 rounded text-white align-middle"
                  >
                    X
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodolistNew;
