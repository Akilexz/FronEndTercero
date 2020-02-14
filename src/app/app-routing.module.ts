import { EditarProfesorComponent } from './admin/editar-profesor/editar-profesor.component';
import { EditarClienteComponent } from './admin/editar-cliente/editar-cliente.component';
import { GestionGeneralComponent } from './admin/gestion-general/gestion-general.component';
import { AsistenciasComponent } from './asistencias/asistencias.component';
import { LoginComponent } from '../app/admin/login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { ClienteComponent } from './cliente/cliente.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'clientes', component: ClienteComponent},
  {path: 'profecionales', component: ProfesoresComponent},
  {path: 'login', component: LoginComponent},
  {path: 'asistencias', component: AsistenciasComponent},
  {path: 'gestionGeneral', component: GestionGeneralComponent},
  {path: 'editarDocente', component: EditarProfesorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
