import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repository } from './repository';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
 
  user: User;
  repository: Repository;
  

  constructor(private http:HttpClient) {
    this.user = new User('', '', '', '');
    this.repository = new Repository('');
  }

  //Define Interface
  getgithubUser(gitName: string){
    interface ApiResponse{
      login: string,
      public_repos: string,
      followers: string,
      following: string,
    }
     //HTTP Requests using observables and RxJS operators
     let promise = new Promise((resolve, reject) => {
      let github_api = 'https://api.github.com/users/' + gitName + '?access_token=' + environment.github_api;
      this.http
        .get<ApiResponse>(github_api)
        .toPromise()
        .then((res: any) => { 
            //Successful request
            this.user = res;
            resolve();
          },
          err => {
            //Request Not Successful
            reject(err);
          }
        );
    });
    return promise;
  }

 

 




  }























    // getName(){
  //   const user = this._http.get(`https://api.github.com/users/${this.name}?access_token=${environment.github_api}`)
  //   console.log(user);
  //   return user;
  // }

  // getRepository() {
  //   const repositories = this._http.get(`https://api.github.com/users/${this.name}/repos?access_token=${environment.github_api}`)
  //   console.log(repositories);
  //   return repositories;
  // }

  // updateName(name: string) {
  //   this.name = name;
  // }