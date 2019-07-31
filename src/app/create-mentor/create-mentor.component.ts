import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TalentService } from '../talent.service';
import { FormGroup, FormControl } from '@angular/forms';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:7000/api/files/resume';

@Component({
  selector: 'app-create-mentor',
  templateUrl: './create-mentor.component.html',
  styleUrls: ['./create-mentor.component.css']
})
export class CreateMentorComponent implements OnInit {

  public talentform: FormGroup;
  stepNumber = 1;
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'file',method:'PUT'});
   
  constructor( private formBuilder: FormBuilder,
    private talentservice:TalentService ) { 
    this.talentform=this.formBuilder.group({
      name: '',
      phoneNumber: '',
      emailAddress:'',
      /*address:'',
      calendlyUrl:'',
      timezone:'',
      ssnNumber:'',
      bankAccount:'',
      routingNumber:'',
      citizenship:'',
      immigrationStatus:'',
      immigrationExpiaryStr:'',*/



    });
  }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
    };
     
  }

  onSubmit(talentdata) {
    // Process checkout data here
    //console.warn('Your input has been recorded', talentdata);
    window.alert('Your input has been recorded')
    //console.log(this.talentform.value);
   // this.talentservice.saveTalent(this.talentform.value);
   // this.talentform.reset();
  

}

  goToStep(stepNumber){
    this.stepNumber = stepNumber;
  }

}