import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {ProjectService} from '../../providers/project-service';
import {BaseService} from '../../providers/base-service';
import {Project} from '../../models/Project';

/*
  Generated class for the ProjectDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-project-details',
  templateUrl: 'project-details.html',
  providers: [ProjectService,BaseService]
})
export class ProjectDetails {

  public id;
  public project : Project;

  constructor(public navCtrl: NavController, private projectService : ProjectService, private navParams : NavParams) {
    this.project = new Project();
    this.id = navParams.get("_id");
    projectService.getById(this.id).subscribe(res => {
        this.project = res;
    });
  }

  ionViewDidLoad() {
    console.log('Hello ProjectDetails Page');
  }

}
