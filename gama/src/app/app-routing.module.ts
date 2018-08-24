import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { Error404Component } from './pages/error404/error404.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { SignUpComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'tarefas',
    component: TodoListComponent
  },
  {
    path: '**',
    component: Error404Component
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
