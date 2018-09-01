import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingService } from '../../services/listing.service';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/auth.service';


@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css']
})
export class ListingDetailsComponent implements OnInit {
  id: string;
  carsData: Object;
  creatorId: string;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private listingService: ListingService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'] //log the value of id
    });
    this.creatorId = localStorage.getItem('_id');

    this.listingService.getListingDetails(this.id)
      .subscribe(
        data => {
          console.log(data)
          this.carsData = data;
          console.log(this.carsData)
        },
        err => {
          console.log(err)
        }
      )
  }

  deleteListing(id) {
    this.listingService.deleteListing(id)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['/listingDeleted'])
        },
        err => {
          console.log(err)
        }
      )
  }
  editListing(id) {
    this.router.navigate(['/editListing', id])
  }



}
