import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AryaStarksListComponent } from './arya-starks-list/arya-starks-list.component';
import { JaqenHagarListComponent } from './jaqen-hagar-list/jaqen-hagar-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ManageListsComponent } from './manage-lists/manage-lists.component';
import { HomeComponent } from './home/home.component';
import { ListItemComponent } from './shared/list-item/list-item.component';
import { ListService } from './shared/list.service';
import { AddListItemComponent } from './manage-lists/add-list-item/add-list-item.component';
import { FilterPipe } from './arya-starks-list/filter.pipe';
import { FilterJaqenPipe } from './jaqen-hagar-list/filter-jaqen.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AryaStarksListComponent,
    JaqenHagarListComponent,
    ManageListsComponent,
    HomeComponent,
    ListItemComponent,
    AddListItemComponent,
    FilterPipe,
    FilterJaqenPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
