import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { CreditCard } from '../models/CreditCard';


@Injectable({
  providedIn: 'root'
})
export class CardService {

  private card$ = new Subject<any>();

  constructor(private firestore: AngularFirestore) { }

  saveCard(card: CreditCard): Promise<any> {
    return this.firestore.collection('cards').add(card);
  }

  retrieveCard(): Observable<any> {
    return this.firestore.collection('cards', ref => ref.orderBy('createDate', 'asc')).snapshotChanges();
  }

  deleteCard(id: string): Promise<any>{
    return this.firestore.collection('cards').doc(id).delete();
  }

  editCard(id: string, card: any): Promise<any>{
    return this.firestore.collection('cards').doc(id).update(card);
  }

  addEditCard(card: CreditCard) {
    this.card$.next(card);
  }

  getEditCard(): Observable<CreditCard> {
    return this.card$.asObservable();
  }
}
