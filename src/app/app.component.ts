import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GithubService} from './github.service';
import { SearchformComponent } from './searchform/searchform.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GithubService]
})
export class AppComponent {
  
  title = 'GithubSearch';
}
