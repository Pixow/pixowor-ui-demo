import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PixButtonModule } from 'pixowor-ui';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PixButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
