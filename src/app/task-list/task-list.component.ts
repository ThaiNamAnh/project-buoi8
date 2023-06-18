/*
 * Copyright(C) 2010 Luvina Software Company
 *
 * task-list.component.ts, Jun 18, 2023 tnanh
 */

import { Component } from '@angular/core';
import { Task } from '../Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})

/**
 * Class TaskListComponent voi cac thuoc tinh va cac phuong thuc xoa, tim kiem
 */
export class TaskListComponent {
  // mang tasks voi kieu du lieu Task model
  tasks: Task[] = [];
  // mang cac task da loc voi kieu du lieu Task model
  filteredTasks: Task[] = [];
  // input tim kiem do nguoi dung nhap, su dung 2 way binding
  searchTerm: string = '';
  // phuong thuc khoi tao
  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
    this.filteredTasks = this.tasks;
  }

  /**
   * thuc hien xoa task
   * @param task thong tin dau vao la task
   */
  deleteTask(task: Task) {
    // hien thong bao co muon xoa khong
    const confirmation = confirm('Bạn có chắc chắn muốn xóa không?');
    if (confirmation) {
      this.taskService.deleteTask(task);
      //goi phuong thuc filter de de phong truong hop xoa trong luc filter
      this.filterTasks();
    }
  }

  /**
   * thuc hien filter theo ten task
   */
  filterTasks() {
    if (this.searchTerm.trim() === '') {
      this.filteredTasks = this.tasks; // Hiển thị tất cả công việc nếu không có từ khóa tìm kiếm
    } else {
      this.filteredTasks = this.tasks.filter((task) =>
        task.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      ); // Lọc công việc theo từ khóa tìm kiếm
    }
  }
}
