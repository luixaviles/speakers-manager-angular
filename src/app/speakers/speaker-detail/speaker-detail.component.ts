import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Speaker } from '../shared/model';
import { FormMode } from '../shared/model/enums/form-mode';

@Component({
  selector: 'sm-speaker-detail',
  templateUrl: './speaker-detail.component.html',
  styleUrls: ['./speaker-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SpeakerDetailComponent implements OnInit {
  speaker: Speaker;
  formMode: FormMode;

  constructor(private dialogRef: MatDialogRef<SpeakerDetailComponent>,
              @Inject(MAT_DIALOG_DATA) private params: any) {
      this.speaker = params.speaker;
      this.formMode = params.formMode;
  }

  ngOnInit() {
  }

  onSave(speaker: Speaker) {
    //TODO save on Backend
    this.dialogRef.close(speaker);
  }
}
