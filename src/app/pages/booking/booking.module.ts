import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../global/material/material.module';

import { BookingComponent } from './booking/booking.component';
import { RouterModule, Routes } from '@angular/router';
import { DesktopComponent } from './booking/desktop/desktop.component';
import { MobileComponent } from './booking/mobile/mobile.component';

const routes: Routes = [
  {
    path: '',
    component: BookingComponent
  }
];

@NgModule({
  declarations: [
    BookingComponent,
    DesktopComponent,
    MobileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class BookingModule { }
