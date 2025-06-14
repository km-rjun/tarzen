"use client"

import { useState } from "react";

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
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => {
                                    const updatedTasks = [...tasks];
                                    updatedTasks[idx] = {
                                        ...updatedTasks[idx],
                                        completed: !updatedTasks[idx].completed,
                                    };
                                    setTasks(updatedTasks);
                                }}
                                className="w-5 h-5 accent-green-500"
                                />
                                <span className={task.completed ? "line-through text-gray-400" : "" }>{task.text}</span>
                        </div>

                        <button
                            onClick={() => {
                                const updatedTasks = tasks.filter((_, i) => i !== idx);
                                setTasks(updatedTasks);
                            }}
                            className="text-red-500 hover:text-red-700"
                            aria-label="Delete Task"
                            >
                                🗑️
                        </button>
                        </li>
                ))}
            </ul>
            </aside>

            <main className="flex-1 p-8">
                <div className="flex-1 mb-8">
                    <h2 className="text-xl font-semibold mb-2">Pomodoro Timer</h2>
                    <div className="text-5xl font-mono">25:00</div>
                </div>

                <section>
                <h2 className="text-xl font-semibold mb-2">Stats</h2>
                <p>Tasks Completed: 0</p>
                <p>Time Elapsed: 0 Minutes</p>
                </section>
            </main>


    </div>
    )
}
