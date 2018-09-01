import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CreateListingComponent } from './components/create-listing/create-listing.component';
import { HomeAuthenticatedComponent } from './components/home-authenticated/home-authenticated.component';
import { ListingDetailsComponent } from './components/listing-details/listing-details.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { UserDeletedComponent } from './components/minor-component/user-deleted/user-deleted.component';
import { ListingDeletedComponent } from './components/minor-component/listing-deleted/listing-deleted.component';
import { ListingEditedComponent } from './components/minor-component/listing-edited/listing-edited.component';

const routes: Routes = [
    { path: 'home', component: HomeAuthenticatedComponent, canActivate: [AuthGuard] },
    { path: 'welcome', component: HomeComponent, },
    { path: 'login', component: LoginComponent, },
    { path: 'userDeleted', component: UserDeletedComponent },
    { path: 'listingDeleted', component: ListingDeletedComponent },
    { path: 'listingEdited', component: ListingEditedComponent },
    { path: 'register', component: RegisterComponent, },
    { path: 'userPanel', component: UserPanelComponent, canActivate: [AuthGuard] },
    { path: 'adminPanel', component: AdminPanelComponent },
    { path: 'userProfileDetails/:id', component: UserProfileComponent, canActivate: [AuthGuard] },
    { path: 'createListing', component: CreateListingComponent, canActivate: [AuthGuard] },
    { path: 'editListing/:id', component: EditListingComponent, canActivate: [AuthGuard] },
    { path: 'listingDetails/:id', component: ListingDetailsComponent, canActivate: [AuthGuard] },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', component: PageNotFoundComponent }

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }