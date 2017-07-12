import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import {FormsModule} from "@angular/forms";
import {HeroService} from "./hero.service";

@NgModule({
  declarations: [//声明用到组件
    AppComponent,
    HeroListComponent
  ],
  imports: [//导入依赖模块
    BrowserModule,
    FormsModule
  ],
  providers: [HeroService],//提供用到服务
  bootstrap: [AppComponent]
})
export class AppModule { }
