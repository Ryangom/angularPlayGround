import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { StudentsComponent } from './components/students/students.component';
import { AddStudentsComponent } from './components/add-students/add-students.component';
import { StudentDashComponent } from './pages/student/student-dash/student-dash.component';
import { ProfileComponent } from './pages/student/profile/profile.component';
import { ChangePasswordComponent } from './pages/student/change-password/change-password.component';
import { PaymentLedgerSummaryComponent } from './pages/student/payment-ledger-summary/payment-ledger-summary.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { breadcrumb: 'Home' } },
  { path: 'about', component: AboutComponent, data: { breadcrumb: 'About' } },
  { path: 'service', component: AboutComponent, data: { breadcrumb: 'About' } },
  { path: 'logout1', component: AboutComponent, data: { breadcrumb: 'About' } },
  { path: 'logout2', component: AboutComponent, data: { breadcrumb: 'About' } },
  { path: 'logout3', component: AboutComponent, data: { breadcrumb: 'About' } },
  {
    path: 'student', component: StudentsComponent, data: { breadcrumb: 'Students' },
    children: [
      // {
      //   path: 'add', component: AddStudentsComponent, data: { breadcrumb: 'Add Students' }, children: [
      //     { path: ':id', component: AddStudentsComponent, data: { breadcrumb: 'Edit Students' } }
      //   ]
      // },
      { path: '', component: StudentDashComponent, data: { breadcrumb: 'Home' } },
      { path: 'profile', component: ProfileComponent, data: { breadcrumb: 'profile' } },
      { path: 'pass', component: ChangePasswordComponent, data: { breadcrumb: 'profile' } },
      { path: 'paymentLedgerSummary', component: PaymentLedgerSummaryComponent, data: { breadcrumb: 'profile' } },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
