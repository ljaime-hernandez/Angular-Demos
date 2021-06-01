import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/models/question';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  listQuestions: Question[];
  userAnswers: any[];

  constructor(public _questionsService: QuestionsService, private router: Router) { }

  ngOnInit(): void {
    this.listQuestions = this._questionsService.questions;
    this.userAnswers = this._questionsService.userAnswers;
  }

  goBack() {
    this._questionsService.userAnswers = [];
    this.router.navigate(['/']);
  }
}
