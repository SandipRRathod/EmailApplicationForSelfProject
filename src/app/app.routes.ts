import { Routes } from '@angular/router';
import { ContentComponent } from './Components/content/content.component';

export const routes: Routes = [
    {
        path:"sendEmail",
        component:ContentComponent,
        pathMatch:"full"
    }
];
