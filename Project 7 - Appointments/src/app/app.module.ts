import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApptCreateComponent } from './components/appt-create/appt-create.component';
import { ApptListComponent } from './components/appt-list/appt-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ApptCreateComponent,
    ApptListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
