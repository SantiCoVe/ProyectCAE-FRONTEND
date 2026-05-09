import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Search } from 'lucide-angular';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {
  readonly SearchIcon = Search;

  @Input() placeholder: string = 'Buscar documentos...';
  @Input() value: string = '';

  @Output() valueChange = new EventEmitter<string>();
  @Output() search = new EventEmitter<string>();

  onInput(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    this.valueChange.emit(val);
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.search.emit(this.value);
    }
  }
}