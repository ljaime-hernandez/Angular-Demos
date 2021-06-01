import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  listUsers: any[] = [];
  images: any[] = [];
  loading :boolean;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.loading = true;
    this.getUsers();
    this.getPictures();
   }

  getUsers(): void {
    this._userService.getUsers().subscribe( data =>{
      this.listUsers = data.data;
      this.loading = false;
    })
  }

  getPictures(): void {
    this._userService.getPics().subscribe(data =>{
      this.images = data;
    });
  }
}
