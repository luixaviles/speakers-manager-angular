import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { AboutModule } from './about/about.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AboutModule
  ],
  exports: [
    MaterialModule
  ],
  declarations: []
})
export class SharedModule { }
