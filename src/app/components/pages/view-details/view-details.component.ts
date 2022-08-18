import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewDetailsComponent implements OnInit {

  infoLuminaires: any = null;

  constructor() { }

  ngOnInit(): void {
  }

  setInfo(data: any) {
    this.infoLuminaires = data;
  }

}
