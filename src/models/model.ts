type TaskId = "task-1" | "task-2" | "task-3" | "task-4";
type columnId = "column-1" | "column-2" | "column-3";

export type InitialData = {
  tasks: { [key: string]: { id: TaskId; content: string } };
  columns: {
    [key: string]: { id: columnId; title: string; taskIds: TaskId[] };
  };
  columnOrder: columnId[];
};
