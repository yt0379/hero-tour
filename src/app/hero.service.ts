import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

const BASE_URL='http://localhost:3000/h';

@Injectable()
export class HeroService {
  heroes:Hero[]=[];

  constructor(private http:Http) { }

  getHeroes():Promise<Hero[]> {
    return this.http
      .get(BASE_URL) //返回Observable<Response>对象
      .toPromise()   //转换为Promise<Response>对象
      //转换为Promise<Hero[]>
      .then(res=>{
        var data = res.json().data;
        // this.heroes = data;
        return data;
      })
      .catch(this.handleError)
  }

  handleError(error){
    return Promise.reject(error.message||error);
  }

  getHero(id:number):Promise<Hero>{
    return this.http.get(BASE_URL+'/'+id)
      .toPromise()   //转换为Promise<Response>对象
      //转换为Promise<Hero>
      .then(res=>{
        var data = res.json().data;
        return data as Hero;
      })
      .catch(this.handleError)
  }

  addHero(h:Hero){
    return this.http.post(BASE_URL,h)
      .toPromise()   //转换为Promise<Response>对象
      //转换为Promise<Hero>
      .then(res=>{
        var data = res.json().data;
        return data;
      })
      .catch(this.handleError)
  }
}
