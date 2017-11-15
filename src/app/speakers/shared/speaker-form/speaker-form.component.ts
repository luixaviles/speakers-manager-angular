import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material';
import { Speaker } from '../model';
import { FormMode } from '../model';

@Component({
  selector: 'sm-speaker-form',
  templateUrl: './speaker-form.component.html',
  styleUrls: ['./speaker-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SpeakerFormComponent implements OnInit {

  @Input()
  title: string;
  @Input()
  speaker: Speaker;
  @Input()
  mode: FormMode;
  @Output()
  onSave = new EventEmitter<Speaker>();

  formMode = FormMode;
  readOnlyMode: boolean;

  constructor() { }

  ngOnInit() {
    this.readOnlyMode = this.mode === FormMode.VIEW;
  }

  save(speaker: Speaker) {
    this.onSave.emit(speaker);
  }

  onActivateEdit(event: MatSlideToggleChange) {
    this.readOnlyMode = !event.checked;
  }

}
