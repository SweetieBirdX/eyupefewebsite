import React, { useState } from 'react';

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [allTasks, setAllTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks((prevTasks) => [...prevTasks, newTask]);
            setAllTasks((prevAllTasks) => [...prevAllTasks, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index, isCompleted) {
        const taskToDelete = isCompleted ? completedTasks[index] : tasks[index];
        setTasks((prevTasks) => prevTasks.filter((task) => task !== taskToDelete));
        setCompletedTasks((prevCompleted) => prevCompleted.filter((task) => task !== taskToDelete));
        setAllTasks((prevAllTasks) => prevAllTasks.filter((task) => task !== taskToDelete));
    }

    function deleteTaskFromAll(index) {
        const taskToDelete = allTasks[index];
        setTasks((prevTasks) => prevTasks.filter((task) => task !== taskToDelete));
        setCompletedTasks((prevCompleted) => prevCompleted.filter((task) => task !== taskToDelete));
        setAllTasks((prevAllTasks) => prevAllTasks.filter((_, i) => i !== index));
    }

    function moveTaskUp(index, isCompleted) {
        const taskList = isCompleted ? completedTasks : tasks;
        if (index > 0) {
            const updatedTasks = [...taskList];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            isCompleted ? setCompletedTasks(updatedTasks) : setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index, isCompleted) {
        const taskList = isCompleted ? completedTasks : tasks;
        if (index < taskList.length - 1) {
            const updatedTasks = [...taskList];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            isCompleted ? setCompletedTasks(updatedTasks) : setTasks(updatedTasks);
        }
    }

    function markAsCompleted(index) {
        const taskToComplete = tasks[index];
        setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
        setCompletedTasks((prevCompleted) => [...prevCompleted, taskToComplete]);
    }

    function markAsIncompleted(index) {
        const taskToIncomplete = completedTasks[index];
        setCompletedTasks((prevCompleted) => prevCompleted.filter((_, i) => i !== index));
        setTasks((prevTasks) => [...prevTasks, taskToIncomplete]);
    }

    function moveTaskUpInAll(index) {
        if (index > 0) {
            const updatedAllTasks = [...allTasks];
            [updatedAllTasks[index], updatedAllTasks[index - 1]] = [updatedAllTasks[index - 1], updatedAllTasks[index]];
            setAllTasks(updatedAllTasks);
        }
    }

    function moveTaskDownInAll(index) {
        if (index < allTasks.length - 1) {
            const updatedAllTasks = [...allTasks];
            [updatedAllTasks[index], updatedAllTasks[index + 1]] = [updatedAllTasks[index + 1], updatedAllTasks[index]];
            setAllTasks(updatedAllTasks);
        }
    }

    return (
        <div className="font-mono px-4 sm:px-8 md:px-16 py-10 text-center">
            <h1 className="text-4xl sm:text-6xl font-bold py-10">To-Do List</h1>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <input
                    className="text-lg sm:text-2xl p-4 border-2 border-slate-900 rounded-md w-full sm:w-auto"
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button
                    className="text-lg sm:text-2xl font-bold py-3 px-6 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md transition"
                    onClick={addTask}>
                    Add
                </button>
            </div>

            {[
                { title: "Incompleted Tasks", tasks: tasks, isCompleted: false },
                { title: "Completed Tasks", tasks: completedTasks, isCompleted: true },
                { title: "All Tasks", tasks: allTasks, isAll: true }
            ].map((section, idx) => (
                <div key={idx} className="mb-12">
                    <h2 className="text-3xl sm:text-4xl font-semibold mb-6">{section.title}</h2>
                    <ol className="space-y-4">
                        {section.tasks.map((task, index) => (
                            <li
                                key={index}
                                className="text-base sm:text-xl font-semibold p-4 bg-slate-200 border-2 border-slate-500 rounded-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                            >
                                <span>{task}</span>
                                <div className="flex flex-wrap gap-3 justify-start sm:justify-end">
                                    {!section.isAll && (
                                        section.isCompleted ? (
                                            <button
                                                className="py-2 px-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md"
                                                onClick={() => markAsIncompleted(index)}>
                                                Incomplete
                                            </button>
                                        ) : (
                                            <button
                                                className="py-2 px-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md"
                                                onClick={() => markAsCompleted(index)}>
                                                Complete
                                            </button>
                                        )
                                    )}

                                    <button
                                        className="py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-md"
                                        onClick={() => (section.isAll ? deleteTaskFromAll(index) : deleteTask(index, section.isCompleted))}>
                                        Delete
                                    </button>
                                    <button
                                        className="py-2 px-4 bg-sky-600 hover:bg-sky-700 text-white rounded-md"
                                        onClick={() => (section.isAll ? moveTaskUpInAll(index) : moveTaskUp(index, section.isCompleted))}>
                                        ⬆
                                    </button>
                                    <button
                                        className="py-2 px-4 bg-sky-600 hover:bg-sky-700 text-white rounded-md"
                                        onClick={() => (section.isAll ? moveTaskDownInAll(index) : moveTaskDown(index, section.isCompleted))}>
                                        ⬇
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            ))}
        </div>
    );
}

export default ToDoList;
