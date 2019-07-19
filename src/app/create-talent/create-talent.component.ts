import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:7000/api/files';

@Component({
  selector: 'app-create-talent',
  templateUrl: './create-talent.component.html',
  styleUrls: ['./create-talent.component.css']
})
export class CreateTalentComponent implements OnInit {

  stepNumber = 1;

  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'file', method: 'PUT' });

  constructor() { }

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

}
