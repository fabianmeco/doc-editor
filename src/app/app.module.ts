import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {environment} from '../environments/environment';
import {FirebaseService} from './firebase.service';
import {FormsModule} from '@angular/forms'
import {FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListWrapComponent } from './list-wrap/list-wrap.component';
import { EditWrapComponent } from './edit-wrap/edit-wrap.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateWrapComponent } from './create-wrap/create-wrap.component';
import { DescriptionFieldsComponent } from './description-fields/description-fields.component';
import { ContentFieldComponent } from './content-field/content-field.component';
import { CreateButtonsComponent } from './create-buttons/create-buttons.component';
import { ListComponent } from './list/list.component';
import { FilterComponent } from './filter/filter.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListWrapComponent,
    EditWrapComponent,
    NotfoundComponent,
    CreateWrapComponent,
    DescriptionFieldsComponent,
    ContentFieldComponent,
    CreateButtonsComponent,
    ListComponent,
    FilterComponent,
    WelcomePageComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
