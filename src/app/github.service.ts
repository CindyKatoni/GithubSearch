import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repository } from './repository';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  name: string;

  constructor(private _http: HttpClient) {
    console.log('Ready to use github service...');
    this.name =  'CindyKatoni';
  }

  getName() {
    const user = this._http.get(`https://api.github.com/users/${this.name}`)
    console.log(user);
  }

  
}
