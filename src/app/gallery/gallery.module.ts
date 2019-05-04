import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
    {path: '', component: GalleryComponent, children: [
        {path: 'photos', component: PhotosComponent},
        {path: 'videos', component: VideosComponent}
    ]}
  ];
@NgModule({
    imports: [CommonModule,
        RouterModule.forChild(routes)],
      declarations: [GalleryComponent, PhotosComponent, VideosComponent]
    })
export class GalleryModule {

}
