import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  LucideAngularModule,
  LucideIconData
} from 'lucide-angular';

@Component({
  selector: 'app-sidebar-nav-option',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './sidebar-nav-option.component.html',
  styleUrl: './sidebar-nav-option.component.scss'
})
export class SidebarNavOptionComponent {
  @Input() label!: string;
  @Input() icon!: LucideIconData;
  @Input() active = false;
  @Input() count?: number;

  @Output() optionClick = new EventEmitter<void>();

  onClick(): void {
    this.optionClick.emit();
  }
}