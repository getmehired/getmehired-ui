import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { TalentService } from '../talent.service';
import { ProfileService } from '../profile.service'
import { Talent } from '../talent';
import { Profile } from '../profile';

const URL = 'http://18.225.22.182:7000/api/files/resumes';

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
    phoneNumber: '+1-519-708-2350',
    emailAddress: '',
    address: 'Test',

    calendlyUrl: 'https://calendly.com/test/15min?month=2019-08',

    //private TimezoneEnum timezone;

    ssnNumber: '123-456-789',

    bankAccount: 0,

    routingNumber: 0,


    //private Citizenship citizenship;


    //private Immigration immigrationStatus;


    immigrationExpiaryStr: '01-01-2020',


    //private Date immigrationExpiary;


    //private Degree accademicDegree;

    degreeSubject: 'Test',


    //private Date graduationDate;


    graduationDateStr: '01-01-2020',

    //private Support suuportNeeded;

    //private Objective objective;


    //private EmploymentStatus employmentStat;

    salaryStart: 0,

    currentJob: 'Test',

    currentEmployer: 'Test',


    //private Date jobStartdate;


    jobStartdateStr: '01-01-2020',

    jobSalary: 0,

    newEmployer: 'Test',

    newPosition: 'Test',
  };

  public headers = {
    'idToken': localStorage.getItem('idToken')
  };

  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'file', method: 'PUT', headers: [{"name":"idToken", "value": localStorage.getItem('idToken')}] });

  constructor(
    private talentService: TalentService,
    private profileService: ProfileService,
  ) {
  }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
    };

    this.profileService.getProfile().subscribe(
      response => this.populateEmail(<Profile>response),
      err => this.errors = err.error,
      () => console.log('Observer got a complete notification')
    );
  }

  populateEmail(profile){
    this.talent.emailAddress = profile.email;
  }

  goToStep(stepNumber){
    this.stepNumber = stepNumber;
  }

  createTalent(){
    this.talent.name = this.firstName + '' + this.lastName;
    this.talentService.createTalent(this.talent);

    this.talentService.createTalent(this.talent).subscribe(
      response => console.log('Talent object returned from Service', response),
      err => this.errors = err.error.errors,
      () => console.log('Observer got a complete notification')
    );
  }

}
