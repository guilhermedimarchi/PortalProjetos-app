import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ProblemService} from '../../providers/problem-service';
import {BaseService} from '../../providers/base-service';
import {Problem} from '../../models/Problem';

/*
  Generated class for the ProblemDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-problem-details',
  templateUrl: 'problem-details.html',
  providers: [BaseService,ProblemService]
})
export class ProblemDetails {

  public problem: Problem;
  public id;

  constructor(public navCtrl: NavController, private navParams : NavParams, private problemService : ProblemService) {
    this.id = navParams.get("_id");
    console.log(this.id);
    this.problem = new Problem();
    
    this.problemService.getById(this.id).subscribe(res => {
        this.problem = res;
    })
  }

  ionViewDidLoad() {
    console.log('Hello ProblemDetails Page');
  }

}
