import { Component, OnInit } from '@angular/core';
import { ListingModel } from '../../models/listing.model';
import { ListingService } from '../../services/listing.service';
import { FormGroup, FormControl, FormBuilder, FormsModule, Validator, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css']
})
export class EditListingComponent implements OnInit {
  id: string;
  listingInfo: object;
  title: object;
  model: ListingModel;
  editListingFailed: boolean;
  errMessage: string;

  constructor(
    private listingService: ListingService,
    private route: ActivatedRoute,
    private router: Router) {
  }


  form = new FormGroup({
    "title": new FormControl('', [Validators.required]),
    "description": new FormControl('mincho'),
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
    this.route.params.subscribe(params => {
      // console.log(params)
      this.id = params['id'] //log the value of id
      this.title = params['title']
      // console.log(this.title)
    });

    this.listingService.getListingDetails(this.id)
      .subscribe(
        data => {
          console.log('data')
          this.model = new ListingModel(
              data['seller']
            , data['title']
            , data['description']
            , data['brand']
            , data['model']
            , data['year']
            , data['imageUrl']
            , data['fuelType']
            , data['price'])
        },
        err => {
          console.log(err)
        }
      )
  }

  editListing() {
    this.listingService.edit(this.id, this.model)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['/listingEdited'])
        },
        err => {
          console.log(err)
          // this.createListingFailed = true;
          // this.errMessage = err['error']['description']
        })
  }

}
