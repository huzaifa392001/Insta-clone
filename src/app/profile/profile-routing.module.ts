import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path:'',
    component:ProfileComponent,
    children:[
      {
        path:'',
        loadChildren:()=>import('./post/post.module').then(m=>m.PostModule)
      },
      {
        path:'',
        redirectTo:"",
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
