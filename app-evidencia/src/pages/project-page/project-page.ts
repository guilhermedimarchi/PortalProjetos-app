import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProjectService} from '../../providers/project-service';
import {BaseService} from '../../providers/base-service';
import {Project} from '../../models/Project';
import {ProjectDetails} from '../project-details/project-details';
/*
  Generated class for the ProjectPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-project-page',
  templateUrl: 'project-page.html',
  providers: [BaseService,ProjectService]
})
export class ProjectPage {

  public projects : Project[];

  constructor(public navCtrl: NavController, private projectService: ProjectService) {
      this.projectService.get().subscribe(res => {
          this.projects = res;
      });
  }

  goToDetails(id)
  {
      this.navCtrl.push(ProjectDetails,{_id: id});
  }

  ionViewDidLoad() {
    console.log('Hello ProjectPage Page');
  }

}
