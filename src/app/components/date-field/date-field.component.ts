import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.scss'],
})
export class DateFieldComponent implements OnInit {
  @Input() public calenderTitle;

  constructor() {}

  ngOnInit() {}
}
