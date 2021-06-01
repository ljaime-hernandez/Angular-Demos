import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  buttonString = 'Accept';

  constructor(public _questionsService: QuestionsService,
              private router :Router) { }

  ngOnInit(): void {
  }

  next() {
    switch(this.buttonString) {
      case 'Accept': {
        this._questionsService.confirmQuestion = true;
        this.buttonString = 'Next';

        if(this._questionsService.questions.length - 1 == this._questionsService.indexQuestion) {
          this.buttonString = 'Finish';
        }
        break;
      }
      case 'Next': {
        this._questionsService.indexQuestion++;
        this._questionsService.userAnswers.push(this._questionsService.indexAnswer);
        this._questionsService.disableButton = true;
        this._questionsService.confirmQuestion = false;
        this.buttonString = 'Accept';
        break;
      }
      case 'Finish': {
        this._questionsService.userAnswers.push(this._questionsService.indexAnswer);
        this._questionsService.selectedOption = null;
        this._questionsService.confirmQuestion = false;
        this._questionsService.indexQuestion = 0;
        this.router.navigate(['/answer']);
      }
    }
  }

}
