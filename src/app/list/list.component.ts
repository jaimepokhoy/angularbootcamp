import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(private listService: ListService) { }
  tasks;

  ngOnInit() {
    this.listService.getTasks().subscribe(tasks => {
      console.log(tasks);
      this.tasks = tasks;
    });
  }

  toggle(task) {
    this.listService.toggleTask(task);
    task.complete = !task.complete;
  }

}
