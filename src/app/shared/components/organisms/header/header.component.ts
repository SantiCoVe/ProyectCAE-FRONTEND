import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button.component';
import { SearchBarComponent } from '../../molecules/search-bar/search-bar.component';
import { ViewToggleComponent, ViewMode } from '../../molecules/view-toggle/view-toggle.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, SearchBarComponent, ViewToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() activeView: ViewMode = 'grid';
  @Output() viewChange = new EventEmitter<ViewMode>();

  searchQuery: string = '';

  onViewChange(view: ViewMode): void {
    this.viewChange.emit(view);
  }

  onSearch(query: string): void {
    console.log('Buscando:', query);
  }
}