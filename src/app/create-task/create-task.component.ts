import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  constructor( private listService: ListService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
  }

}
