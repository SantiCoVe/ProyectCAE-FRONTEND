import { Component } from '@angular/core';
import { AsideComponent } from '../../../../shared/components/organisms/aside/aside.component';
import { HeaderComponent } from '../../../../shared/components/organisms/header/header.component';
import { FolderSectionComponent, FolderItem } from '../../../../shared/components/organisms/folder-section/folder-section.component';
import { ViewMode } from '../../../../shared/components/molecules/view-toggle/view-toggle.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [AsideComponent, HeaderComponent, FolderSectionComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
})
export class DashboardPageComponent {
  activeView: ViewMode = 'grid';

  folders: FolderItem[] = [
    { name: 'Documentos Legales', itemCount: 12 },
    { name: 'Facturas',           itemCount: 34 },
    { name: 'Reportes',           itemCount: 8  },
    { name: 'Recursos de Marketing', itemCount: 56 },
    { name: 'Recursos Humanos',   itemCount: 23 },
    { name: 'Tecnología',         itemCount: 15 },
  ];

  onViewChange(view: ViewMode): void {
    this.activeView = view;
  }
}