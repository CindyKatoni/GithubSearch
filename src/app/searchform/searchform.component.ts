import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import * as moment from 'moment';


@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {
  name:any = {};
  repositories:any = [];

  constructor(private _githubService: GithubService) {
    this._githubService.getName().subscribe(name => {
      console.log(name);
      this.name = name;
    });
    this._githubService.getRepository().subscribe(repositories => {
      console.log(repositories);
      this.repositories = repositories;
    });
  }

  ngOnInit(): void {
  }

  searchName() {
    this._githubService.updateName(this.name);
    this._githubService.getName().subscribe(name => {
      this.name = name;
    });
    this._githubService.getRepository().subscribe(repositories => {
      this.repositories = repositories;
    });
  }

}
