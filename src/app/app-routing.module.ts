import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ApiIntegrationComponent } from './api-integration/api-integration.component';
import { DynamicFieldGenerationComponent } from './dynamic-field-generation/dynamic-field-generation.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { HomeComponent } from './home/home.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'experiments',
    component:ExperimentsComponent
  },
  {
    path:'api',
    component:ApiIntegrationComponent
  },
  {
    path:'rxjs',
    component:RxjsComponent
  },
  {
    path:'FieldGeneration',
    component:DynamicFieldGenerationComponent
  },
  {
    path:'**',
    component:HomeComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
