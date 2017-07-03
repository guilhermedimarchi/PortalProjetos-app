import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from './base-service';
import 'rxjs/add/operator/map';

import {Project} from '../models/Project';
import {User} from '../models/User';

@Injectable()
export class ProjectService {

  private baseUrl: string;

  constructor(public http: Http, private baseService: BaseService) {
    console.log('Hello ProjectService Provider');
    this.baseUrl = "http://172.16.0.200:3000/project/";
  }

  public getById(id) : any{
    return this.baseService.get(this.baseUrl + id).map(res => <Project>(res.json()));
  }

  public get() : any{
    //console.log(this.baseService.get("https://randomuser.me/api/?results=10"));
    return this.baseService.get(this.baseUrl).map(res => <Array<Project>>(res.json()));
    //console.log(res);
  }
  public post(project: Project){
    return  this.baseService.post(this.baseUrl,(project)).subscribe(res => {
      console.log(res);
    });
  }

  public put(project:Project, id) : any{
      return this.baseService.put(this.baseUrl + id,project).subscribe(res => {
        console.log(res);
      });
  }

  public delete(id:any) : any{
      return this.baseService.delete(this.baseUrl + id).subscribe(res => {
        console.log(res);
      });
  }

  public getUsers(id) : any{
    return this.baseService.get(this.baseUrl + id).map(res => <Array<Project>>(res.json));
  }

}
