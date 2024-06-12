import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { ListingDetailsComponent } from './components/listing-details/listing-details.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listings', component: ListingsComponent },
  { path: 'listings/:id', component: ListingDetailsComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'admin', component: AdminPanelComponent },
];
