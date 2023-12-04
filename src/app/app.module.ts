import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MovimentiComponent } from './movimenti/movimenti.component';
import { DettagliMovimentiComponent } from './dettagli-movimenti/dettagli-movimenti.component';

@NgModule({
  declarations: [
    AppComponent,
    MovimentiComponent,
    DettagliMovimentiComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
