import { Component } from '@angular/core';

import {GithubService} from '../services/github.service';

@Component({
    moduleId:module.id,
  selector: 'profile',
  templateUrl: `profile.component.html`,
  providers:[GithubService]
})
export class ProfileComponent  {  
user:any
repos:any[]
userName:String;

constructor(private _githubService:GithubService){
 
 this.user=false;


}


searchUser(){

this._githubService.updateUser(this.userName);

this._githubService.getUser().subscribe(user => {
  console.log(user);
  this.user=user;

})

this._githubService.getRepos().subscribe(repos => {
  
  this.repos = repos;
})


}

}

