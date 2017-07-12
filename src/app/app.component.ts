import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '英雄巡礼';
  heroes: Hero[];//英雄列表


  ngOnInit(): void {
    //  数据初始化在ngOnInit中做
    this.heroes = [
      new Hero(1,'诸葛亮'),
      new Hero(2,'安琪拉'),
      new Hero(3,'阿珂'),
    ]
  }

}
