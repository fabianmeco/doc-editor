import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../firebase.service'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  docList: Document[] = [];

  constructor(private _fireService: FirebaseService) { }

  ngOnInit() {
    this.loadDocList();
  }

  loadDocList(){
    this._fireService.onGetAllDocuments()
    .subscribe(document=>{      
      this.docList=document;
    })
  }

}

interface Document {
  id?: string;
  name: string;
  author: string;
  description: string;
  content: string;
  createdAt: string;
  editedAt: string;
}