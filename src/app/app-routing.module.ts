import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'speakers',
    pathMatch: 'full'
  },
  {
    path: 'speakers',
    loadChildren: 'app/speakers/speakers.module#SpeakersModule',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: 'app/shared/components/about/about.module#AboutModule',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
