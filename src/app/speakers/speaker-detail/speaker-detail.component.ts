import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Speaker, SpeakerForm, FormMode } from '../shared/model';
import { SpeakerService } from '../shared/services/speaker.service';

@Component({
  selector: 'sm-speaker-detail',
  templateUrl: './speaker-detail.component.html',
  styleUrls: ['./speaker-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SpeakerDetailComponent implements OnInit, SpeakerForm {
  speaker: Speaker;
  formMode: FormMode;

  constructor(private dialogRef: MatDialogRef<SpeakerDetailComponent>,
              @Inject(MAT_DIALOG_DATA) private params: any,
              private speakerService: SpeakerService) {
    this.speaker = params.speaker;
    this.formMode = params.formMode;
  }

  ngOnInit() {
  }

  onSave(speaker: Speaker) {
    this.speakerService.update(speaker)
    .subscribe((response: Speaker) => this.dialogRef.close(response));
  }
}
