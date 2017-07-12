import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero";
import {HeroService} from "./hero.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '英雄巡礼';
  heroes: Hero[];//英雄列表

  //使用构造函数进行依赖注入
  constructor(private service:HeroService) {
  }

  ngOnInit(): void {
    //  数据初始化在ngOnInit中做
    this.service.getHeroes().then(
      (heroes) => this.heroes = heroes)
  }

}
