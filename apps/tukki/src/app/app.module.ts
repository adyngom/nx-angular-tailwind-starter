import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/**
 * Shared modules
 */
import { 
  SharedUiHeaderModule,
  SharedUiHeroModule,
  SharedUiPromoModule,
  SharedUiPartialsModule 
} from '@tukki/shared/ui'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    SharedUiHeaderModule,
    SharedUiHeroModule,
    SharedUiPromoModule,
    SharedUiPartialsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
