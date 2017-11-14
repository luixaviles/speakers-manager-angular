import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'sm-speaker-add',
  templateUrl: './speaker-add.component.html',
  styleUrls: ['./speaker-add.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SpeakerAddComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SpeakerAddComponent>,
              @Inject(MAT_DIALOG_DATA) public params: any) {

  }

  ngOnInit() {
  }

}
