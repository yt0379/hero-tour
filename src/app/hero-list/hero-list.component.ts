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

  //新增英雄
  hero:Hero;

  constructor() { }

  ngOnInit() {
    //  初始化数据
    this.hero = new Hero();
  }

  selectHero(hero:Hero){
    this.currentHero = hero;
  }

  addHero(){
    let newHero = new Hero(
      this.heroes.length+1,
      this.hero.name
    );
    this.heroes.push(newHero);
  }

  removeHero(hero:Hero){
    let index = this.heroes.indexOf(hero);
    this.heroes.splice(index,1);
    if(hero==this.currentHero){
      this.currentHero=null;
    }
  }
}
