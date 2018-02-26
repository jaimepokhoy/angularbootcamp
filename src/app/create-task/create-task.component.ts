import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListService } from '../list.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private listService: ListService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.taskForm = this.fb.group({
      task: ['', Validators.required],
      category: ['Personal']
    });
  }

  onSubmit() {
    const formModel = this.taskForm.value;
    console.log(formModel);

    this.listService.addTask(formModel);

  }

}
