import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FolderInterface } from '../../../interfaces/folder.interface';
import {
  LucideAngularModule,
  Folder,
  ChevronRight
} from 'lucide-angular';

@Component({
  selector: 'app-folder-item-aside',
  standalone: true,
  imports: [
    LucideAngularModule,
    FolderItemAsideComponent // necesario para recursividad
  ],
  templateUrl: './folder-item-aside.component.html',
  styleUrl: './folder-item-aside.component.scss'
})
export class FolderItemAsideComponent {
  @Input({ required: true }) folder!: FolderInterface;
  @Input() selected = false;

  @Output() folderClick = new EventEmitter<FolderInterface>();

  expanded = false;

  readonly folderIcon = Folder;
  readonly chevronIcon = ChevronRight;

  get hasChildren(): boolean {
    return !!this.folder.children?.length;
  }

  onClick(): void {
    // Si tiene hijos, también expandir/contraer al hacer click en toda la fila
    if (this.hasChildren) {
      this.expanded = !this.expanded;
    }

    // Notificar al componente padre qué carpeta fue seleccionada
    this.folderClick.emit(this.folder);
  }

  toggleExpanded(event: MouseEvent): void {
    // Evita que el click se propague dos veces
    event.stopPropagation();

    // Cambiar estado expandido
    this.expanded = !this.expanded;

    // Seleccionar también la carpeta para que se pinte en azul
    this.folderClick.emit(this.folder);
  }
}