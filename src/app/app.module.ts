import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentService } from './shared/services/content/content.service';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { AppRoutingModule} from './app-routing.module';
import { FullpageDirective } from './shared/directives/fullpage.directive';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    FullpageDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule
    
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
