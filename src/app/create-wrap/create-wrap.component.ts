import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs'
import { ActivatedRoute, Router } from "@angular/router"

import * as moment from 'moment'

import { FirebaseService } from '../firebase.service'
import { error } from 'util';
import { Subject } from 'rxjs/Subject';

import { Document } from '../../models/document.model'

@Component({
  selector: 'app-create-wrap',
  templateUrl: './create-wrap.component.html',
  styleUrls: ['./create-wrap.component.less']
})
export class CreateWrapComponent implements OnInit {
  create: boolean;
  document: Document = <Document>{};
  edited: boolean = false;
  updatedAt: string;
  doc: Subject<Document> = new Subject();

  constructor(public _firebaseService: FirebaseService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      if (params['doc_id']) {
        this.create = false;
        this.getDocument(params.doc_id)
          .subscribe(document => {
            this.doc.next(<Document>document);
          });
      } else {
        this.create = true;
      }
    })
    this.loopAutosave();
  }

  loopAutosave() {
    Observable.interval(5000)
      .takeWhile(() => !false)
      .subscribe(i => {
        if (!this.create && this.edited) {
          this.edited = false;
          this.document.editedAt = moment().format();
          this._firebaseService.onUpdateDocument(this.document)
            .then(value => {
              this.updatedAt = "This document was updated at " + this.document.editedAt;
            })
            .catch(error => console.log(error));
        }
      })
  }

  ngOnInit() {
  }

  onKeyContent(content: string) {
    this.document.content = content;
    this.edited = true;
  }

  saveName(name: string) {
    this.document.name = name;
    this.edited = true;
  }

  saveAuthor(author: string) {
    this.document.author = author;
    this.edited = true;
  }

  saveDescription(description: string) {
    this.document.description = description;
    this.edited = true;
  }

  onCreate() {
    this.create = false;
    this.edited = false;
    this.document.id = Date.now().toString();
    this.document.createdAt = moment().format();
    this.document.editedAt = moment().format();
    this._firebaseService.onCreateDocument(this.document)
      .then(value => {
        this.updatedAt = "This document was created at " + this.document.createdAt;
      })
      .catch(err => console.log(err));
  }

  getDocument(id: any) {
    return this._firebaseService.onGetDocument(id)
  }


}


