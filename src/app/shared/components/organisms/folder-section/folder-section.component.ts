import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Folder, Code, FileText, Table, Image } from 'lucide-angular';
import { CardFolderComponent } from '../../molecules/card-folder/card-folder.component';
import { ViewMode } from '../../molecules/view-toggle/view-toggle.component';
import { CardDocumentComponent } from '../../molecules/card-document/card-document.component';
import { FileDetailModalComponent, FileDetail } from '../file-detail-modal/file-detail-modal.component';

export interface FolderItem {
  name: string;
  itemCount: number;
}

@Component({
  selector: 'app-folder-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, CardFolderComponent, CardDocumentComponent, FileDetailModalComponent],
  templateUrl: './folder-section.component.html',
  styleUrl: './folder-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FolderSectionComponent {
  readonly FolderIcon   = Folder;
  readonly CodeIcon     = Code;
  readonly FileTextIcon = FileText;
  readonly TableIcon    = Table;
  readonly ImageIcon    = Image;

  @Input() folders: FolderItem[] = [];
  @Input() activeView: ViewMode = 'grid';

  selectedFile: FileDetail | null = null;
  modalVisible: boolean = false;

  documents = [
    { name: 'Documentacion_AP...',   type: 'Tecnico'      as const, size: '45 KB',  date: 'Hace 24 meses', starred: false, iconBg: '#1a2744', icon: 'code'      },
    { name: 'Contrato_Servicios...', type: 'Contrato'     as const, size: '2.4 MB', date: 'Hace 24 meses', starred: true,  iconBg: '#2a1a1a', icon: 'file-text' },
    { name: 'Reporte_Trimestral...', type: 'Reporte'      as const, size: '1.2 MB', date: 'Hace 25 meses', starred: true,  iconBg: '#1a2a1a', icon: 'table'     },
    { name: 'Analisis_Ventas_2...',  type: 'Reporte'      as const, size: '2.8 MB', date: 'Hace 25 meses', starred: false, iconBg: '#1a2a1a', icon: 'table'     },
    { name: 'Presentacion_Proy...',  type: 'Presentacion' as const, size: '5.8 MB', date: 'Hace 25 meses', starred: true,  iconBg: '#1a1a2a', icon: 'file-text' },
    { name: 'Banner_Campana_...',    type: 'Marketing'    as const, size: '1.8 MB', date: 'Hace 25 meses', starred: false, iconBg: '#0a2a2a', icon: 'image'     },
  ];

  getIcon(icon: string): any {
    const map: Record<string, any> = {
      'code':      this.CodeIcon,
      'file-text': this.FileTextIcon,
      'table':     this.TableIcon,
      'image':     this.ImageIcon,
    };
    return map[icon];
  }

  getIconColor(type: string): string {
    const colors: Record<string, string> = {
      Tecnico:      '#3b82f6',
      Contrato:     '#ef4444',
      Reporte:      '#22c55e',
      Presentacion: '#ec4899',
      Marketing:    '#06b6d4',
    };
    return colors[type] || '#ffffff';
  }

  onFolderClick(name: string): void {
    console.log('Carpeta seleccionada:', name);
  }

  onDocumentClick(doc: any): void {
    this.selectedFile = {
      name:      doc.name,
      type:      doc.type,
      size:      doc.size,
      created:   '1 de marzo de 2024 a las 05:...',
      modified:  doc.date,
      iconBg:    doc.iconBg,
      iconColor: this.getIconColor(doc.type),
      starred:   doc.starred,
    };
    this.modalVisible = true;
  }

  onModalClose(): void {
    this.modalVisible = false;
    this.selectedFile = null;
  }

  onStarClick(index: number): void {
  this.documents = this.documents.map((doc, i) =>
    i === index ? { ...doc, starred: !doc.starred } : doc
  );

  if (this.selectedFile && this.selectedFile.name === this.documents[index].name) {
    this.selectedFile = { ...this.selectedFile, starred: this.documents[index].starred };
  }
}
onModalStarToggle(file: FileDetail): void {
  this.documents = this.documents.map(doc =>
    doc.name === file.name ? { ...doc, starred: file.starred } : doc
  );
  this.selectedFile = { ...file };
}
}