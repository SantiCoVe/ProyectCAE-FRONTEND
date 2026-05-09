import { Component } from '@angular/core';
import { AsideComponent } from '../../../../shared/components/organisms/aside/aside.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    AsideComponent
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {

}
