import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SpeakersRoutingModule } from './speakers-routing.module';
import { MaterialModule } from '../shared/material/material.module';

import { SpeakersComponent } from './speakers.component';
import { SpeakerListComponent } from './speaker-list/speaker-list.component';
import { SpeakerEditComponent } from './speaker-edit/speaker-edit.component';
import { SpeakerService } from './shared/services/speaker.service';

@NgModule({
  imports: [
    CommonModule,
    SpeakersRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [SpeakersComponent, SpeakerListComponent, SpeakerEditComponent],
  providers: [SpeakerService]
})
export class SpeakersModule { }
