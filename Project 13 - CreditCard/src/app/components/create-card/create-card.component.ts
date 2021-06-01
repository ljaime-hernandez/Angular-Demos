import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CreditCard } from 'src/app/models/CreditCard';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  form: FormGroup;
  loading = false;
  title = 'Create Card';
  id: string | undefined;

  constructor(private toastr: ToastrService, private fb: FormBuilder, private _cardService: CardService) {
    this.form = this.fb.group({
      owner: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      expDate: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    })
   }

  ngOnInit(): void {
    this._cardService.getEditCard().subscribe(data => {
      this.id = data.id,
      this.title = 'Edit Card';
      this.form.patchValue({
        owner: data.owner,
        cardNumber: data.cardNumber,
        expDate: data.expDate,
        cvv: data.cvv
      })
    })
  }

  saveCard(){

    if (this.id == undefined){
      this.createCard();
    } else {
      this.editCard(this.id);
    }
  }

  createCard() {
    
    const CARD: CreditCard = {
      owner: this.form.value.owner,
      cardNumber: this.form.value.cardNumber,
      expDate: this.form.value.expDate,
      cvv: this.form.value.cvv,
      createDate: new Date(),
      updateDate: new Date()
    }

    this.loading = true;
    this._cardService.saveCard(CARD).then(()=>{
      this.loading = false;
      console.log('successfully registered card'),
      this.toastr.success('The card was registered succesfully', 'Card Registered'),
      this.form.reset();
    }, error => {
      this.loading = false;
      this.toastr.error('Oops, theres been an error registering the card')
      console.log(error);
    })

  }

  editCard(id: string) {
    const CARD: any = {
      owner: this.form.value.owner,
      cardNumber: this.form.value.cardNumber,
      expDate: this.form.value.expDate,
      cvv: this.form.value.cvv,
      updateDate: new Date()
    }

    this.loading = true;
    this._cardService.editCard(id, CARD).then(() => {
      this.loading = false,
      this.title = 'Add Card',
      this.form.reset();
      this.id = undefined;
      this.toastr.info('The card was updated successfully', 'Registration Updated')
    }, error => {

    }
    )}
  
}
