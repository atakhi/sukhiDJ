import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'gallery', loadChildren: './gallery/gallery.module#GalleryModule'},
  {path: 'services', loadChildren: './services/services.module#ServicesModule'},
  {path: 'booking', component: BookingComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
