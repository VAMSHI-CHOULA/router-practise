import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/students.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrls: ['./edit-students.component.css']
})
export class EditStudentsComponent implements OnInit {
  mynumber=123;
  constructor(private student:StudentsService, private router:ActivatedRoute) { }
  editStudent= new FormGroup({
    title:new FormControl('',[Validators.required]),
    author:new FormControl('',[Validators.required])
    });

    updateData(){
      this.student.updateStudentData(this.router.snapshot.params.id, this.editStudent.value).subscribe((result)=>{
        console.log(result);
       });
      }
    get title(){
      return this.editStudent.get('title')
    }
    get author(){
      return this.editStudent.get('author')
    }
    message:boolean=false;
    ngOnInit(): void {
      this.student.getStudentById(this.router.snapshot.params.id).subscribe((result:any)=>{
      this.editStudent= new FormGroup({
      title:new FormControl(result['title']),
      author:new FormControl(result['author'])
          });
      });
    }
}