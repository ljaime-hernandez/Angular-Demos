import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-appt-list',
  templateUrl: './appt-list.component.html',
  styleUrls: ['./appt-list.component.css']
})
export class ApptListComponent implements OnInit {

   @Input() listAppointments: any;
   @Output() deletedAppt = new EventEmitter<number>(); 

  constructor() { }

  ngOnInit(): void {
  }

  deleteAppt(index: number): void {
    this.deletedAppt.emit(index);
  }
}
