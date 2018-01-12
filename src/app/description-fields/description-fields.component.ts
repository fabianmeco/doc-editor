import { Component, OnInit, OnDestroy, Input,Output, EventEmitter } from '@angular/core';


import { FirebaseService } from '../firebase.service'
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Document } from '../../models/document.model'

@Component({
  selector: 'app-description-fields',
  templateUrl: './description-fields.component.html',
  styleUrls: ['./description-fields.component.less']
})
export class DescriptionFieldsComponent implements OnInit {
  @Input() create:boolean;
  @Input() doc: Subject<Document>;
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
    this.doc.subscribe(event=>{
      this.author = event.author;
      this.description = event.description;
      this.name = event.name;
    })
  }  
  ngOnDestroy(){
    this.doc.unsubscribe();
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


