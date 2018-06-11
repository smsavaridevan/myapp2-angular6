import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { FormsModule } from '@angular/forms'; // to use the forms we need to import
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { CrudComponent } from './crud/crud.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { FirebasetestComponent } from './firebasetest/firebasetest.component';
import { DoctorComponent } from './doctor/doctor.component';
import { StudentComponent } from './student/student.component';
import { TodotaskComponent } from './todotask/todotask.component';
import { TaskmanagementComponent } from './taskmanagement/taskmanagement.component';
import { ExampleComponent } from './example/example.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { CitiesComponent } from './cities/cities.component';
import { PatientComponent } from './patient/patient.component';
import { CalcserviceComponent } from './services/calcservice/calcservice.component';
import { NewcalComponent } from './services/newcal/newcal.component';
import { RectCompComponent } from './services/rect-comp/rect-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CrudComponent,
    Test1Component,
    Test2Component,
    FirebasetestComponent,
    DoctorComponent,
    StudentComponent,
    TodotaskComponent,
    TaskmanagementComponent,
    ExampleComponent,
    RegisterationComponent,
    CitiesComponent,
    PatientComponent,
    CalcserviceComponent,
    NewcalComponent,
    RectCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }