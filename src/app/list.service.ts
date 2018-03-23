import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Task } from './list/task';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ListService {
  private url = 'https://ang-bootcamp.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  toggleTask(task: Task) {
  }

  getTasks() {
  }

  addTask(task: Task) {
  }
}
