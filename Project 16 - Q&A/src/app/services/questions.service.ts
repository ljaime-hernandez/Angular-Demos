import { Injectable } from '@angular/core';
import { Answer } from '../models/answer';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  indexQuestion = 0;
  selectedOption: Answer;
  disableButton = true;
  confirmQuestion = false;
  indexAnswer = null;
  userAnswers: Array<number> = [];

  public questions: Question[] = [
    new Question('Which is the capital of Argentina?', [
      new Answer('Buenos Aires', 1),
      new Answer('Santiago', 0),
      new Answer('Montevideo', 0),
      new Answer('Lima', 0),
    ]),
    new Question('Which is the capital of France?', [
      new Answer('Rome', 0),
      new Answer('Paris', 1),
      new Answer('Dublin', 0),
      new Answer('Athens', 0),
    ]),
    new Question('Which is the capital of Egypt?', [
      new Answer('Tunisia', 0),
      new Answer('Novi Sad', 0),
      new Answer('Cairo', 1),
      new Answer('Berlin', 0),
    ]),
  ]

  constructor() { }

  getQuestions(){
    return this.questions.slice();
  }
}
