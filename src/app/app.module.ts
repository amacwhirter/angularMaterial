import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MdCheckboxModule, MdRadioModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    RadioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdCheckboxModule,
    MdRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
