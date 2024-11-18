import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ContentComponent } from './Components/content/content.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BackendService } from './service/backend.service';
import { MatDrawer, MatDrawerContainer, MatDrawerContent, MatDrawerMode } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NgFor, NgIf } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,ContentComponent,FooterComponent,HttpClientModule,MatListModule,MatDrawerContent,MatIconModule,MatDrawer,MatDrawerContainer,NgIf,NgFor,MatSnackBarModule], // Add NavbarComponent to imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BackendService] 
})
export class AppComponent {
  title = 'EmailSystem';



  constructor(private service: BackendService) {}

  @ViewChild('drawer') drawer!: MatDrawer;

  drawerMode: MatDrawerMode = 'side';
  draweropend = false;

  toggleDrawer() {
    if (this.drawer) {
      this.drawer.toggle();
    }
  }


}
