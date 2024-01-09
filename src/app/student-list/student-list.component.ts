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


  constructor(private studentDataService: StudentDataService){}

  ngOnInit(): void {
    this.getStudentData();
  }

  getStudentData() {
    this.studentDataService.getStudents().subscribe((res: StudentsData)=>{
      this.studentTableheaders = res.headers;
      this.studentRowData = res.students;
    });
  }
}
