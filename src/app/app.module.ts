// import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentsComponent } from './components/edit-students/edit-students.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './components/student/student.component';
import { Routes } from '@angular/router';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import {AngularTreeGridModule} from 'angular-tree-grid';
import { TreeGridComponent } from './components/tree-grid/tree-grid.component';
import { ElementSchemaRegistry } from '@angular/compiler';
// import {BrowserAnimationModule, BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    EditStudentsComponent,
    ListStudentComponent,
    StudentComponent,
    StudentDetailsComponent,
    TreeGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    AngularTreeGridModule,
    // MatIconModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }