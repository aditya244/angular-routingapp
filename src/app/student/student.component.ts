import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  //This input type gives out object which is used as an argument here.
  
  AddStudent(obj){
    this.router.navigate(['/studentDetails', obj]);
    console.log(obj)
  }
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
