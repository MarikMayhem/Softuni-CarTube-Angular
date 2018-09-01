import { Component, OnInit } from '@angular/core';
import { ListingModel } from '../../models/listing.model';
import { ListingService } from '../../services/listing.service';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.css']
})
export class CreateListingComponent implements OnInit {
  model: ListingModel;
  createListingFailed: boolean;
  errMessage: string;

  constructor(
    private listingService: ListingService,
    private router: Router) {
    this.model = new ListingModel(`${localStorage.getItem('username')}`, '', '', '', '', '', '', '', '')
  }

  form = new FormGroup({
    "title": new FormControl('', [Validators.required]),
    "description": new FormControl(''),
    "brand": new FormControl(''),
    "model": new FormControl(''),
    "year": new FormControl(''),
    "imageUrl": new FormControl(''),
    "fuelType": new FormControl(''),
    "price": new FormControl(''),
  })


  get diagnostics() {
    return JSON.stringify(this.form.value);
  }
  ngOnInit() {
  }

  createListing() {
    this.listingService.create(this.model)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['/home'])
        },
        err => {
          console.log(err)
          this.form.reset();
          this.createListingFailed = true;
          this.errMessage = err['error']['description']
        })
  }

}
