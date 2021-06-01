import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/models/answer';
import { Question } from 'src/app/models/question';
import { QuestionsService } from 'src/app/services/questions.service';
import { AnswerComponent } from '../answer/answer.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  listQuestions: Question[];

  constructor(public _questionService: QuestionsService) { }

  ngOnInit(): void {
    this.listQuestions = this._questionService.getQuestions();
  }

  obtainQuestion() {
    return this.listQuestions[this._questionService.indexQuestion].qDescription;
  }

  selectedAnswer(answer: Answer, index: number){
    if(this._questionService.confirmQuestion == true) {
      return;
    }
    this._questionService.selectedOption = answer;
    this._questionService.disableButton = false;
    this._questionService.indexAnswer = index;
  }

  addClassOption(answer: Answer){

    //uncomfirmed selection of answer
    if (answer == this._questionService.selectedOption && !this._questionService.confirmQuestion){
      return 'active text-light';
    }

    //correct and confirmed answer
    if (answer == this._questionService.selectedOption && this._questionService.confirmQuestion && this._questionService.selectedOption.isCorrect == 1){
      return 'list-group-item-success';
    }

    //incorrect and confirmed answer
    if (answer == this._questionService.selectedOption && this._questionService.confirmQuestion && this._questionService.selectedOption.isCorrect == 0){
      return 'list-group-item-danger';
    }
  }

  iconCorrect(answer: Answer){
    if (answer == this._questionService.selectedOption && this._questionService.confirmQuestion && this._questionService.selectedOption.isCorrect == 1){
      return 'true';
    }
  }

  iconIncorrect(answer: Answer){
    if (answer == this._questionService.selectedOption && this._questionService.confirmQuestion && this._questionService.selectedOption.isCorrect == 0){
      return 'false';
    }
  }
}
