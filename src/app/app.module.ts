import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from "@angular/material/dialog";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewSkillComponent } from './new-skill/new-skill.component';
import{MatIconModule} from "@angular/material/icon";
import{MatButtonModule} from "@angular/material/button";
import { AngularFileUploaderModule } from "angular-file-uploader";



@NgModule({
  declarations: [
    AppComponent,
    NewSkillComponent
  ],
  entryComponents:[NewSkillComponent], 
   //a  component used for a dialog has to be added in the entrycomponent array
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    AngularFileUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
