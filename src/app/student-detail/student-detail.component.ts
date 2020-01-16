import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  // public studentName = "";

  // constructor(private route: ActivatedRoute) { }

  // ngOnInit() {
  //   let name = this.route.snapshot.paramMap.get('name');
  //   this.studentName = name;
  //   console.log(this.route.snapshot.paramMap)
  //   // the params is available in the console, it is an object.
  // }

  public student = {  
    id: "",   
    name: "",   
    marks: ""  
   };  
  constructor(private route : ActivatedRoute, private router : Router) {   
  }  
  
  ngOnInit() {  
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.student.id = params.get('id');
      this.student.name = params.get('name')
      this.student.marks = params.get('marks')
    })
    // this.student.id = this.route.snapshot.paramMap.get('id');  
    // this.student.name = this.route.snapshot.paramMap.get('name');  
    // this.student.marks = this.route.snapshot.paramMap.get('marks');  
  }  
  
  gotoStudentList(){   
    this.router.navigate(['/studentList', this.student])  
  }  

}
