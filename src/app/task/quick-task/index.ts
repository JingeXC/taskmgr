import { Component, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-quick-task',
  templateUrl: './quick-task.component.html',
  styleUrls: ['./quick-task.component.scss']
})
export class QuickTaskComponent {

  desc: string;
  @Output() quickTask = new EventEmitter<string>();

  constructor() { }

  @HostListener('keyup.enter')
  sendQuickTask() {
    if (!this.desc || this.desc.length === 0 || !this.desc.trim()) {
      return;
    }
    this.quickTask.emit(this.desc);
    this.desc = '';
  }
}
