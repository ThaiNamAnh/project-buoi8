/*
 * Copyright(C) 2010 Luvina Software Company
 *
 * task.service.ts, Jun 18, 2023 tnanh
 */

import { Injectable } from '@angular/core';
import { Task } from './Task';

@Injectable({
  providedIn: 'root',
})

/**
 * Class TaskService voi cac thuoc tinh va cac phuong thuc lay thong tin, them, xoa
 */
export class TaskService {
  // array cac task
  tasks: Task[] = [
    {
      id: 1,
      name: 'Website',
      content: 'Xây dưng website',
      category: 'Quan trọng',
      completed: false,
    },
    {
      id: 2,
      name: 'Dữ liệu',
      content: 'Cập nhật dữ liệu',
      category: 'Công việc',
      completed: false,
    },
    {
      id: 3,
      name: 'Hồ sơ',
      content: 'Bổ sung hồ sơ cá nhân',
      category: 'Cá nhân',
      completed: false,
    },
  ];

  /**
   * thuc hien lay thong tin task
   * @returns tra ve task
   */
  getTasks(): Task[] {
    return this.tasks;
  }

  /**
   * thuc hien them task moi
   * @param task thong tin dau vao la task
   */
  addTask(task: Task) {
    // thuc hien loc theo theo id cua cac task va truyen vao ham max de lay ra id lon nhat, sau do cong them 1 de ra newId
    const newId = Math.max(...this.tasks.map((task) => task.id)) + 1;
    task.id = newId;

    // them tash vao mang tasks
    this.tasks.push(task);
  }

  /**
   * thuc hien xoa task
   * @param task thong tin dau vao la task
   */
  deleteTask(task: Task) {
    // tim chi so index cua task o trong mang theo id
    const index = this.tasks.findIndex((t) => t.id === task.id);

    // neu tim thay se thuc hien xoa (-1 la truong hop ko tim thay)
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}
