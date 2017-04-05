import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AryaStarksListComponent } from './arya-starks-list/arya-starks-list.component';
import { JaqenHagarListComponent } from './jaqen-hagar-list/jaqen-hagar-list.component';
import { ManageListsComponent } from './manage-lists/manage-lists.component';
import { AddListItemComponent } from './manage-lists/add-list-item/add-list-item.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'arya-starks-list', component: AryaStarksListComponent},
  { path: 'jaqen-hagar-list', component: JaqenHagarListComponent },
  { path: 'manage-lists', component: ManageListsComponent , children: [
    { path: 'new', component: AddListItemComponent },
    { path: ':id/edit', component: AddListItemComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
