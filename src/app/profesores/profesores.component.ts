import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profesor } from 'src/app/modulos/profesores';
@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.scss']
})
export class ProfesoresComponent implements OnInit {
  data: any;
  profesores: Profesor;
  tabla: string;
  clienteForm: FormGroup;
  FormBuilder: any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.profesores = {
      nombre: '',
      apellido: '',
      titulosProfesionaels: '',
      identificacion: '',
      email: '',
    };
    this.tabla = 'profesores';
  }
  Guardar = () => {
    this.data = {
      tabla: this.tabla,
      datos: this.profesores
    };
    this.http.post(environment.ApI_URL + 'post', this.data).subscribe(resultado => {
      console.log(resultado);
      alert ('registro Exitoso');
      this.router.navigate(['']);
    });
  }

}
