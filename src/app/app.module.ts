import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SamochodyComponent } from './samochody/samochody.component';
import { TestComponent } from './test/test.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { NieznalezionyComponent } from './nieznaleziony/nieznaleziony.component';
import { SzczComponent } from './szcz/szcz.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SamochodyComponent,
    TestComponent,
    GaleriaComponent,
    NieznalezionyComponent,
    SzczComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
