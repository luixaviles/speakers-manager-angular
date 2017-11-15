import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { SpeakerDetailComponent } from '../speaker-detail/speaker-detail.component';
import { SpeakerService } from '../shared/services/speaker.service';
import { Speakers, Speaker } from '../shared/model';
import { DialogType } from '../shared/model/enums/dialog-type';
import { FormMode } from '../shared/model/enums/form-mode';

@Component({
  selector: 'sm-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SpeakerListComponent implements OnInit {

  dialogRef: MatDialogRef<SpeakerDetailComponent>;
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

  private loadSpeakers(): void {
    this.speakerService.getAll()
    .subscribe((data: Speakers) => {
      this.speakers = data.results;
    });
  }

  private openSpeakerDetailPopup(params): void {
    this.dialogRef = this.dialog.open(SpeakerDetailComponent, params);
    this.dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log('result', result);
        const index = this.speakers.findIndex((s:Speaker) => s.id.value === result.id.value);
        this.speakers[index] = result;
      }
    });
  }
}
