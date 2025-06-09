export default function Home() {
    return (
        <div className="flex h-screen">
        <aside className="w-64 bg-gray-100 p-4 border-r">
            <h1 className="text-2xl font-bold mb-4">Tarzen</h1>

            <button className="w-full mb-4 bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-600">
            + Add Task
            </button>
            
            <ul>
                <li className="mb-2"> Example task 1</li>
                <li className="mb-2"> Example task 2</li>
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
