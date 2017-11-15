import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

import { Speaker } from '../shared/model';

@Component({
  selector: 'sm-speaker-add',
  templateUrl: './speaker-add.component.html',
  styleUrls: ['./speaker-add.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SpeakerAddComponent implements OnInit {
  usernameFormControl = new FormControl('', [Validators.required]);
  speaker: Speaker = new Speaker();

  constructor(private dialogRef: MatDialogRef<SpeakerAddComponent>,
              @Inject(MAT_DIALOG_DATA) private params: any) {
  }

  ngOnInit() {
  }

  onSave() {
    this.dialogRef.close({
      speaker: this.speaker,
      dialogType: this.params.dialogType
    });
  }
}
