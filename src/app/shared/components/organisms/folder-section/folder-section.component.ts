import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Folder } from 'lucide-angular';
import { CardFolderComponent } from '../../molecules/card-folder/card-folder.component';
import { ViewMode } from '../../molecules/view-toggle/view-toggle.component';

export interface FolderItem {
  name: string;
  itemCount: number;
}

@Component({
  selector: 'app-folder-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, CardFolderComponent],
  templateUrl: './folder-section.component.html',
  styleUrl: './folder-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FolderSectionComponent {
  readonly FolderIcon = Folder;

  @Input() folders: FolderItem[] = [];
  @Input() activeView: ViewMode = 'grid';

  onFolderClick(name: string): void {
    console.log('Carpeta seleccionada:', name);
  }
}