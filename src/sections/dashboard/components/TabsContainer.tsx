import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {
  filters: React.ReactNode;
  children: React.ReactNode;
};

const DashboardTabsContainer: React.FC<Props> = ({ children, filters }) => {
  return (
    <Tabs defaultValue="task_list" className="gap-4 flex flex-col">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="task_list">Task List</TabsTrigger>
          <TabsTrigger value="kanban">Kanban</TabsTrigger>
        </TabsList>
        {filters}
      </div>
      {children}
    </Tabs>
  );
};

export default DashboardTabsContainer;
