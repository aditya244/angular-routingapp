import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/studentDetails',
    pathMatch: 'full'
  },
  {
    path: 'studentList', 
    component: StudentListComponent,
  },
  { 
    path: 'studentDetails/:name',
    component: StudentDetailComponent
  },
  { 
    path: 'studentDetails/:id/:name/:marks',
    component: StudentDetailComponent
  },
  {
    path: 'studentMarks',
    component: StudentMarksComponent
  },
  { 
    path: 'addStudent',
    component: StudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
