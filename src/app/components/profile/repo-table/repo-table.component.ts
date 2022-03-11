import { Repo } from './../../../models/user.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-table',
  templateUrl: './repo-table.component.html',
  styleUrls: ['./repo-table.component.scss']
})
export class RepoTableComponent implements OnInit {
  @Input() repoContent:Repo[] = [];
  constructor() {
    
   }

  ngOnInit(): void {
    console.log(this.repoContent)
  }

}
