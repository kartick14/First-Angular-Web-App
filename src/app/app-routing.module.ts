import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddmemberComponent } from './addmember/addmember.component';
import { ResourcesComponent } from './resources/resources.component';
import { HighlightcardComponent } from './highlightcard/highlightcard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [	
	{
	    path: 'home',
	    component: ResourcesComponent,
	    data: { title: 'Add a new member' }
	},
	{
	    path: 'addblog',
	    component: AddmemberComponent,
	    data: { title: 'Add a new member' }
	},
	{
	    path: 'blog/:blogurl',
	    component: HighlightcardComponent,
	    data: { title: 'Add a new member' }
	},
	{ path: '',   redirectTo: '/home', pathMatch: 'full' },
	{ path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
