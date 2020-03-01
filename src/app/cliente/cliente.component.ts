import { Cliente } from 'src/app/modulos/clientes';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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
  FormCliente: FormGroup;
  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder) {
   }

  ngOnInit() {

    this.clientes = {
      nombre: '',
      apellido: '',
      hora: '',
      identificacion: '',
      email: '',
    };
    this.tabla = 'clientes';

    this.formularioValidacion();
  }
  formularioValidacion() {
    return this.clienteForm = new FormGroup({
      // tslint:disable-next-line:max-line-length
      identificacion: new FormControl ('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^([0-9])*$')]),
      nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(4)]),
      hora: new FormControl ('', [Validators.required]) ,
      // tslint:disable-next-line:max-line-length
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    });
  }
  Guardar = () => {
     if (this.clienteForm.valid) {
      this.data = {
        tabla: this.tabla,
        datos: this.clientes
      };
      this.tabla = 'clientes';
      this.http.post(environment.ApI_URL + 'post', this.data).subscribe(resultado => {
        console.log(resultado);
        alert ('registro Exitoso');
      });
      this.router.navigate(['asistencias']);
     } else {
       alert('Algunos Datos son incorrectos');
     }
    }
    get identificacion() {return this.clienteForm.get('identificacion'); }
    get nombre() {return this.clienteForm.get('nombre'); }
    get apellido() {return this.clienteForm.get('apellido'); }
    get hora() {return this.clienteForm.get('hora'); }
    get email() {return this.clienteForm.get('email'); }
}
