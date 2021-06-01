import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id: number;
  firstName: string;
  email: string;
  gender: string;
  imgUrl: string;
  loading = true;

  constructor(private aRoute: ActivatedRoute, private _userService: UserService) {
    this.id = +this.aRoute.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this._userService.getUser(this.id).subscribe(data =>{
      this.firstName = data.data[0].name;
      this.gender = data.data[0].gender;
      this.email = data.data[0].email;
      this.imgUrl = 'https://picsum.photos/200/150';
      this.loading = false;
    })
  }
}
