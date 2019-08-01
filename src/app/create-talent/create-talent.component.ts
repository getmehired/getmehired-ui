import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { TalentService } from '../talent.service';
import { Talent } from '../talent';

const URL = 'http://localhost:7000/api/files/resumes';

@Component({
  selector: 'app-create-talent',
  templateUrl: './create-talent.component.html',
  styleUrls: ['./create-talent.component.css']
})
export class CreateTalentComponent implements OnInit {

  stepNumber = 1;
  firstName = "";
  lastName = "";
  errors = [];

  talent: Talent = {

    id: '',
    name: '', 
    phoneNumber: '',
    emailAddress: '',
    address: '',
  
    calendlyUrl: '',
  
    //private TimezoneEnum timezone;
  
    ssnNumber: '',
  
    bankAccount: 0,
  
    routingNumber: 0,
  
  
    //private Citizenship citizenship;
  
  
    //private Immigration immigrationStatus;
  
  
    //private String immigrationExpiaryStr;
  
  
    //private Date immigrationExpiary;
  
  
    //private Degree accademicDegree;
  
    degreeSubject: '',
  
  
    //private Date graduationDate;
  
  
    //private String graduationDateStr;
  
    //private Support suuportNeeded;
  
    //private Objective objective;
  
  
    //private EmploymentStatus employmentStat;
  
    salaryStart: 0,
  
    currentJob: '',
  
    currentEmployer: '',
  
  
    //private Date jobStartdate;
  
  
    //private String jobStartdateStr;
  
    jobSalary: 0,
  
    newEmployer: '',
  
    newPosition: '',
  };

  public headers = {
    'idToken': localStorage.getItem('idToken')
  };

  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'file', method: 'PUT', headers: [{"name":"idToken", "value": localStorage.getItem('idToken')}] });

  constructor(
    private talentService: TalentService,
  ) {
  }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
    };
  }

  goToStep(stepNumber){
    this.stepNumber = stepNumber;
  }

  createTalent(){
    this.talent.name = this.firstName + ' ' + this.lastName;
    this.talentService.createTalent(this.talent);

    this.talentService.createTalent(this.talent).subscribe(
      response => console.log('Talent object returned from Service', response),
      err => this.errors = err.error.errors,
      () => console.log('Observer got a complete notification')
    );
  }

}
