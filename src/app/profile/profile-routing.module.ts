import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path:'',
    component:ProfileComponent,
    children:[
      {
        path:'post',
        loadChildren:()=>import('./post/post.module').then(m=>m.PostModule)
      },
      {
        path:'',
        redirectTo:"post",
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
