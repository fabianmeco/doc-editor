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

export interface Document {name: string, description: string, author: string, content: string, id?:string, createdAt: string, editedAt: string};



@Injectable()

export class FirebaseService {
  private documentsCollection: AngularFirestoreCollection<Document>;
  document: Observable<Document[]>;



  constructor( private afdb: AngularFirestore) {
    this.documentsCollection = afdb.collection<Document>('documents');
    this.document = this.documentsCollection.snapshotChanges().map(actions =>{
      return actions.map(a=>{
        const data = a.payload.doc.data() as Document;
        const id = a.payload.doc.id;
        return {id, ...data}
      })
    })    
   }

   onCreateDocument(document: Document){
     return this.documentsCollection.doc(document.id).set(document);     
   }

   onUpdateDocument(document: Document){
     let tempDocument = this.documentsCollection.doc(document.id); 
     return tempDocument.update(document);
     
   }

   onGetDocument(id:string){
     return this.documentsCollection.doc(id).valueChanges();     
   }

   onGetAllDocuments(){
     return this.documentsCollection.valueChanges();
   }
  

  
  /* onCheckLoggedIn() {
    return this.afAuth.auth.currentUser;
  } */
}