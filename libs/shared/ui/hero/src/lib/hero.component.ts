import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tukki-hero',
  templateUrl: './hero.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
