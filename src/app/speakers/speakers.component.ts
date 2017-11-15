import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { DialogType } from './shared/model';
import { SpeakerAddComponent } from './speaker-add/speaker-add.component';

@Component({
  selector: 'sm-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SpeakersComponent implements OnInit {

  dialogRef: MatDialogRef<SpeakerAddComponent>;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  onAddSpeaker() {
    this.openSpeakerAddPopup({
      data: {
        dialogType: DialogType.ADD
      }
    });
  }

  private openSpeakerAddPopup(params): void {
    this.dialogRef = this.dialog.open(SpeakerAddComponent, params);
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('result', result);
    });
  }
}
