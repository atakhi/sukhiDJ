import { Component, OnInit, ViewChild } from '@angular/core';
import { compileNgModuleFromRender2 } from '@angular/compiler/src/render3/r3_module_compiler';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  @ViewChild('contactForm') contactUsForm;
  constructor() { }

  ngOnInit() {
  }
  submitForm() {
    console.log(this.contactUsForm);
  }
}
