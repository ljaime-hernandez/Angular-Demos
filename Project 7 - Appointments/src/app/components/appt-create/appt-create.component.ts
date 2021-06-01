import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-appt-create',
  templateUrl: './appt-create.component.html',
  styleUrls: ['./appt-create.component.css']
})
export class ApptCreateComponent implements OnInit {

  name = '';
  date = '';
  hour = '';
  symptoms = '';
  incorrectForm = true;

  @Output() newAppt = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  addAppointment(): void{
    if(this.name == '' || this.date == '' || this.hour == '' || this.symptoms == ''){
      this.incorrectForm = false;
      return;
    }
    
    const Appt = {
      name: this.name,
      date: this.date,
      hour: this.hour,
      symptoms: this.symptoms
    }
    this.newAppt.emit(Appt);
    this.resetFields();
  }

  resetFields(): void {
    this.name = '';
    this.date = '';
    this.hour = '';
    this.symptoms = '';
  }
}
