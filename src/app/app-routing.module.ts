import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { StudentsComponent } from './components/students/students.component';
import { AddStudentsComponent } from './components/add-students/add-students.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { breadcrumb: 'Home' } },
  { path: 'about', component: AboutComponent, data: { breadcrumb: 'About' } },
  {
    path: 'student', component: StudentsComponent, data: { breadcrumb: 'Students' },
    children: [
      {
        path: 'add', component: AddStudentsComponent, data: { breadcrumb: 'Add Students' }, children: [
          { path: ':id', component: AddStudentsComponent, data: { breadcrumb: 'Edit Students' } }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
