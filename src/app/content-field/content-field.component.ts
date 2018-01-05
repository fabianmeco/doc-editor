import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-content-field',
  templateUrl: './content-field.component.html',
  styleUrls: ['./content-field.component.less']
})
export class ContentFieldComponent implements OnInit {
  @Input() create:boolean;
  constructor() { }

  ngOnInit() {
  }

}
