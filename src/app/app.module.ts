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
import { ContainerComponent } from './pages/student/shared/container/container.component';
import { PaymentLedgerSummaryComponent } from './pages/student/payment-ledger-summary/payment-ledger-summary.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButexTabulationPDFComponent } from './pages/butex-tabulation-pdf/butex-tabulation-pdf.component';
import { StepperFormComponent } from './components/stepper-form/stepper-form.component';

import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ButexTeacherProfileComponent } from './component/butex-teacher-profile/butex-teacher-profile.component';
import { ButexApplicantComponent } from './component/butex-applicant/butex-applicant.component';
import { ButexAdmissionRulebookUpdateComponent } from './component/butex-admission-rulebook-update/butex-admission-rulebook-update.component';

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
    HeadingComponent,
    ContainerComponent,
    PaymentLedgerSummaryComponent,
    DynamicFormComponent,
    ButexTabulationPDFComponent,
    StepperFormComponent,
    ButexTeacherProfileComponent,
    ButexApplicantComponent,
    ButexAdmissionRulebookUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
