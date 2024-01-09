export interface StudentsData{
    headers: string[];
    students: Student[];
}

export interface Student{
    id: number,
    name: string,
    marks: number,
    grade: string,
    result: string
}