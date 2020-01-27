import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Login } from 'src/app/modulos/login';
import { Logins } from 'src/app/modulos/logInterface';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  data: any;
  users: string;
  login: any;
  login2: Login[];
  login3: Logins[];
  respuesta: any[];
  respuesta2: any[];
  variable: any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getData();
    this.login2 = [];
    this.login3 = [];
    this.login = [
      {
        user: '',
        password: ''
      }
    ];
  }
  getData = () => {
    const tabla = 'login';
    this.http.get<any>(environment.ApI_URL + `get?tabla=${tabla}`).subscribe(resultado => {
      this.respuesta = resultado.datos;
      this.respuesta.forEach(element => {
        this.login2.push(element.user);
        this.login3.push(element.password);
      });
      console.log(this.login2[0]);
      console.log(this.login3[0]);
    });
  }
  datos = (variable) => {
    this.respuesta2 = variable;
    this.respuesta.forEach(element => {
      this.login.push(element.user);
    });
    console.log(this.login.user);
  }
  metodo = () => {
    if (this.login.user === this.login2[0] && this.login.password === this.login3[0]) {
      this.router.navigate(['gestionGeneral']);
    } else {
      alert('DATOS INCORRECTOS');
    }
  }

}
