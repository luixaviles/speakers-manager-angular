import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Speaker, SpeakerForm, FormMode } from '../shared/models';
import { SpeakerService } from '../shared/services/speaker.service';

@Component({
  selector: 'sm-speaker-detail',
  templateUrl: './speaker-detail.component.html',
  styleUrls: ['./speaker-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SpeakerDetailComponent implements OnInit, SpeakerForm {
  speakerId: number | string;
  speaker: Speaker = new Speaker();
  formMode: FormMode;

  constructor(private dialogRef: MatDialogRef<SpeakerDetailComponent>,
              @Inject(MAT_DIALOG_DATA) private params: any,
              private speakerService: SpeakerService) {
    this.speakerId = params.speakerId;
    this.formMode = params.formMode;
  }

  ngOnInit() {
    this.speakerService.get(this.speakerId)
      .subscribe((result: Speaker) => this.speaker = result);
  }

  onSave(speaker: Speaker) {
    this.speakerService.update(speaker)
    .subscribe((response: Speaker) => this.dialogRef.close(response));
  }
}
