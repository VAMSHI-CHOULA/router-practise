import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  url='http://localhost:3000/posts';
  constructor( private http:HttpClient) { }
  getAllStudents(){
    return  this.http.get(this.url);
    }
    saveStudentData(data:any){
     return  this.http.post(this.url, data);
    }
    getStudentById(id:any){
      return this.http.get(`${this.url}/${id}`)
    }
    deleteStudent( id:any){
      return this.http.delete(`${this.url}/${id}`);
    }
    updateStudentData(id:number,data:any){
      return this.http.put(`${this.url}/${id}`, data);
    }
}