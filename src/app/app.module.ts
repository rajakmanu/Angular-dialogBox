import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from "@angular/material/dialog";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewSkillComponent } from './new-skill/new-skill.component';

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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
