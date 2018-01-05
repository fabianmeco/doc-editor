import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-description-fields',
  templateUrl: './description-fields.component.html',
  styleUrls: ['./description-fields.component.less']
})
export class DescriptionFieldsComponent implements OnInit {
  @Input() create:boolean;
  constructor() { }

  ngOnInit() {
  }

}
