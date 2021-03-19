import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import { DepartmentDetailComponent } from './components/departments/department-detail/department-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinner, MatProgressSpinnerModule, MatSpinner} from '@angular/material/progress-spinner';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EditDepartmentComponent } from './components/departments/edit-department/edit-department.component';
import { FormDataDepartmentComponent } from './components/departments/form-data-department/form-data-department.component';
import {FormsModule} from '@angular/forms';
import { AddDepartmentComponent } from './components/departments/add-department/add-department.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { BlogsComponent } from './components/blogs/blogs.component'; // <-- import the module
import { environment } from '../environments/environment';

// import firebase module
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UserinfoComponent } from './auth/userinfo/userinfo.component';
import {LoginComponent} from './auth/login/login.component';
import {CommonModule} from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {AuthService} from './services/auth.service';
import {SecureInnerPagesGuard} from './auth/guard/secure-inner-pages.guard';
import {AuthGuard} from './auth/guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    DepartmentsComponent,
    PageNotFoundComponent,
    DepartmentDetailComponent,
    NavBarComponent,
    EditDepartmentComponent,
    FormDataDepartmentComponent,
    AddDepartmentComponent,
    BlogsComponent,
    LoginComponent,
    RegisterComponent,
    UserinfoComponent,
    DashboardComponent,
    // routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    // MatProgressSpinner,
    MatCardModule,
    MatProgressSpinnerModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    CommonModule,
  ],
  providers: [AuthService, SecureInnerPagesGuard, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
