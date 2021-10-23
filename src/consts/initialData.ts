import { InitialData } from "models/model";

export const initialData: InitialData = {
  // タスクの中身
  tasks: {
    "task-1": { id: "task-1", content: "デザイン案を複数用意する" },
    "task-2": {
      id: "task-2",
      content: "心拍数と集中力を測定してfirestore上に送れるようにする",
    },
    "task-3": { id: "task-3", content: "企画書を作る" },
    "task-4": { id: "task-4", content: "データベース設計を考える" },
  },
  // リスト
  columns: {
    "column-1": {
      id: "column-1",
      title: "未着手",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "進行中",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "完了",
      taskIds: [],
    },
  },
  // リストの順番
  columnOrder: ["column-1", "column-2", "column-3"],
};
