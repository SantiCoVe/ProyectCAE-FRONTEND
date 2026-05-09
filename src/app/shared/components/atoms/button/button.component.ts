import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule,Upload,
  LoaderCircle } from 'lucide-angular';

export interface ButtonClickEvent {
  originalEvent: MouseEvent;
  label: string;
}

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
export type ButtonSize    = 'sm' | 'md' | 'lg';
export type ButtonType    = 'button' | 'submit' | 'reset';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
    readonly Upload = Upload;
  readonly LoaderCircle = LoaderCircle;

  @Input() label: string          = 'Button';
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize       = 'md';
  @Input() type: ButtonType       = 'button';
  @Input() disabled: boolean      = false;
  @Input() loading: boolean       = false;
  @Input() iconLeft: string       = '';
  @Input() iconRight: string      = '';

  @Output() buttonClick = new EventEmitter<ButtonClickEvent>();
  @Output() nativeClick = new EventEmitter<MouseEvent>();

  get iconSize(): number {
    return this.size === 'sm' ? 14 : this.size === 'lg' ? 20 : 16;
  }

  get cssClasses(): Record<string, boolean> {
    return {
      btn: true,
      [`btn--${this.variant}`]: true,
      [`btn--${this.size}`]: true,
      'btn--loading':  this.loading,
      'btn--disabled': this.disabled || this.loading,
    };
  }

  handleClick(event: MouseEvent): void {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.nativeClick.emit(event);
    this.buttonClick.emit({ originalEvent: event, label: this.label });
  }
}