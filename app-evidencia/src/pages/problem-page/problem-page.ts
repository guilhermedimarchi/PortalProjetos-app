import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProblemService} from '../../providers/problem-service';
import {BaseService} from '../../providers/base-service';
import {Problem} from '../../models/Problem';
import {ProblemDetails} from '../problem-details/problem-details';
/*
  Generated class for the ProblemPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-problem-page',
  templateUrl: 'problem-page.html',
  providers: [ProblemService,BaseService]
})
export class ProblemPage {

  public problems : Problem[];

  constructor(public navCtrl: NavController, private problemService : ProblemService) {
    this.problemService.get().subscribe(res => {
      this.problems = res;
    });
  }

  goToDetails(id)
  {
      this.navCtrl.push(ProblemDetails,{_id: id});
  }

  ionViewDidLoad() {
    console.log('Hello ProblemPage Page');
  }

}
