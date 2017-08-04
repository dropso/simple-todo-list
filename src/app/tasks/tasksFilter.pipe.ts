import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task';

@Pipe({
    name: 'tasksFilter',
    pure: false
})
export class TasksFilter implements PipeTransform {
    transform( tasks: Array<Task>, description: string, title: string) {
        return tasks.filter(task => {
            const descMatch = task.description.match( description);
            const titleMatch = task.title.match( description);
            if (descMatch || titleMatch) {
                return task;
            }
        });
    }
}
