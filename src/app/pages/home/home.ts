import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { About } from '../../components/about/about';
import { Cta } from '../../components/cta/cta';
import { News } from '../../components/news/news';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    About,
    Cta,
    News,  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
