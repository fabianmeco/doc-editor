import { Component, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Document } from '../../models/document.model'

@Component({
  selector: 'app-content-field',
  templateUrl: './content-field.component.html',
  styleUrls: ['./content-field.component.less']
})
export class ContentFieldComponent implements OnInit {
  @Input() create:boolean;
  @Input() doc: Subject<Document> = new Subject();
  @Output() content= new EventEmitter<string>();
  private editorContent:string =  "";
  constructor() { }

  ngOnInit() {
    this.doc.subscribe(event=>{
      this.editorContent = event.content;
    })
  } 
  onChange(){
    this.content.emit(this.editorContent);    
  }

  ngOnDestroy(){
    this.doc.unsubscribe();
  }

}
