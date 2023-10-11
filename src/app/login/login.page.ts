import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = "";
  password: string = "";

  constructor(private router:Router) { }

  ngOnInit() {
    this.username="superadmin";
    this.password="123";
  }

  checkLoginAuth(){
    // alert("username : " +this.username+" password : "+ this.password)
    if(this.username=="superadmin" && this.password=="123"){
      alert("Masuk aja Bang lu SuperAdmin soalnya");
      this.router.navigateByUrl('/home', {state:{userRole : "superadmin"} });
    }
    else if(this.username=="dayat" && this.password=="123"){
      alert("Masuk aja Bang");
      this.router.navigateByUrl('/home', {state:{userRole : "dayat"} });
    }else{
      alert("TETTOTTTT");
    }
  }

}
