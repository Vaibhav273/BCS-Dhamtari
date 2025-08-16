import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})


export class About {
  news = [
    { idx: 1, newsName: 'Breaking News: Angular v20 Released!' },
    { idx: 2, newsName: 'TypeScript 5.2 Announced with New Features' },
    { idx: 3, newsName: 'New Angular Package Simplifies Marquee Component' },
  ];
}
