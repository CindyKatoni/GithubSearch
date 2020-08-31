import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repository } from './repository';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  username: User;
  // name: string;

  constructor(private http:HttpClient) {
    console.log('Ready to use github service...');
    // this.name =  'CindyKatoni';
    this.username = new User("");
  }
  userRequest(){
    interface ApiResponse{
      name:string;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.github_api).toPromise().then(response=>{
        this.username.name = response.name
        

        resolve()
      })
    })
    return promise
  }



  }

  // getName() {
  //   const user = this.http.get(`https://api.github.com/users/${this.name}?access_token=${environment.github_api}`)
  //   console.log(user);
  //   return user;
  // }

  // getRepository() {
  //   const repositories = this.http.get(`https://api.github.com/users/${this.name}/repos?access_token=${environment.github_api}`)
  //   console.log(repositories);
  //   return repositories;
  // }

  // updateName(name: string) {
  //   this.name = name;
  // }

