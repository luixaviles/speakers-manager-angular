import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeakersComponent } from './speakers.component';
import { SpeakerListComponent } from './speaker-list/speaker-list.component';
import { SpeakerEditComponent } from './speaker-edit/speaker-edit.component';

const routes: Routes = [
  {
    path: '',
    component: SpeakersComponent,
    children: [
      {
        path: '',
        component: SpeakerListComponent,
      },
      {
        path: 'speakers/:id/edit',
        component: SpeakerEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeakersRoutingModule { }
