import { Component } from '@angular/core';
import { MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { NewSkillComponent } from './new-skill/new-skill.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog:MatDialog){}
  addSkill(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.width="60%";
    dialogConfig.height="60%"
    dialogConfig.autoFocus=true;
    dialogConfig.disableClose=false;
    this.dialog.open(NewSkillComponent,dialogConfig);  //open method takes 2 parameters->component and optional configuration
  }
  afuConfig = {
    uploadAPI: {
      url:"https://slack.com/api/files.upload", 
    }
  }
    onFileSelected(event:any){
      console.log(event);
    }
}
