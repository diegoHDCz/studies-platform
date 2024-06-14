import { Routes } from '@angular/router';
import { ClassRegistrationComponent } from './class-registration/class-registration.component';
import { IndexComponent } from './index/index.component';
import { AvailableClassesComponent } from './available-classes/available-classes.component';

export const routes: Routes = [
    {path:'',    component:IndexComponent},
    {path:'class-registration', component:ClassRegistrationComponent},
    {path:'available-classes', component:AvailableClassesComponent}
   
];
