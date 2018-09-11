import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MonitorComponent } from './monitor/monitor.component';

// primeng
// import { MenubarModule } from 'primeng/menubar';
// import {ButtonModule} from 'primeng/button';
import { MenubarModule, ButtonModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';

import { ApiService } from './core/services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    routingComponents,
    MonitorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    TableModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
