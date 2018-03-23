import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { Task } from './task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(private listService: ListService) { }
  tasks: Task[];

  ngOnInit() {

  }

  toggle(task) {

  }

}
