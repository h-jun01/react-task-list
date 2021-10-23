import React from "react";
import { Task } from "components/Task";
import { InitialData } from "models/model";

type Props = {
  tasks: InitialData["tasks"]["task"][];
};

export const TaskInnerList = React.memo<Props>(({ tasks }): any => {
  return tasks.map((task, index) => (
    <Task key={task.id} task={task} index={index} />
  ));
});
