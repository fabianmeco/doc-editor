import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less']
})
export class FilterComponent implements OnInit {
  @Output() searchOutput : EventEmitter<string> = new EventEmitter();
  searchInput: string;
  constructor() { }

  ngOnInit() {
  }

  search(){
    this.searchOutput.emit(this.searchInput);
  }

}
