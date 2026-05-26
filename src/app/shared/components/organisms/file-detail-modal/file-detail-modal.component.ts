import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  X, Download, Share2, Star, Trash2,
  FileText, HardDrive, Calendar, Clock
} from 'lucide-angular';

export interface FileDetail {
  name: string;
  type: string;
  size: string;
  created: string;
  modified: string;
  iconBg: string;
  iconColor: string;
  starred: boolean;
}

@Component({
  selector: 'app-file-detail-modal',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './file-detail-modal.component.html',
  styleUrl: './file-detail-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileDetailModalComponent {
  readonly XIcon       = X;
  readonly DownloadIcon = Download;
  readonly ShareIcon   = Share2;
  readonly StarIcon    = Star;
  readonly TrashIcon   = Trash2;
  readonly FileIcon    = FileText;
  readonly SizeIcon    = HardDrive;
  readonly CalendarIcon = Calendar;
  readonly ClockIcon   = Clock;

  @Input() file: FileDetail | null = null;
  @Input() visible: boolean = false;

  @Output() close   = new EventEmitter<void>();
  @Output() download = new EventEmitter<FileDetail>();
  @Output() share   = new EventEmitter<FileDetail>();
  @Output() delete  = new EventEmitter<FileDetail>();
  @Output() toggleStar = new EventEmitter<FileDetail>();

  onClose(): void {
    this.close.emit();
  }

  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.close.emit();
    }
  }

  onDownload(): void   { if (this.file) this.download.emit(this.file); }
  onShare(): void      { if (this.file) this.share.emit(this.file); }
  onDelete(): void     { if (this.file) this.delete.emit(this.file); }
  onToggleStar(): void {
    if (this.file) {
      this.file = { ...this.file, starred: !this.file.starred };
      this.toggleStar.emit(this.file);
    }
  }

  get typeColor(): string {
    const colors: Record<string, string> = {
      Tecnico:      '#3b82f6',
      Contrato:     '#ef4444',
      Reporte:      '#22c55e',
      Presentacion: '#ec4899',
      Marketing:    '#06b6d4',
    };
    return colors[this.file?.type ?? ''] || '#636366';
  }
}