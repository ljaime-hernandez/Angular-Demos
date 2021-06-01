import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswerComponent } from './components/answer/answer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuestionComponent } from './components/question/question.component';

const routes: Routes = [
  {path: 'dashboard', component:DashboardComponent},
  {path: 'question', component:QuestionComponent},
  {path: 'answer', component:AnswerComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
