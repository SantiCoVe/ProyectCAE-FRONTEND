import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Star } from 'lucide-angular';

export type DocumentType = 'Tecnico' | 'Contrato' | 'Reporte' | 'Presentacion' | 'Marketing';

@Component({
  selector: 'app-card-document',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './card-document.component.html',
  styleUrl: './card-document.component.scss',
})
export class CardDocumentComponent implements OnChanges {
  readonly StarIcon = Star;

  @Input() name: string = '';
  @Input() type: DocumentType = 'Tecnico';
  @Input() size: string = '';
  @Input() date: string = '';
  @Input() starred: boolean = false;
  @Input() iconBg: string = '#1a1a2e';

  @Output() cardClick = new EventEmitter<string>();
  @Output() starClick = new EventEmitter<boolean>();

  isStarred: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['starred']) {
      this.isStarred = changes['starred'].currentValue;
    }
  }

  onCardClick(): void {
    this.cardClick.emit(this.name);
  }

  onStarClick(event: MouseEvent): void {
    event.stopPropagation();
    this.isStarred = !this.isStarred;
    this.starClick.emit(this.isStarred);
  }

  get typeColor(): string {
    const colors: Record<DocumentType, string> = {
      Tecnico:      '#3b82f6',
      Contrato:     '#ef4444',
      Reporte:      '#22c55e',
      Presentacion: '#ec4899',
      Marketing:    '#06b6d4',
    };
    return colors[this.type];
  }
}