import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ApiIntegrationComponent } from './api-integration/api-integration.component';
import { TestPipePipe } from './test-pipe.pipe';
import { RxjsComponent } from './rxjs/rxjs.component';
import { DynamicFieldGenerationComponent } from './dynamic-field-generation/dynamic-field-generation.component';
import { LoginPageComponent } from './login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ExperimentsComponent,
    ApiIntegrationComponent,
    TestPipePipe,
    RxjsComponent,
    DynamicFieldGenerationComponent,
    LoginPageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
