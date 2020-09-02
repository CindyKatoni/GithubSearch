import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { User } from '../user';
import { Repository } from '../repository';
import * as moment from 'moment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  repository: Repository
  user: User;

  constructor(public userRequest: GithubService) { }

  getGithubUser(gitName: string) {
    this.userRequest.getGithubUser(gitName).then(
      success => {
        console.log('Executing github search');
        this.user = this.userRequest.user
        console.log(this.user)
      },
      err => console.log(err)
    )
    this.userRequest.getRepository(gitName).then(
      success => {
        console.log('Executing repository search')
        this.repository = this.userRequest.repository;
        console.log(this.repository)
      },
      err => {
        console.log(err);
      }
    )
  }

  // getRepositories(gitName: string) {

  // }

  ngOnInit(): void {
  }

}
