import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, LayoutGrid, List } from 'lucide-angular';

export type ViewMode = 'grid' | 'list';

@Component({
  selector: 'app-view-toggle',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './view-toggle.component.html',
  styleUrl: './view-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewToggleComponent {
  readonly LayoutGrid = LayoutGrid;
  readonly List = List;

  @Input() activeView: ViewMode = 'grid';
  @Output() viewChange = new EventEmitter<ViewMode>();

  setView(view: ViewMode): void {
    if (this.activeView !== view) {
      this.viewChange.emit(view);
    }
  }
}