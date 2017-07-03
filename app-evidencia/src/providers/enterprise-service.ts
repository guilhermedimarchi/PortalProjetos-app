import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from './base-service';
import 'rxjs/add/operator/map';

import {Enterprise} from '../models/Enterprise';

@Injectable()
export class EnterpriseService {

  private baseUrl: string;

  constructor(public http: Http, private baseService: BaseService) {
    console.log('Hello EnterpriseService Provider');
    this.baseUrl = "http://172.16.0.200:3000/enterprise/";
  }
  public getById(id) : any{
    return this.baseService.get(this.baseUrl + id).map(res => <Enterprise>(res.json()));
  }

  public get() : any{
    //console.log(this.baseService.get("https://randomuser.me/api/?results=10"));
    return this.baseService.get(this.baseUrl).map(res => <Array<Enterprise>>(res.json()));
    //console.log(res);
  }
  public post(enterprise: Enterprise){
    return  this.baseService.post(this.baseUrl,(enterprise)).subscribe(res => {
      console.log(res);
    });
  }

  public put(enterprise:Enterprise, id) : any{
      return this.baseService.put(this.baseUrl + id,enterprise).subscribe(res => {
        console.log(res);
      });
  }

  public delete(id:any) : any{
      return this.baseService.delete(this.baseUrl + id).subscribe(res => {
        console.log(res);
      });
  }
}
