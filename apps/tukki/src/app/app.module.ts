import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/**
 * Shared modules
 */
import { SharedUiHeaderModule } from '@tukki/shared/ui/header'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedUiHeaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
