import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.scss'],
})
export class DateFieldComponent implements OnInit {
  @Input() public calenderTitle;
  @Input() public initialDate;
  @Output() selectedDate = new EventEmitter<Date>();
  @Output() selectedTime = new EventEmitter<Date>();
  currentDate: Date;
  futureDate: Date;
  dateToShow: Date;
  months: number[] = [];
  constructor() {}

  ngOnInit() {
    this.currentDate = new Date();
    this.currentDate.setHours(this.currentDate.getHours() + 1);
    this.currentDate.setMinutes(30);
    this.futureDate = new Date();
    this.futureDate.setHours(this.futureDate.getHours() + 48);
    this.months.push(this.currentDate.getMonth() + 1);
    this.months[1] = this.months[0] + 1;

    this.initialDate
      ? this.selectedDate.emit(this.futureDate)
      : this.selectedDate.emit(this.currentDate);
    this.selectedTime.emit(this.currentDate);
    this.initialDate
      ? (this.dateToShow = this.futureDate)
      : (this.dateToShow = this.currentDate);
  }

  dateChange(event: any) {
    this.selectedDate.emit(new Date(event.detail.value));
  }

  timeChange(event: any) {
    this.selectedTime.emit(new Date(event.detail.value));
  }
}
