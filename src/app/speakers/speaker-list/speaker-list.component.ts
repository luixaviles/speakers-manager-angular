import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { SpeakerDetailComponent } from '../speaker-detail/speaker-detail.component';
import { SpeakerAddComponent } from '../speaker-add/speaker-add.component';
import { SpeakerService } from '../shared/services/speaker.service';
import { Speakers, Speaker, SpeakerForm, FormMode } from '../shared/model';

@Component({
  selector: 'sm-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SpeakerListComponent implements OnInit {

  dialogRef: MatDialogRef<SpeakerForm>;
  speakers: Speaker[];

  constructor(private speakerService: SpeakerService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.loadSpeakers();
  }

  onSelectSpeaker(speaker: Speaker) {
    this.openSpeakerDetailPopup({
      data: {
        formMode: FormMode.VIEW,
        speaker: speaker
      }
    });
  }

  onAddSpeaker() {
    this.openSpeakerAddPopup({
      data: {
        formMode: FormMode.ADD
      }
    });
  }

  private loadSpeakers(): void {
    this.speakerService.getAll()
    .subscribe((data: Speakers) => {
      this.speakers = data.results;
    });
  }

  private openSpeakerDetailPopup(params): void {
    this.dialogRef = this.dialog.open(SpeakerDetailComponent, params);
    this.dialogRef.afterClosed().subscribe((result: Speaker) => {
      if(result) {
        const index = this.speakers.findIndex((s:Speaker) => s.id.value === result.id.value);
        this.speakers[index] = result;
      }
    });
  }

  private openSpeakerAddPopup(params): void {
    this.dialogRef = this.dialog.open(SpeakerAddComponent, params);
    this.dialogRef.afterClosed().subscribe((result: Speaker) => {
      if(result) {
        this.speakers.push(result);
      }
    });
  }
}
