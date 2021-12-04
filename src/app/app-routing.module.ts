import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./feed/feed.module').then(m=>m.FeedModule)
  },
  {
    path:'profile',
    loadChildren:()=>import('./profile/profile.module').then(m=>m.ProfileModule)
  },
  {
    path:'post',
    loadChildren:()=>import('./post-detail/post-detail.module').then(m=>m.PostDetailModule)
  },
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
