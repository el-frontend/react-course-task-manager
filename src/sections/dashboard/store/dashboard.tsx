import { create } from "zustand";
import { Task } from "../types/task";

type StoreType = {
  isCreateModalOpen: boolean;
  tasks: Task[];
  selectedTask: Task | null;
  setSelectedTask: (task: Task) => void;
  setCreateModalOpen: (isOpen: boolean) => void;
  addTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  updateTask: (task: Task) => void;
};

const useDashboardStore = create<StoreType>((set) => ({
  isCreateModalOpen: false,
  tasks: [],
  selectedTask: null,
  setSelectedTask: (task: Task) => {
    set({ selectedTask: task });
  },
  setCreateModalOpen: (isOpen: boolean) => {
    set({ isCreateModalOpen: isOpen });
  },
  addTask: (task: Task) => {
    set((state) => ({
      tasks: [...state.tasks, task],
    }));
  },
  deleteTask: (id: string) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
  },
  updateTask: (task: Task) => {
    set((state) => ({
      tasks: state.tasks.map((t) => (t.id === task.id ? task : t)),
    }));
  },
}));

export default useDashboardStore;
