import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit, OnDestroy {

  textError: string;
  showError: boolean;
  subscription: Subscription


  constructor(private _imageService: ImageService) {
    this.textError = '';
    this.showError = false;
    this.subscription = this._imageService.getError().subscribe(data => {
      this.showMessage();
      this.textError = data;
    })
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  showMessage() { 
    this.showError = true
    setTimeout(() => {
      this.showError = false;
    },2000)
  }
}
