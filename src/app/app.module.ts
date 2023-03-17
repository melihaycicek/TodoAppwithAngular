
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

//import { FilterPipe } from './filter.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
    
    //FilterPipe
  ],
  imports: [
    BrowserModule, 
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatListModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
