import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ListService {
  lists: any[] = [];
  private url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  toggleTask(task) {
    this.http.post(`${this.url}/toggle`, { taskId: task.id }).subscribe();
  }

  getTasks() {
    return this.http.get(`${this.url}/tasks`);
  }

  addTask(task) {
    return this.http.post(`${this.url}/tasks`, task).subscribe();
  }
}
