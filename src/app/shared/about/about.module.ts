import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutRoutingModule } from './about-routing.module';
import { MaterialModule } from '../material/material.module';

import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    MaterialModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
