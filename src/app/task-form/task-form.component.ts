/*
 * Copyright(C) 2010 Luvina Software Company
 *
 * task-form.component.ts, Jun 18, 2023 tnanh
 */

import { Task } from '../Task';
import { TaskService } from '../task.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  taskForm: FormGroup;
  newTask: Task = new Task();
  // Kiểm tra form đã được submit thành công hay chưa
  isSubmitted = false;

  constructor(
    private taskService: TaskService,
    private formBuilder: FormBuilder
  ) {
    // Khởi tạo formGroup và áp dụng các validators cho các trường
    this.taskForm = this.formBuilder.group({
      taskName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      taskContent: ['', [Validators.required]],
      taskCategory: ['', [Validators.required]],
      taskCompleted: [false],
    });
  }

  /**
   * them task
   */
  addTask() {
    this.taskService.addTask(this.newTask);
    this.resetForm();
    // Đặt giá trị isSubmitted thành true sau khi submit thành công
    this.isSubmitted = true;
  }

  /**
   * reset form
   */
  resetForm() {
    this.newTask = new Task();
    // Đặt lại giá trị form về mặc định
    this.taskForm.reset();
    // Đặt giá trị isSubmitted thành false khi reset form
    this.isSubmitted = false;
  }
}
