import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from './forms/forms.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllCompLinkComponent } from './all-comp-link/all-comp-link.component';

@NgModule({
  declarations: [
    AppComponent,
    AllCompLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
