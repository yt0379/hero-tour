import { Injectable } from '@angular/core';
import {Hero} from "./hero";

@Injectable()
export class HeroService {
  heroes:Hero[]=[
    new Hero(1,'诸葛亮',100000),
    new Hero(2,'安琪拉',10000),
    new Hero(3,'阿珂',200000),
    new Hero(4,'曹操',3000),
    new Hero(5,'典韦',50000),
    new Hero(6,'周瑜',40000),
    new Hero(7,'刘备',150000),
    new Hero(8,'张飞',6000),
  ];

  constructor() { }

  getHeroes():Promise<Hero[]> {
    return Promise.resolve(this.heroes);
  }

  getHero(id:number):Hero{
    for(let hero of this.heroes){
      if (hero.id == id){
        return hero;
      }
    }
    //没有匹配项
    return null;
  }
}
