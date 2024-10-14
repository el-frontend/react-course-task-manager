import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Task } from "../../types/task";
import { formSchema } from "./schema";
import TaskForm from "./TaskForm";

type Props = {
  open: boolean;
  onClose: () => void;
  onHandleSubmit: (data: Task) => void;
};

const DashboardTaskFormContainer: React.FC<Props> = ({
  onClose,
  open,
  onHandleSubmit,
}) => {
  const form = useForm<Task>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      dueDate: new Date(),
      priority: "MEDIUM",
      status: "TODO",
    },
  });
  function onSubmit(value: Task) {
    onHandleSubmit(value);
    form.reset();
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
          <DialogDescription>
            Create a new task with details. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <TaskForm />
            <DialogFooter>
              <Button type="submit">Save Task</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DashboardTaskFormContainer;
