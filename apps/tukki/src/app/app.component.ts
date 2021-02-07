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
    },
    {
      title: 'Rivers',
      imgSrc: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHJpdmVyfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      imgAlt: 'Rivers - how about swimming with salmons',
      summary: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
      nihil.`,
      tags: ['rivers', 'streams', 'waterfalls', 'frozen']
    },
    {
      title: 'Forests',
      imgSrc: 'https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9yZXN0fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      imgAlt: 'Forests - you might find a video or two',
      summary: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
      nihil.`,
      tags: ['forests', 'trekks', 'trails', 'wildlife']
    },
    {
      title: 'Caves',
      imgSrc: 'https://images.unsplash.com/photo-1572587356426-b33bf42f999b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F2ZXxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      imgAlt: 'Caves - wonders beyond the dark',
      summary: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
      nihil.`,
      tags: ['caves', 'hideouts', 'urban-undergrounds']
    }
  ]
}
