import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PitComponent } from './pit/pit.component';
import { KalahComponent } from './kalah/kalah.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BoardComponent } from './board/board.component';
import { FooterComponent } from './footer/footer.component';
import { StartingFormComponent } from './starting-form/starting-form.component';
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PitComponent,
    KalahComponent,
    BoardComponent,
    FooterComponent,
    StartingFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
