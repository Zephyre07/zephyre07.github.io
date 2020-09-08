import { Component, OnInit } from '@angular/core';
import { ComkartServiceService } from '../comkart-service.service';
import { ICurrency } from '../model/ICurrency';

@Component({
  selector: 'app-view-certification',
  templateUrl: './view-certification.component.html',
  styleUrls: ['./view-certification.component.css']
})
export class ViewCertificationComponent implements OnInit {

  constructor(private _currencyService:ComkartServiceService) { }

  errorMessage:String;
  currency: ICurrency[]=[];

  ngOnInit(): void {
    console.log("In ngOnit");
    this.onView();
  }


  onView():void{
    console.log(this._currencyService.onView()._subscribe);

    this._currencyService.onView().subscribe(
      currency=>{
        this.currency=currency;
        console.log(currency);
      },
      error => this.errorMessage= <any>error
      
    );
  }
}
