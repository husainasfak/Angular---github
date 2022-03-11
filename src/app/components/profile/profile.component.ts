import { Subscription } from 'rxjs';
import { User, Repo } from './../../models/user.model';
import { GithubService } from './../../services/github.service';

import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit,OnDestroy{
  user!:User
  repositories:Repo[] = []
  isLoading = false;
  repoSubscription!:Subscription;
  constructor(private github:GithubService) { 
    
  }


  ngOnInit(): void {
    this.isLoading = true;
    this.user = JSON.parse(localStorage.getItem('userProfile')!)
    this.repoSubscription = this.github.getRepo(this.user.repos_url).subscribe(res=>{
      if(res){
        this.repositories= res;
        this.isLoading = false;
      }  
    },err=>{
      if(err){
        this.isLoading = false
       return;
      }
    })

    
  }
  

  ngOnDestroy(): void {
    this.repoSubscription.unsubscribe()
  }

}
