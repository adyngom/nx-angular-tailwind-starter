import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'tukki-card',
  templateUrl: './card.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() 
  imgSrc: string;

  @Input() 
  imgAlt: string | null;

  @Input()
  title = 'Card title';

  @Input()
  summary: string;

  @Input()
  tags: Array<string>

}
