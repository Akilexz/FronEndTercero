import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from '../app/admin/login/login.component';
import { EditarProfesorComponent } from './admin/editar-profesor/editar-profesor.component';
import { EditarClienteComponent } from './admin/editar-cliente/editar-cliente.component';
import { GestionGeneralComponent } from './admin/gestion-general/gestion-general.component';
import { AsistenciasComponent } from './asistencias/asistencias.component';
import { BusquedaPipe } from './pipes/busqueda.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ProfesoresComponent,
    HomeComponent,
    LoginComponent,
    EditarProfesorComponent,
    EditarClienteComponent,
    GestionGeneralComponent,
    AsistenciasComponent,
    BusquedaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
