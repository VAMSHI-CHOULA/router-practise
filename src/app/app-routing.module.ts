import { CompileMetadataResolver } from '@angular/compiler';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { merge } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentsComponent } from './components/edit-students/edit-students.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
const routes: Routes = [
  {
    path:'add',
    component:AddStudentComponent
  },
  {
    path:'edit/:id',
    component:EditStudentsComponent
  },
  {
    path:'list',
    component:ListStudentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }