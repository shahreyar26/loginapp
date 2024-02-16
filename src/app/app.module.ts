import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { Page1Component } from './page/page2/page1.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonComponent } from './pokemon/pokemon.component';



@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    DemoComponent,
    Page1Component,
    PokemonComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
