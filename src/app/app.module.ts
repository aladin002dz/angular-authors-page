import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AuthorsService } from './authors.service';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors.component';
import { TitleCasePipe } from './title-case.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    TitleCasePipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
