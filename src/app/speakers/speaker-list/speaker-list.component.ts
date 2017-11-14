import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SpeakerService } from '../shared/services/speaker.service';
import { Speakers, Speaker } from '../shared/model';

@Component({
  selector: 'sm-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SpeakerListComponent implements OnInit {

  speakers: Speaker[];

  constructor(private speakerService: SpeakerService) { }

  ngOnInit() {
    this.loadSpeakers();
  }

  private loadSpeakers(): void {
    this.speakerService.getSpeakers()
    .subscribe((data: Speakers) => {
      this.speakers = data.results;
      console.log('speakers', this.speakers);
    });
  }
}
