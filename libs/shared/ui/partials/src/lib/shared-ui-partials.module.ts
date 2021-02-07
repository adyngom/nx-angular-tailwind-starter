import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SectionTitleComponent } from './section-title/section-title.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CardComponent, SectionTitleComponent],
  exports: [CardComponent, SectionTitleComponent],
})
export class SharedUiPartialsModule {}
