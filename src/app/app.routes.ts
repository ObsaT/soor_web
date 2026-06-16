import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AthletesComponent } from './pages/athletes/athletes.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EventsComponent } from './pages/events/events.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { TrainingComponent } from './pages/training/training.component';
import { ShopComponent } from './pages/shop/shop.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './core/guards/auth.guard';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './client/client-layout/client-layout.component';

export const routes: Routes = [
  {
    path: 'client',
    component: ClientLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },

      { path: 'athletes', component: AthletesComponent },
      { path: 'home', component: HomeComponent },
      { path: 'events', component: EventsComponent },
      { path: 'training', component: TrainingComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'register', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
    ]
  },

  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [authGuard]
  },

  { path: '**', redirectTo: 'client' }
];
