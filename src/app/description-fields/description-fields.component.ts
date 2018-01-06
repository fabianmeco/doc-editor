import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-description-fields',
  templateUrl: './description-fields.component.html',
  styleUrls: ['./description-fields.component.less']
})
export class DescriptionFieldsComponent implements OnInit {
  @Input() create:boolean;
  @Output() nameField = new EventEmitter<string>();
  @Output() authorField = new EventEmitter<string>();
  @Output() descriptionField = new EventEmitter<string>();

  name:string;
  author:string;
  description:string;

  constructor() { }

  ngOnInit() {
  }

  saveName(){
   this.nameField.emit(this.name)
  }

  saveAuthor(){
    this.authorField.emit(this.author)
  }
  saveDescription(){
    this.descriptionField.emit(this.description)
  }


}
