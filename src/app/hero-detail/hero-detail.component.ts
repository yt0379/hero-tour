import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {HeroService} from "../hero.service";
import {Hero} from "../hero";
import {Location} from "@angular/common";
import 'rxjs/add/operator/switchMap';

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
    this.hero = new Hero();
    // 获取参数
    // params返回Observable对象  rxjs
    this.route.params
      .subscribe(p=>{
        this.hs.getHero(+p['id'])
          .then(hero=>this.hero=hero)
          .catch(err=>alert(err))
      })

  }

  save(){
    //  提交保存

    //  回退
    this.loc.back();
  }

}
