import React, { useEffect, useState } from "react";

const Todolist = () => {
  const [todoList, setTodoList] = useState([]);
  const [taskName, setTaskName] = useState("");

  const handleGetTask = (e) => setTaskName(e.target.value);

  const handleAddTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      name: taskName,
      completed: false,
    };
    if (task.name !== "") {
      setTodoList([...todoList, task]);
    }
    setTaskName("");
  };

  const deteteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const handleCompletedTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  };

  useEffect(() => {
    console.log("clicked");
    return console.log("unmounted");
  }, []);

  return (
    <div>
      <div className="addtask">
        <input
          value={taskName}
          type="text"
          onChange={handleGetTask}
          className="border-1 border-black rounded-l px-2"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 border-1 border-blue-500 text-white rounded-r px-2 cursor-pointer"
        >
          Add Task
        </button>
      </div>
      <div className="showtask">
        {todoList.map((task, index) => {
          return (
            <h1 key={index}>
              <span
                onClick={() => handleCompletedTask(task.id)}
                style={{ backgroundColor: task.completed ? "green" : "white" }}
              >
                {task.id}. {task.name}
              </span>
              <button
                onClick={() => deteteTask(task.id)}
                style={{ padding: "2px 5px" }}
              >
                X
              </button>
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default Todolist;
