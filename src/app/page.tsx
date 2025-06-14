"use client"

import { useState } from "react";
import { FaRegSquare, FaRegCheckSquare, FaTrash } from "react-icons/fa";
import Timer from "../app/components/Timer";

type Task = {
  text: string;
  completed: boolean;
};

export default function Home() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState("");

    function addTask(){
        if (newTask.trim()) {
            const newTaskObj = { text: newTask.trim(), completed: false}
            setTasks([...tasks, newTaskObj]);
            setNewTask("");
        }
    }
    return (
        <div className="flex h-screen">
        <aside className="w-1/4 bg-gray-800 p-4">
            <h1 className="text-2xl font-bold mb-4">Tarzen</h1>

            <input
                className="w-full mb-2 px-3 py-2 border rounded"
                placeholder="New Task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addTask()}
            />

            <button className="w-full mb-4 bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-600" onClick={addTask}>
            + Add Task
            </button>
            
            <ul>
                {tasks.map((task, idx)=> (
                    <li key={idx} className="mb-3 spacr-y-3 p-3 rounded-lg bg-gray-500 flex text-xl">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
        <button
          onClick={() => {
            const updatedTasks = [...tasks];
            updatedTasks[idx] = {
              ...updatedTasks[idx],
              completed: !updatedTasks[idx].completed,
            };
            setTasks(updatedTasks);
          }}
          className={`hover:text-green-300 ${
               task.completed ? "text-green-500" : "text-gray-400"
          }`}
          aria-label="Toggle complete"
        >
          {task.completed ? (
            <FaRegCheckSquare className="w-5 h-5" />
          ) : (
            <FaRegSquare className="w-5 h-5" />
          )}
          </button>
          <span className={task.completed ? "line-through text-gray-400" : "" }>{task.text}</span>
          </div>

          <button
          onClick={() => {
              const updatedTasks = tasks.filter((_, i) => i !== idx);
              setTasks(updatedTasks);
          }}
          className="hover:text-red-400 flex-shrink-0 ml-4"
          aria-label="Delete Task"
          >
          <FaTrash className="w-5 h-5" />
          </button>
          </li>
                ))}
                </ul>
                </aside>

                <main className="flex-1 bg-gray-500 p-6 overflow-y-auto">
                <section>
                <Timer />
                <h2 className="text-xl font-semibold mb-2">Stats</h2>
                <p>Tasks Completed: 0</p>
                <p>Time Elapsed: 0 Minutes</p>
                </section>
                </main>
                </div>
    )
}
