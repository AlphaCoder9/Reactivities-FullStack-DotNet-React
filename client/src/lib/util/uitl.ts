import { format } from "date-fns";

export function formatDate(date: string | Date) {
    return format(typeof date === 'string' ? new Date(date) : date, 'dd MMM yyyy h:mm a');
}