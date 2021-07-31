import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-alljobs',
  templateUrl: './alljobs.component.html',
  styleUrls: ['./alljobs.component.css']
})



export class AlljobsComponent implements  OnInit  {

jobs=[{  jobrole:'',
    email:'',
    jobdesc:'',
    hq:'',
    lastdate:'',
    skill:'',
    experience:'',
    jobtype:'',
    cname:''
}]


  constructor(private _job:JobService,private routes:Router) { }

  ngOnInit(): void {
    this._job.getjobs().subscribe((data)=>{
      this.jobs=JSON.parse(JSON.stringify(data))
      
   })

   

  }
   

  apply(data:any){
    localStorage.setItem("jobId", data._id.toString());
    localStorage.setItem("jobemail", data.email.toString());
    this.routes.navigate(['applyjob']);
  }
 

}
