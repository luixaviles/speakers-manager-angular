import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SpeakersRoutingModule } from './speakers-routing.module';
import { MaterialModule } from '../shared/material/material.module';

import { SpeakersComponent } from './speakers.component';
import { SpeakerListComponent } from './speaker-list/speaker-list.component';
import { SpeakerEditComponent } from './speaker-edit/speaker-edit.component';
import { SpeakerService } from './shared/services/speaker.service';
import { SpeakerAddComponent } from './speaker-add/speaker-add.component';
import { SpeakerDetailComponent } from './speaker-detail/speaker-detail.component';
import { SpeakerFormComponent } from './shared/speaker-form/speaker-form.component';

@NgModule({
  imports: [
    CommonModule,
    SpeakersRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SpeakersComponent, SpeakerListComponent, SpeakerEditComponent, SpeakerAddComponent, SpeakerDetailComponent, SpeakerFormComponent],
  providers: [MatDialog, SpeakerService],
  entryComponents: [SpeakerAddComponent, SpeakerDetailComponent]
})
export class SpeakersModule { }
