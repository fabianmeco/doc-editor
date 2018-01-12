import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../firebase.service'
import { Document } from '../../models/document.model'
import { Subject } from 'rxjs/Subject';
import { FilterPipe } from '../filter.pipe'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  @Input() searchField: Subject<string> = new Subject();
  ascendentCreation: boolean = true;
  ascendentEdited: boolean = true;
  docList: Document[] = [];
  search: string;

  constructor(private _fireService: FirebaseService) { }

  ngOnInit() {
    this.loadDocList();
    this.searchField.subscribe(event => {
      this.search = event;
    })
  }

  loadDocList() {
    this._fireService.onGetAllDocuments()
      .subscribe(document => {
        this.docList = document;
      })
  }

  sortCreation() {
    this.ascendentCreation=!this.ascendentCreation;
    if (this.ascendentCreation) {      
      return this.docList.sort((a: Document, b: Document) => {
        return new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf();        
      })      
    }
    this.docList.sort((a: Document, b: Document) => {
      return new Date(a.createdAt).valueOf() - new Date(b.createdAt).valueOf();
    })    
  }

  sortLastUpdate() {
    this.ascendentEdited=!this.ascendentEdited;
    if (this.ascendentEdited) {      
      return this.docList.sort((a: Document, b: Document) => {
        return new Date(b.editedAt).valueOf() - new Date(a.editedAt).valueOf();        
      })      
    }
    this.docList.sort((a: Document, b: Document) => {
      return new Date(a.editedAt).valueOf() - new Date(b.editedAt).valueOf();
    })
  }

}

