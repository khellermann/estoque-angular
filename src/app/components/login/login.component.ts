import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  senha: string;
  msg: string;
  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  teste(){
    console.log(this.email, this.senha);
  }

  login() {
    try {
      this.auth.login(this.email, this.senha)
        .then(resultado => {
          console.log(resultado);
          
        })
    } catch (error) {
      this.msg = error;
    }
  }

}
