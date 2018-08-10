import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentService } from './shared/services/content/content.service';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
