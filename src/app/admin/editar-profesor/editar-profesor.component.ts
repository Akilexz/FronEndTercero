import { Profesor } from './../../modulos/profesores';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-profesor',
  templateUrl: './editar-profesor.component.html',
  styleUrls: ['./editar-profesor.component.scss']
})
export class EditarProfesorComponent implements OnInit {
  data: any;
  tabla: string;
  profesores: Profesor;
  respuesta: any[];
  editarForm: FormGroup;
  nombre: string;
  apellido: string;
  email: string;
  identificacion: string;
  titulosProfesionales: string;

  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.tabla = 'profesores';
    this.actualizar();
    this.formularioEdit();
  }
  formularioEdit() {
    this.editarForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required]],
      identificacion: ['', [Validators.required]],
      titulosProfesionales: ['', [Validators.required]]
    });
  }
  editData = (id) => {
    console.log(id);
    const nombre = this.editarForm.get('nombre').value;
    const apellido = this.editarForm.get('apellido').value;
    const email = this.editarForm.get('email').value;
    const identificaicon = this.editarForm.get('identificaicon').value;
    const titulosProfesionales = this.editarForm.get('titulosProfesionales').value;
    this.data = {
      tabla: this.tabla,
      datoId: [{
        nombre:nombre,
        apellido:apellido,
        email: email,
        identificacion: identificaicon,
        titulosProfesionales: titulosProfesionales
      }]
    };
    if(this.data === null){
      console.log('datos no encontrados');
    } else {
      console.log(this.data);
      this.http.put(environment.ApI_URL + 'put', this.data).subscribe(resultado =>{
        console.log(resultado);
        alert('datos editados');
        this.router.navigate(['gestionGeneral']);
      });
    }
  }
  actualizar() {
    const id = localStorage.getItem('id');
    console.log(localStorage);
    const tabla = 'profesores';
    this.http.get<any>(environment.ApI_URL + `routebyid?tabla=${tabla}&id=` + id).subscribe(data =>{
      this.respuesta = data.datos;
      console.log(id);
      console.log(data);
    });
  }
}
