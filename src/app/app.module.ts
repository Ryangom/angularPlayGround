import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { StudentsComponent } from './components/students/students.component';
import { AddStudentsComponent } from './components/add-students/add-students.component';
import { HambargerComponent } from './components/hambarger/hambarger.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PdfComponent } from './components/pdf/pdf.component';
import { StudentDashComponent } from './pages/student/student-dash/student-dash.component';
import { ProfileComponent } from './pages/student/profile/profile.component';
import { ChangePasswordComponent } from './pages/student/change-password/change-password.component';
import { HeadingComponent } from './pages/student/shared/heading/heading.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    HomeComponent,
    AboutComponent,
    StudentsComponent,
    AddStudentsComponent,
    HambargerComponent,
    PdfComponent,
    StudentDashComponent,
    ProfileComponent,
    ChangePasswordComponent,
    HeadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
