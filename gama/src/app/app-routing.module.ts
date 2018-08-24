import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { Error404Component } from './pages/error404/error404.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
<<<<<<< HEAD
import { EventsComponent } from './pages/events/events.component';
=======
import { SignUpComponent } from './pages/signup/signup.component';
import { UserAuthenticatedGuard } from './auth/user-authenticated.guard';
>>>>>>> a0cd63573c241e39381321ed3778e1a77e4970c9

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
<<<<<<< HEAD
    path: 'evento',
    component: EventsComponent
=======
    path: 'signup',
    component: SignUpComponent
>>>>>>> a0cd63573c241e39381321ed3778e1a77e4970c9
  },
  {
    path: 'tarefas',
    canActivate: [UserAuthenticatedGuard],
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
