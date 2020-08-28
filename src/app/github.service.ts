import { Injectable } from '@angular/core';
import { User } from './user';
import { Repository } from './repository';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  name: string;
  
  constructor() { }
}
