import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoComponent } from './promo.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PromoComponent],
  exports: [PromoComponent],
})
export class SharedUiPromoModule {}
