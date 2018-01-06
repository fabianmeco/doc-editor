import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'

import {FirebaseService} from '../firebase.service'
import { error } from 'util';

@Component({
  selector: 'app-create-wrap',
  templateUrl: './create-wrap.component.html',
  styleUrls: ['./create-wrap.component.less']
})
export class CreateWrapComponent implements OnInit {
  create: boolean;
  document: Document = <Document> {};
  edited :boolean = false;
  updatedAt: string;

  constructor(public _firebaseService: FirebaseService) {
    
    Observable.interval(10000)
    .takeWhile(()=>!false)
    .subscribe(i=>{
     if(!this.create&&this.edited){
        this.edited=false;        
        this._firebaseService.onUpdateDocument(this.document)
        .then(value =>{
          this.updatedAt = "This document was updated at ";
        }).catch(error=> console.log(error));        
      }
    })
  }

  ngOnInit() {
  }

  onKeyContent(content:string){
    this.document.content = content;
    this.edited = true;
  }

  saveName(name:string){
    this.document.name = name;
    this.edited = true;
  }

  saveAuthor(author:string){
    this.document.author = author;
    this.edited= true;
  }

  saveDescription(description:string){
    this.document.description = description;
    this.edited = true;
  }

  onCreate(){
    this.create=false;
    this.edited=false;
    this.document.id = Date.now().toString();
    this._firebaseService.onCreateDocument(this.document);
  }


}

interface Document{
  id?:string;
  name:string;
  author: string;
  description: string;
  content: string;
}
