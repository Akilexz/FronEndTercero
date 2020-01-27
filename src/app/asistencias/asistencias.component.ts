import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.component.html',
  styleUrls: ['./asistencias.component.scss']
})
export class AsistenciasComponent implements OnInit {
  respuestaCliente: any[];
  // tslint:disable-next-line:variable-name
  table_asistencias: any[];
  contador: number = 0;
  keepAsistencia: any[];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getData();
  }
  getData = () => {
    const tabla = 'clientes';
    this.http.get<any>(environment.ApI_URL + `get?tabla=${tabla}`).subscribe(data => {
      this.respuestaCliente = data.datos;
      console.log(this.respuestaCliente);
    });
  }
  cambiar() {
    if (this.contador <= 19) {
      this.contador++;
      alert('Asistencia programada');

      this.router.navigate(['']);
      console.log(this.contador);
    } else {
      alert('la sala esta demasiada llena');
    }
  }

}
