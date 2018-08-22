import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../shared/database/database.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  toDoListArray: any[];
  constructor(private dataBaseService: DatabaseService ) { }

  ngOnInit() {
    this.dataBaseService.getTodoList().snapshotChanges()
    .subscribe(item => {
      this.toDoListArray = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.toDoListArray.push(x);
      })

      this.toDoListArray.sort((a, b) =>{
        return a.isChecked - b.isChecked;
      })
    });
  }

  onAdd(itemTask){
    this.dataBaseService.addTask(itemTask.value);
    itemTask.value = null;
  }

  alterCheck($key: string,isChecked) {
    this.dataBaseService.checkOrUnCheckTask($key,!isChecked);
  }
  onDelete($key : string){
    this.dataBaseService.removeTask($key);
  }

}
