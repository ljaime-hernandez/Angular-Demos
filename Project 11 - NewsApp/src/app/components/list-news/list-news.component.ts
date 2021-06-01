import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css']
})
export class ListNewsComponent implements OnInit {

  @Input() listNews: any;

  constructor() { }

  ngOnInit(): void {
  }

}
