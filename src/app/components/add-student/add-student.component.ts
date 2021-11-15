import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentsService } from 'src/app/students.service';
import { NgForm } from '@angular/forms';
import {Students} from '../../students';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
   myFamily:any=["Santhosh","Vamshi","Rupa","Madhuri"];
  onSubmit(f: NgForm){
    console.log(f.value)
  }
  constructor(private student:StudentsService) {}
  loginForm= new FormGroup({
  title:new FormControl('',[Validators.required]),
  author:new FormControl('',[Validators.required])
  });
  message:boolean =false;
  saveData(){
    this.student.saveStudentData(this.loginForm.value).subscribe((result)=>{
     console.log(result);
    })
  }
  get title(){
    return this.loginForm.get('title')
  }
  get author(){
    return this.loginForm.get('author')
  }
  ngOnInit(): void {
  }
}