import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { SpeakerService } from '../shared/services/speaker.service';
import { Speaker, SpeakerForm, FormMode } from '../shared/model';

@Component({
  selector: 'sm-speaker-add',
  templateUrl: './speaker-add.component.html',
  styleUrls: ['./speaker-add.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SpeakerAddComponent implements OnInit, SpeakerForm {
  speaker: Speaker = new Speaker();
  formMode: FormMode;

  constructor(private dialogRef: MatDialogRef<SpeakerAddComponent>,
              @Inject(MAT_DIALOG_DATA) private params: any,
              private speakerService: SpeakerService) {
    this.formMode = params.formMode;
  }

  ngOnInit() {
  }

  onAdd(speaker: Speaker) {
    this.speakerService.add(speaker)
      .subscribe((response: Speaker) => this.dialogRef.close(response));
  }
}
