import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../hero";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  @Input()
  heroes:Hero[];
  currentHero:Hero;//当前选中的英雄

  constructor() { }

  ngOnInit() {
  }

  selectHero(hero:Hero){
    this.currentHero = hero;
  }
}
