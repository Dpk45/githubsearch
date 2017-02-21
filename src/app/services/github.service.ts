import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
private userName:String;
private clientId:"364022450332af55b97d"
private clientSecret:"b08270a92ff2d1c08102ba56f7194998abd58814"

constructor(private _http:Http ){
    console.log("Github service started....")
    this.userName="dpk45";
}
getUser(){
return this._http.get("http://api.github.com/users/"+this.userName+'?clientId='+this.clientId+'&clientSecret='+this.clientSecret).
map(res=>res.json());
}

getRepos(){
return this._http.get("http://api.github.com/users/"+this.userName+'/repos?clientId='+this.clientId+'&clientSecret='+this.clientSecret).
map(res=>res.json());
}

updateUser(userName:String){
this.userName=userName;

}

}


