import { Cliente } from './../../modulos/clientes';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.scss']
})
export class EditarClienteComponent implements OnInit {

  data: any;
  tabla: string;
  clientes: Cliente;
  nombres: string;
  apellidos: string;
  email: string;
  editarFormAsis: FormGroup;
  respuesta: any[];
  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.tabla = 'clientes';
    this.clientes = {
      nombre: '',
      apellido: '',
      email: '',
      identificacion: '',
      hora: ''
    };
    this.actualizar();
    this.formularioEdit();
    this.actualizar();
  }
  formularioEdit() {
    this.editarFormAsis = this.fb.group({
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });
  }
  actualizar() {
    const id = localStorage.getItem('id');
    console.log(localStorage);
    const tabla = 'asistentes';
    this.http.get<any>(environment.ApI_URL + `routebyid?tabla=${tabla}&id=` + id).subscribe(data => {
      this.respuesta = data.datos;
      console.log(this.respuesta);
      console.log(id);
      console.log(data);
    });
  }
  editData = (id) => {
    const nombres = this.editarFormAsis.get('nombres').value;
    const apellidos = this.editarFormAsis.get('apellidos').value;
    const email = this.editarFormAsis.get('emails').value;
    const identificacion = this.editarFormAsis.get('identificaciones').value;
    const hora = this.editarFormAsis.get('horas').value;
    this.data = {
      tabla: 'asistentes',
      datoId: [{
        nombre: nombres,
        apellido: apellidos,
        emails: email,
        identificaciones: identificacion,
        horas: hora
      }]
    };
    if (this.data === null) {
      console.log('dato no encontrado');
    } else {
      this.http.put(environment.ApI_URL + 'put', this.data).subscribe(resultado => {
        console.log(resultado);
        alert('datos editados');
        this.router.navigate(['gestion']);
      });
    }
  }

}
