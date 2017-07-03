import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from './base-service';
import 'rxjs/add/operator/map';

import {Problem} from '../models/Problem';
import {Project} from '../models/Project';

@Injectable()
export class ProblemService {

  private baseUrl: string;

  constructor(public http: Http, private baseService: BaseService) {
    console.log('Hello ProblemService Provider');
    this.baseUrl = "http://172.16.0.200:3000/problem/";
  }

  public getById(id) : any{
    return this.baseService.get(this.baseUrl + id).map(res => <Problem>(res.json()));
  }

  public get() : any{
    //console.log(this.baseService.get("https://randomuser.me/api/?results=10"));
    return this.baseService.get(this.baseUrl).map(res => (res.json()));
    //console.log(res);
  }
  public post(problem: Problem){
    return  this.baseService.post(this.baseUrl,(problem)).subscribe(res => {
      console.log(res);
    });
  }

  public registerProject(id,project : Project ) : any{
    return this.baseService.post(this.baseUrl + id, project).subscribe(res => {
      console.log(res);
    });
  }

  public put(problem:Problem, id) : any{
      return this.baseService.put(this.baseUrl + id,problem).subscribe(res => {
        console.log(res);
      });
  }

  public delete(id:any) : any{
      return this.baseService.delete(this.baseUrl + id).subscribe(res => {
        console.log(res);
      });
  }

}
