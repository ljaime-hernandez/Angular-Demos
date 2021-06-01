import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listAppt: any[] = [];

  addAppointment(appt: any): void{
    this.listAppt.push(appt);
  }

  deleteApptIndex(index: number): void{
    this.listAppt.splice(index, 1);
  }
}
