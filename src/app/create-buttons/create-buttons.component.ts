import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-buttons',
  templateUrl: './create-buttons.component.html',
  styleUrls: ['./create-buttons.component.less']
})
export class CreateButtonsComponent implements OnInit {
  @Input() create:boolean;
  @Output() createDocumentAction = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  onCreate(){
    this.createDocumentAction.emit(true);
  }

}
