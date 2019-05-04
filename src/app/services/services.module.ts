import { NgModule } from '@angular/core';
import { ServicesComponent } from './services.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ServicesComponent],
    imports: [CommonModule, RouterModule.forChild([{
        path: '', component: ServicesComponent
    }])]
})
export class ServicesModule {

}