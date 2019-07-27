import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseComponent } from './course/course.component';
import { EventComponent } from './event/event.component';
import { ForumsComponent } from './forums/forums.component';
import { MeanComponent } from './mean/mean.component';
import { BasicComponent } from './basic/basic.component';
import { IntermediateComponent } from './intermediate/intermediate.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { AddComponent } from './add/add.component';
import { HotsComponent } from './hots/hots.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path: '', component:DashboardComponent},
  {path: 'course', component:CourseComponent},
  {path: 'event',component:EventComponent},
  {path:'forums',component:ForumsComponent},
  {path:'mean',component:MeanComponent},
  {path:'basic',component:BasicComponent},
  {path:'intermediate',component:IntermediateComponent},
  {path:'advanced',component:AdvancedComponent},
  {path:'hots',component:HotsComponent},
  {path:'add',component:AddComponent},
  {path:'test',component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
