import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-content-field',
  templateUrl: './content-field.component.html',
  styleUrls: ['./content-field.component.less']
})
export class ContentFieldComponent implements OnInit {
  @Input() create:boolean;
  @Output() content= new EventEmitter<string>();
  private editorContent:string =  "";
  constructor() { }

  ngOnInit() {
  } 
  onChange(){
    this.content.emit(this.editorContent);    
  }

}
