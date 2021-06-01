import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-list-image',
  templateUrl: './list-image.component.html',
  styleUrls: ['./list-image.component.css']
})
export class ListImageComponent implements OnInit {

  text = '';
  subscription: Subscription;
  listImages: any[] = [];
  loading = false;
  imagePerPage = 32;
  actualPage = 1;
  calculateTotalPages = 0;

  constructor(private _imageService: ImageService) {
    this.subscription = this._imageService.getSearchText().subscribe(data => {
      this.text = data;
      this.loading = true;
      this.obtainImages();
    })
   }

  ngOnInit(): void {
  }

  obtainImages() {
    this._imageService.getImages(this.text, this.imagePerPage, this.actualPage).subscribe(data => {
      this.loading = false;
      this.actualPage = 1;

      if(data.hits.length == 0){
        this._imageService.setError('No images found with the text entered');
        return;
      }

      this.calculateTotalPages = Math.ceil(data.totalHits /this.imagePerPage);

      this.listImages = data.hits;
    }, error => {
      this._imageService.setError('could not resolve the webpage properly');
      this.loading = false;
    });
  }

  previousPage() {
    this.actualPage--;
    this.loading = true;
    this.listImages = [];
    this.obtainImages();
  }

  nextPage() {
    this.actualPage++;
    this.loading = true;
    this.listImages = [];
    this.obtainImages();
  }

  previousPageClass() {
    if(this.actualPage == 1){
      return false;
    } else {
      return true;
    }
  }

  nextPageClass() {
    if(this.actualPage == this.calculateTotalPages){
      return false;
    } else {
      return true;
    }
  }
}
