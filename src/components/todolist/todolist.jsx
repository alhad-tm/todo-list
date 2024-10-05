import React from "react";
import { useState } from "react";

const Todolist = () => {
  const [addtodo, setAddTodo] = useState("");
  const [showtodo, setShowTodo] = useState([]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    setShowTodo([...showtodo, addtodo]);
    setAddTodo("");
  };

  const handleDeleteTodo = (index) => {
    setShowTodo(showtodo.filter((_, i) => i !== index));
  };

  return (
    <div className="text-blue-950">
      <div className="bg-emerald-600 p-8 flex flex-col items-center justify-center">
        <h1 className="text-5xl">TODO LIST</h1>
        <h1 className="text-2xl mt-8">Add todo</h1>
        <form action="" onSubmit={handleAddTodo}>
          <input
            type="text"
            placeholder="Add a new task"
            value={addtodo}
            onChange={(e) => setAddTodo(e.target.value)}
          />

          <button type="submit"> Add items</button>
        </form>
      </div>

      <div className="bg-cyan-500 p-8 text-amber-950 flex flex-col gap-6 items-start justify-center text-2xl ">
        <h1>Show Todo</h1>

        {showtodo.map((item, index) => (
          <div className="flex gap-8 items-center" key={index}>
            {item}
            <button
              onClick={() => handleDeleteTodo(index)}
              className="bg-red-600 border text-white rounded-xl p-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todolist;
