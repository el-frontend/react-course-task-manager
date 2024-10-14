import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ListFilter, PlusCircle } from "lucide-react";
import useDashboardStore from "../../store/dashboard";

const DashboardFilters = () => {
  const { setCreateModalOpen } = useDashboardStore();
  return (
    <div className="ml-auto flex items-center gap-2 dark">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="h-7 gap-1 text-foreground"
          >
            <ListFilter className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Filter
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Filter by</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked>All</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Pending</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>In Progress</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Completed</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        size="sm"
        className="h-7 gap-1"
        onClick={() => setCreateModalOpen(true)}
      >
        <PlusCircle className="h-3.5 w-3.5" />
        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
          Add Task
        </span>
      </Button>
    </div>
  );
};

export default DashboardFilters;
