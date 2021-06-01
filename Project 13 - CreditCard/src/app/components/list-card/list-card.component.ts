import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CreditCard } from 'src/app/models/CreditCard';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {

  listCards: CreditCard[] = [];

  constructor(private _cardService: CardService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtainCards();
  }

  obtainCards() {
    this._cardService.retrieveCard().subscribe(doc => {
      this.listCards = [];
      console.log(doc);
      doc.forEach((element:any) => {
        console.log(element.payload.doc.id)
        this.listCards.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    });
  }

  deleteCard(id: any){
    this._cardService.deleteCard(id).then(() => {
      this.toastr.error('The card has been deleted successfully', 'Deleted Registration')
    }, error => {
      this.toastr.error('Oops, an error has ocurred' , 'Error')
    })
  }

  editCard(card: CreditCard) {
    this._cardService.addEditCard(card);
  }
}
