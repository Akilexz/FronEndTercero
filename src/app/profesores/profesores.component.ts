import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, FormControlName } from '@angular/forms';
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
  profesoresForm: FormGroup;
  FormBuilder: any;
  FormProfesores: FormGroup;
  constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.profesores = {
      nombre: '',
      apellido: '',
      titulosProfesionaels: '',
      identificacion: '',
      email: '',
    };
    this.tabla = 'profesores';
    this.formularioProfesores();
  }
  formularioProfesores() {
    return this.profesoresForm = new FormGroup({
      // this.FormProfesores = new FormGroup({
      // tslint:disable-next-line:max-line-length
      identificacion: new FormControl ('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^([0-9])*$')]),
      nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(4)]),
      // tslint:disable-next-line:max-line-length
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      titulosProfesionaels: new FormControl('', [Validators.required, Validators.minLength(4)])
    // });
    });
  }
  Guardar = () => {
    if (this.profesoresForm.valid) {
      this.data = {
        tabla: this.tabla,
        datos: this.profesores
      };
      this.http.post(environment.ApI_URL + 'post', this.data).subscribe(resultado => {
        console.log(resultado);
        alert ('registro Exitoso');
        this.router.navigate(['']);
      });
    } else {
      alert ('No valido');
    }
  }
  get identificacion() {return this.profesoresForm.get('identificacion'); }
  get nombre() {return this.profesoresForm.get('nombre'); }
  get apellido() {return this.profesoresForm.get('apellido'); }
  get email() {return this.profesoresForm.get('email'); }
  get titulosProfesionaels() {return this.profesoresForm.get('titulosProfesionaels'); }
}
