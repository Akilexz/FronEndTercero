
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gestion-general',
  templateUrl: './gestion-general.component.html',
  styleUrls: ['./gestion-general.component.scss']
})
export class GestionGeneralComponent implements OnInit {
  respuestaDocente: any[];
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.traerDocentes();
  }
  traerDocentes = () => {
    const tabla = 'profesores';
    this.http.get<any>(environment.ApI_URL + `get?tabla=${tabla}`).subscribe(data => {
      this.respuestaDocente = data.datos;
      console.log(this.respuestaDocente);
    });
  }

}
