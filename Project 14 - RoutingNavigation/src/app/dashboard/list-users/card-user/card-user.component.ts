import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {

  @Input() user: any;
  @Input() image: string;
  imgUrl: string;
  firstName: string;
  email: string;
  id: number;

  constructor() { }

  ngOnInit(): void {
    this.firstName = this.user.name;
    this.email = this.user.email;
    this.imgUrl = 'https://picsum.photos/200/150';
    this.id = this.user.id;
  }

}
