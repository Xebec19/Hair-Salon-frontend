import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../global/material/material.module';

import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { DesktopComponent } from './home/desktop/desktop.component';
import { MobileComponent } from './home/mobile/mobile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    DesktopComponent,
    MobileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class HomeModule { }
