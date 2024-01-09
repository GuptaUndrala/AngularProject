import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentsData } from '../models/student-model';

@Injectable({
  providedIn: 'root'
})

export class StudentDataService {
  private severURL = 'assets/student-data.json';

  constructor(private http: HttpClient) { };

  getStudents():Observable<StudentsData>{
    const endPoint = this.severURL;
    return this.http.get<StudentsData>(endPoint);
  }
}
