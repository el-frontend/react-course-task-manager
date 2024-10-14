import { TabsContent } from "@radix-ui/react-tabs";
import { useState } from "react";
import { toast } from "sonner";
import DashboardFilters from "../components/filter/Filters";
import DashboardTabsContainer from "../components/TabsContainer";
import DashboardTaskFormContainer from "../components/task-form/TaskFormContainer";
import { DashboardTaskDeleteConfirmation } from "../components/task-list/TaskDeleteConfirmation";
import TaskListContainer from "../components/task-list/TaskListContainer";
import useDashboardStore from "../store/dashboard";
import { Task } from "../types/task";

const DashboardContainer = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const {
    isCreateModalOpen,
    setCreateModalOpen,
    updateTask,
    deleteTask,
    addTask,
    tasks,
    selectedTask,
    setSelectedTask,
  } = useDashboardStore();

  const onCreateUpdate = (data: Task) => {
    if (data.id) {
      updateTask(data);
      toast("Task updated successfully");
    } else {
      data = { ...data, id: crypto.randomUUID() };
      addTask(data);
      toast("Task added successfully");
    }
    setCreateModalOpen(false);
  };

  const onDeleteTask = () => {
    if (!selectedTask) return;
    deleteTask(selectedTask.id);
    setOpenDelete(false);
  };

  const onRequestDelete = (task: Task) => {
    setSelectedTask(task);
    setOpenDelete(true);
  };

  return (
    <DashboardTabsContainer filters={<DashboardFilters />}>
      <TabsContent value="task_list">
        <TaskListContainer tasks={tasks} onDelete={onRequestDelete} />
      </TabsContent>
      <DashboardTaskDeleteConfirmation
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        onConfirm={onDeleteTask}
      />
      <DashboardTaskFormContainer
        open={isCreateModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onHandleSubmit={onCreateUpdate}
      />
    </DashboardTabsContainer>
  );
};

export default DashboardContainer;
