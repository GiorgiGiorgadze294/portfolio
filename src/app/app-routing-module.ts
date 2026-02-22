import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { About } from './about/about';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';

const routes: Routes = [
  {path:'',component:Homepage},
  {path:'about',component:About},
  {path:'projects',component:Projects},
  {path:'contact',component:Contact}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
