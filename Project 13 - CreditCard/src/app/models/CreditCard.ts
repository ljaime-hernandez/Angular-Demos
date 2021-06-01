export class CreditCard {
    id?: string;
    owner: string;
    cardNumber: string;
    expDate: string;
    createDate: Date;
    updateDate: Date;
    cvv: number;


    constructor(newOwner: string, newCardNumber: string, newExpDate: string, newCvv: number){
        this.id = '';
        this.owner = newOwner;
        this.cardNumber = newCardNumber;
        this.expDate = newExpDate;
        this.cvv = newCvv;
        this.createDate = new Date();
        this.updateDate = new Date();
    }
}