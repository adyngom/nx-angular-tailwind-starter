import { Component, Input } from '@angular/core';

@Component({
  selector: 'tukki-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent  {

  @Input()
  title = 'Tukki Header';

}
