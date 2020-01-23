import { Cliente } from 'src/app/modulos/clientes';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  data: any;
  clientes: Cliente;
  tabla: string;
  clienteForm: FormGroup;
  FormBuilder: any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {

    this.clientes = {
      nombre: '',
      apellido: '',
      hora: '',
      identificacion: '',
      email: '',
    };
    this.tabla = 'clientes';
  }
  Guardar = () => {
    this.data = {
      tabla: this.tabla,
      datos: this.clientes
    };
    this.tabla = 'clientes';
    this.http.post(environment.ApI_URL + 'post', this.data).subscribe(resultado => {
      console.log(resultado);
      alert ('registro Exitoso');
    });
  }

}
