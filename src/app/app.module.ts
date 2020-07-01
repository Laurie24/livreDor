import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnnonceComponent } from './components/annonce/annonce.component';
import { DetailAnnonceComponent } from './components/detail-annonce/detail-annonce.component';
import { EditAnnonceComponent } from './components/edit-annonce/edit-annonce.component';
import { AddAnnonceComponent } from './components/add-annonce/add-annonce.component';
import { MenuComponent } from './components/menu/menu.component';
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import { HomeComponent } from './components/home/home.component';
import {FormsModule} from "@angular/forms";
import {FirstCharPipe} from "./pipes/first-char.pipe";


@NgModule({
  declarations: [
    AppComponent,
    AnnonceComponent,
    DetailAnnonceComponent,
    EditAnnonceComponent,
    AddAnnonceComponent,
    MenuComponent,
    HomeComponent,
    FirstCharPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
