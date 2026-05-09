import { Component } from '@angular/core';
import { Home, Star, Clock3, Trash2 } from 'lucide-angular';
import { LogoComponent } from '../../molecules/logo/logo.component';
import { SidebarNavOptionComponent } from '../../molecules/sidebar-nav-option/sidebar-nav-option.component';
import { ButtonComponent,ButtonClickEvent } from '../../atoms/button/button.component';
@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [
    LogoComponent,
    SidebarNavOptionComponent,
    ButtonComponent
  ],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent {
  readonly homeIcon = Home;
  readonly starIcon = Star;
  readonly recentIcon = Clock3;
  readonly trashIcon = Trash2;

  activeSection: 'home' | 'favorites' | 'recent' | 'trash' = 'home';

  setActiveSection(section: 'home' | 'favorites' | 'recent' | 'trash'): void {
    this.activeSection = section;
  }
   onSubir(event: ButtonClickEvent): void {
    console.log('Subir clicked:', event);
    // tu lógica aquí
  }
}