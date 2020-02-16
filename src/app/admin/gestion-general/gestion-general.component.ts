
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
  data: any;
  respuestaDocente: any[];
  tablaDocentes: string;
  parametrosDocentes: any[];
  deleteProfesor: any;
  datoEliminar: any;
  constructor(private http: HttpClient, private router: Router) { }
  busquedaPost = '';
  ngOnInit() {
    this.traerDocentes();
    this.parametrosDocentes = [
      {
        id: 'Numero',
        nombre: 'Nombre',
        apellido: 'Apellido',
        titulosProfesionales: 'TittulosProfesionales',
        identificacion: 'Identificacion',
        email: 'Email'
      }
    ];
    this.tablaDocentes = 'profesores';

    this.deleteProfesor = {
      tabla: this.tablaDocentes,
      id: this.datoEliminar
    };
  }
  traerDocentes = () => {
    const tabla = 'profesores';
    this.http.get<any>(environment.ApI_URL + `get?tabla=${tabla}`).subscribe(data => {
      this.respuestaDocente = data.datos;
      console.log(this.respuestaDocente);
    });
  }
  editar = (id: any) => {
    this.data = {
      tabla: this.tablaDocentes,
      idDocente: id
    };
    console.log(this.data);
    localStorage.removeItem('id');
    localStorage.setItem('id', this.data.idDocente.toString());
    this.router.navigate(['editarDocente']);
  }
  borrarDocente = (id: number) => {
    console.log(id);
    this.data = {
      tabla: this.tablaDocentes,
      datoId: id
    };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
    };
    console.log(this.data);
    if (this.data !== undefined) {
    this.http.post(environment.ApI_URL + 'delete', this.data).subscribe(resultado => {
      console.log(resultado);
      alert ('datos eliminados');
    });
    window.location.reload();
    }
    }
  }
