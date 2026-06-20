import TaskCard from "@/components/TaskCard";
import { getTask } from "@/lib/task";
import React from "react";

const TaskPage = async () => {
  const tasks = await getTask();
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Task: {tasks.length} </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default TaskPage;
