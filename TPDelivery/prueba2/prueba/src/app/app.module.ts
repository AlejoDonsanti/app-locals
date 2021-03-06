import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearLocalComponent } from './components/crear-local/crear-local.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListProductosComponent } from './components/list-productos/list-productos.component';
import { ListLocalComponent } from './components/list-local/list-local.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearLocalComponent,
    CrearProductoComponent,
    ListProductosComponent,
    ListLocalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBOOnK5VbqwfeYaM2zWDOFxG1XzFNrbMm4'
    }),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
