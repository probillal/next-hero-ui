import { getTask } from "@/lib/task";
import React from "react";

const TaskPage = async () => {
  const task = await getTask();
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Task: {task.length} </h1>
    </div>
  );
};

export default TaskPage;
