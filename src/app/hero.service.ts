import { Injectable } from '@angular/core';
import {Hero} from "./hero";

@Injectable()
export class HeroService {
  heroes:Hero[]=[
    new Hero(1,'诸葛亮'),
    new Hero(2,'安琪拉'),
    new Hero(3,'阿珂'),
  ];

  constructor() { }

  getHeroes():Promise<Hero[]> {
    return Promise.resolve(this.heroes);
  }

}
