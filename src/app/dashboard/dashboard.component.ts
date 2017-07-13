import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes:Hero[];

  constructor(private hs:HeroService) { }

  ngOnInit() {
    this.hs.getHeroes().then((heroes)=>{
      //首先排序，然后截取前4并赋值
      this.heroes = heroes
        .sort((a,b)=>b.useCount-a.useCount)
        .slice(0,4)
    })
  }

}
