/* eslint-disable max-len */
import { Component } from '@angular/core';

interface location {
  imgAlt?: string;
  imgSrc: string;
  summary: string;
  tags?: Array<string>;
  title: string;
}
@Component({
  selector: 'tukki-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'How to add TailwindCSS to your Angular Nx Workspace';

  locations: Array<location> = [
    {
      title: 'Mountains',
      imgSrc: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fG1vdW50YWlufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      imgAlt: 'Mountains - explore the highest peaks',
      summary: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
      nihil.`,
      tags: ['mountains', 'summits', 'altitude']
    }
  ]
}
