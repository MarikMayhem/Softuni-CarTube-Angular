import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing';


import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CreateListingComponent } from './components/create-listing/create-listing.component';
import { HomeAuthenticatedComponent } from './components/home-authenticated/home-authenticated.component';
import { ListingDetailsComponent } from './components/listing-details/listing-details.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

import { AuthService } from './components/authentication/auth.service';
import { UserService } from './services/user.service';
import { ListingService } from './services/listing.service';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { UserDeletedComponent } from './components/minor-component/user-deleted/user-deleted.component';
import { ListingDeletedComponent } from './components/minor-component/listing-deleted/listing-deleted.component';
import { ListingEditedComponent } from './components/minor-component/listing-edited/listing-edited.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserPanelComponent,
    PageNotFoundComponent,
    CreateListingComponent,
    HomeAuthenticatedComponent,
    ListingDetailsComponent,
    EditListingComponent,
    AdminPanelComponent,
    UserProfileComponent,
    UserDeletedComponent,
    ListingDeletedComponent,
    ListingEditedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    UserService,
    ListingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true

    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
