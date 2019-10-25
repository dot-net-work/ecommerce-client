import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'customer-entry',
  templateUrl: './customer-entry.component.html',
  styleUrls: ['./customer-entry.component.css']
})
export class CustomerEntryComponent implements OnInit {

  customerForm: FormGroup;
  isAddressControl: FormControl;

  constructor(private fb: FormBuilder) {

   }

  ngOnInit() {   


    this.customerForm = this.fb.group({
      name: ['',Validators.required],
      phone: {value:'98238',disabled:true},
      email: [''],
      notification: ['sms'],
      isAddress: [false],
      address:['']

    });

    this.isAddressControl = <FormControl>this.customerForm.get('isAddress');

    this.isAddressControl.valueChanges.subscribe(value =>
      {
        this.resetAddress(value);


      }
           
      );

  }

 

  resetAddress(value: boolean){
    let addressControl = this.customerForm.get('address');
    if(!value){
      addressControl.setValue('');
      addressControl.clearValidators();      
    }
    else{
      addressControl.setValidators([Validators.required]);
    }

    addressControl.updateValueAndValidity();
  }

 
  
}
