import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.scss'],
})
export class DateFieldComponent implements OnInit {
  @Input() public calenderTitle;
  @Output() selectedDate = new EventEmitter<Date>();
  @Output() selectedTime = new EventEmitter<Date>();
  currentDate: Date;
  months: number[] = [];
  constructor() {}

  ngOnInit() {
    this.currentDate = new Date();
    this.months.push(this.currentDate.getMonth() + 1);
    this.months[1] = this.months[0] + 1;
  }

  dateChange(event: any) {
    this.selectedDate.emit(new Date(event.detail.value));
  }

  timeChange(event: any) {
    this.selectedTime.emit(new Date(event.detail.value));
  }
}
