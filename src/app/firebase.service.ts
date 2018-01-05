import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import {AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore'

import 'rxjs/add/operator/switchMap'
import 'rxjs/add/observable/combineLatest'
import 'rxjs/add/operator/map';

import * as firebase from 'firebase/app';
import { FirebaseApp } from 'angularfire2';
import { Promise } from 'q';
import { Text } from '@angular/compiler';

export interface Document {name: string, description: string, author: string, content: Text};


@Injectable()

export class FirebaseService {
  private documentsCollection: AngularFirestoreCollection<Document>;
  document: Observable<Document[]>;



  constructor( private afdb: AngularFirestore) {
    this.documentsCollection = afdb.collection<Document>('users');
    this.document = this.documentsCollection.valueChanges();  
   }

   
  

  
  /* onCheckLoggedIn() {
    return this.afAuth.auth.currentUser;
  } */
}