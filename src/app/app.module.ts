import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {SharedserivceService} from './shared/sharedserivce.service'
import { SoftwareComponent } from './software/software.component';
import { EntitlementComponent } from './entitlement/entitlement.component';
import { HighchartsComponent } from './shared/highcharts/highcharts.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogmodelComponent } from './dialogmodel/dialogmodel.component';
import { CustomPaginationComponent } from './custom-pagination/custom-pagination.component';
import {ShortNamePipe} from './shortName.pipe'
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import {MatListModule} from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Daterangepicker } from 'ng2-daterangepicker';
@NgModule({
  declarations: [
    AppComponent,
    
    DashboardComponent,
    SoftwareComponent,
    EntitlementComponent,
    HighchartsComponent,
    PaginationComponent,
    DialogmodelComponent,
    CustomPaginationComponent,
    ShortNamePipe
    
  ],
  imports: [
    BrowserModule,
    MatListModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    
    
  ],
  providers: [SharedserivceService,NgxDaterangepickerMd],
  bootstrap: [AppComponent]
})
export class AppModule { }
