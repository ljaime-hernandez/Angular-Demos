import { Answer } from "./answer";

export class Question {
    qDescription: string;
    answers: Answer[];

    constructor(desc: string, ans: Answer[]){
        this.qDescription = desc;
        this.answers = ans;
    }
}