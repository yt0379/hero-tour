import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {HeroService} from "../hero.service";
import {Hero} from "../hero";
import {Location} from "@angular/common";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero:Hero;

  constructor(
    private route:ActivatedRoute,
    private hs:HeroService,
    private loc:Location
  ) { }

  ngOnInit() {
    // 获取参数
    // params返回Observable对象  rxjs
    this.route.params.subscribe((p:Params)=>{
      //+使字符串转换为数字
      this.hero = this.hs.getHero(+p['id']);
    })

  }

  save(name:string){
    //  赋值
    this.hero.name = name;
    //  回退
    this.loc.back();
  }

}
