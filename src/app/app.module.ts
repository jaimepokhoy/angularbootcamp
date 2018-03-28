import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ListComponent } from './list/list.component';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateTaskComponent } from './create-task/create-task.component';

import { ListService } from './list.service';
import { LoginComponent } from './login/login.component';
import { StrikeDirective } from './strike/strike.directive';
import { TasksFilterPipe } from './tasks-filter/tasks-filter.pipe';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: 'create', component: CreateTaskComponent },
  { path: '', component: ListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateTaskComponent,
    LoginComponent,
    StrikeDirective,
    TasksFilterPipe
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ HttpClientModule, ListService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
