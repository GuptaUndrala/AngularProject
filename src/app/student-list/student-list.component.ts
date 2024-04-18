import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../services/student-data.service';
import { Student, StudentsData } from '../models/student-model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit{
  pageTitle: string = "Student Title";
  studentTableheaders:string[] = [];
  studentRowData: Student[] = [];
  lastIndex!: number;
  // updateStudentName: string = "";


  constructor(private studentDataService: StudentDataService){}

  ngOnInit(): void {
    this.getStudentData();
  }

  // onEdit(index:number) {
  //   if(this.lastIndex === undefined){
  //     this.lastIndex = index;
  //     this.studentRowData[index].isEdit = !this.studentRowData[index].isEdit; 
  //     return
  //   }

  //   if(this.lastIndex === index){
  //     this.studentRowData[index].isEdit = !this.studentRowData[index].isEdit; 
  //     this.lastIndex = index;
  //     return
  //   }

  //   if(this.lastIndex !== index){
  //     this.studentRowData[this.lastIndex].isEdit = !this.studentRowData[this.lastIndex].isEdit;        
  //     this.studentRowData[index].isEdit = !this.studentRowData[index].isEdit; 
  //     this.lastIndex = index; 
  //   }
  // }

  onEdit(index:number) {
    // if(!this.studentRowData[index].marks || !this.studentRowData[this.lastIndex].marks){
    //   return
    // }

    if(this.lastIndex !== undefined && this.lastIndex !== index){
      this.studentRowData[this.lastIndex].isEdit = false;
    }
    this.studentRowData[index].isEdit = !this.studentRowData[index].isEdit;
    this.lastIndex = index;   
    
    
  }

  // onUpdate(event: any, index: number){
  //   console.log(event.target.value, index);
  // }

  getStudentData() {
    this.studentDataService.getStudents().subscribe((res: StudentsData)=>{
      this.studentTableheaders = res.headers;
      this.studentRowData = res.students;
    });
  }
}
