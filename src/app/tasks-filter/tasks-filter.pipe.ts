import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tasksFilter'
})
export class TasksFilterPipe implements PipeTransform {
  transform(value: any, category: String): any {
    if (category !== '') {
      return value.filter(task => task.category === category);
    } else {
      return value;
    }
  }
}
