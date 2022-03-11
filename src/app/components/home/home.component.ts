import { GithubService } from './../../services/github.service';
import { User } from './../../models/user.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { NzIconService } from 'ng-zorro-antd/icon';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {

  userProfile!:User;
  isLoading = false;
  urlSubscrition!:Subscription;

  searchForm = new FormGroup({
    userName: new FormControl('',[
      Validators.required
    ])
  });

  
  constructor(private iconService: NzIconService, 
    private github:GithubService,
    private router:Router,
    ) {
    this.iconService.fetchFromIconfont({
      scriptUrl: 'https://at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
    });
  }
  
  onSearch(){
    this.isLoading = true;
    const {userName} = this.searchForm.value;
   this.urlSubscrition =  this.github.getUser(userName).subscribe(res=>{
      if(res){
        this.isLoading = false;
        this.userProfile = res;
        localStorage.setItem('userProfile',JSON.stringify(this.userProfile));
      }
    });
    
  }

  onProfile(){
    this.router.navigate(['profile',this.userProfile.name])
  }

  ngOnDestroy(): void {
    this.urlSubscrition.unsubscribe();
  }
}
