// aside.component.ts
import { Component } from '@angular/core';
import {
  LucideAngularModule,
  Home,
  Star,
  Clock3,
  Trash2,
  Plus
} from 'lucide-angular';

import { LogoComponent } from '../../molecules/logo/logo.component';
import { SidebarNavOptionComponent } from '../../molecules/sidebar-nav-option/sidebar-nav-option.component';
import { FolderItemAsideComponent } from '../../molecules/folder-item-aside/folder-item-aside.component';

import { FolderInterface } from '../../../interfaces/folder.interface';
import { MOCK_FOLDERS } from '../../../mock/folders.mock';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [
    LogoComponent,
    LucideAngularModule,
    SidebarNavOptionComponent,
    FolderItemAsideComponent
  ],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent {
  // Iconos
  readonly homeIcon = Home;
  readonly starIcon = Star;
  readonly recentIcon = Clock3;
  readonly trashIcon = Trash2;
  readonly plusIcon = Plus;

  // Navegación
  activeSection: 'home' | 'favorites' | 'recent' | 'trash' = 'home';

  setActiveSection(section: 'home' | 'favorites' | 'recent' | 'trash'): void {
    this.activeSection = section;
  }

  // Carpetas mock
  folders: FolderInterface[] = MOCK_FOLDERS;

  // Carpeta seleccionada
  selectedFolderId?: string;

  selectFolder(folder: FolderInterface): void {
    this.selectedFolderId = folder.id;
  }
}