import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

import { FirebaseService } from '../firebase.service'

@Component({
  selector: 'app-description-fields',
  templateUrl: './description-fields.component.html',
  styleUrls: ['./description-fields.component.less']
})
export class DescriptionFieldsComponent implements OnInit {
  @Input() create:boolean;
  @Input() doc:Document;
  @Output() nameField = new EventEmitter<string>();
  @Output() authorField = new EventEmitter<string>();
  @Output() descriptionField = new EventEmitter<string>();
  document: Document;
  name:string;
  author:string;
  description:string;

  constructor(private _firebaseService: FirebaseService) { 
    
  }

  ngOnInit() {
    if(!this.create){
      //On edit mode this shows empty doc after retrieving from firebase.
      console.log(this.doc)

    }
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

interface Document {
  id?: string;
  name: string;
  author: string;
  description: string;
  content: string;
}
