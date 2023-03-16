import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//Mis importaciones
import { AppComponent } from './app.component';
import { AdviceItemComponent } from './components/advice-item/advice-item.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AdviceItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
