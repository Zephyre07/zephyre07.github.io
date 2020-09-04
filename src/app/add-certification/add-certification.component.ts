import { Component, OnInit } from '@angular/core';
import { ICertificate } from '../model/ICertificate';

@Component({
  selector: 'app-add-certification',
  templateUrl: './add-certification.component.html',
  styleUrls: ['./add-certification.component.css']
})
export class AddCertificationComponent implements OnInit {

  //constructor(private _customerService:CustomerService) { }

  displayTitle:string='Certification Form';

  certificate:ICertificate={

    resourceName:"",
    certificationName:"",
    certificationDate:new Date,
    provider:"",
    status:"",
    validTill:new Date,
    lastupdate:new Date

  };

  ngOnInit() {
  }

  onSubmit(customer:ICertificate):void{
    console.log(customer);
    //this._customerService.onRegister(customer).subscribe();
  }
}
