import { ProcesodeadmisionComponent } from './components/sections/admisiontramites/procesodeadmision/procesodeadmision.component';
import { CursosComponent } from './components/sections/admisiontramites/cursos/cursos.component';
import { InscripcionComponent } from './components/sections/admisiontramites/inscripcion/inscripcion.component';
import { ReinscripcionComponent } from './components/sections/admisiontramites/reinscripcion/reinscripcion.component';
import { BecasComponent } from './components/sections/admisiontramites/becas/becas.component'
import { ModuleWithProviders, Component } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/sections/home/home.component';

import { ServiciosocialComponent } from './components/sections/admisiontramites/serviciosocial/serviciosocial.component';
import { TitulacionComponent } from './components/sections/admisiontramites/titulacion/titulacion.component';
import { AdmisiontramitesComponent } from './components/sections/admisiontramites/admisiontramites.component';



// Rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'admisiontramites',component: AdmisiontramitesComponent},
    {path: 'serviciosocial',component: ServiciosocialComponent },
    {path: 'titulacion',component: TitulacionComponent},
    {path: 'becas',component: BecasComponent},
    {path: 'reinscripcion',component: ReinscripcionComponent},
    {path: 'inscripcion',component: InscripcionComponent},
    {path: 'cursos',component: CursosComponent},
    {path: 'procesoadmision',component: ProcesodeadmisionComponent},
  ];

// Exportar el modulo
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
