import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-wrap',
  templateUrl: './create-wrap.component.html',
  styleUrls: ['./create-wrap.component.less']
})
export class CreateWrapComponent implements OnInit {
  create: boolean=true;
  constructor() { }

  ngOnInit() {
  }

}
