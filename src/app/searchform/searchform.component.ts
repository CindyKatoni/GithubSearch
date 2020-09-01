import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { GithubService } from '../github.service';
import { User } from '../user';
import { Repository } from '../repository';
import * as moment from 'moment';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {

  gitName: string;
  repository: Repository
  user: User;

  @Output() gitsearchEmitter = new EventEmitter<any>();


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
  }

  getRepositories(gitName: string) {
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

  ngOnInit(): void {
    this.getGithubUser("CindyKatoni");
    this.getRepositories("CindyKatoni");
  }

  searchName() {
    this.gitsearchEmitter.emit(this.gitName);
    this.gitName = '';
  }




  // name:any = {};
  // repositories:any = [];

  // constructor(private _githubService: GithubService) {
  //   this._githubService.getName().subscribe(name => {
  //     console.log(name);
  //     this.name = name;
  //   });
  //   this._githubService.getRepository().subscribe(repositories => {
  //     console.log(repositories);
  //     this.repositories = repositories;
  //   });
  // }
  // searchName() {
  //   this._githubService.updateName(this.name);
  //   this._githubService.getName().subscribe(name => {
  //     this.name = name;
  //   });
  //   this._githubService.getRepository().subscribe(repositories => {
  //     this.repositories = repositories;
  //   });
  // }

}
