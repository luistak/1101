import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  toDolist: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }

  getTodoList() {
    this.toDolist = this.firebasedb.list('tasks');
    return this.toDolist;
  }

  addTask(task: string){
    this.toDolist.push({
      task: task,
      isChecked: false
    });
  }

  checkOrUnCheckTask($key: string, flag: boolean){
    this.toDolist.update($key, { isChecked: flag});
  }

  removeTask($key: string){
    this.toDolist.remove($key);
  }
}
