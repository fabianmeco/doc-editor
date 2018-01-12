import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-list-wrap',
  templateUrl: './list-wrap.component.html',
  styleUrls: ['./list-wrap.component.less']
})
export class ListWrapComponent implements OnInit {
  searchField : Subject<string> = new Subject();
  constructor() { }

  ngOnInit() {
  }

  search(search: string){
    this.searchField.next(search);
  }

}
