import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Folder } from 'lucide-angular';

@Component({
  selector: 'app-card-folder',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './card-folder.component.html',
  styleUrl: './card-folder.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardFolderComponent {
  readonly FolderIcon = Folder;

  @Input() name: string = 'Carpeta';
  @Input() itemCount: number = 0;

  @Output() folderClick = new EventEmitter<string>();

  onClick(): void {
    this.folderClick.emit(this.name);
  }
}