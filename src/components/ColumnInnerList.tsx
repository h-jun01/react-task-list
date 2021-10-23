import React from "react";
import { InitialData } from "models/model";
import { Column } from "components/Column";

type Props = {
  column: InitialData["columns"]["column"];
  taskMap: InitialData["tasks"];
  index: number;
};

export const ColumnInnerList = React.memo<Props>(
  ({ column, taskMap, index }) => {
    const tasks = column.taskIds.map((taskId) => taskMap[taskId]);
    return <Column column={column} tasks={tasks} index={index} />;
  }
);
