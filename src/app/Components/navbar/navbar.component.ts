import { Component, Output, EventEmitter} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { ContentComponent } from '../content/content.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'navbar',
  standalone: true,
  imports: [MatToolbarModule ,MatIconModule, MatSidenavModule,FooterComponent,ContentComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 
  @Output() drawerToggle = new EventEmitter<void>();

  toggleDrawer() {
    this.drawerToggle.emit();
  }
}
