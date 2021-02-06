import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/**
 * Shared modules
 */
import { 
  SharedUiHeaderModule,
  SharedUiHeroModule 
} from '@tukki/shared/ui'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    SharedUiHeaderModule,
    SharedUiHeroModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
