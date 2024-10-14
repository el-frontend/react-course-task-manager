// Los usuarios pueden agregar nuevas tareas, proporcionando un título, descripción, fecha límite y prioridad (baja, media, alta).

export type Task = {
    id: string;
    title: string;
    description: string;
    dueDate: Date;
    priority: "Low" | "MEDIUM" | "HIGH";
    status: "TODO" | "IN_PROGRESS" | "DONE";
}