import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';


@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
