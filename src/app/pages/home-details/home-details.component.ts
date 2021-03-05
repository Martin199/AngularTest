import { Component, OnInit } from '@angular/core';
import { LicensesService } from '../../services/licenses.service';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.scss']
})
export class HomeDetailsComponent implements OnInit {

  datalicensesObserver: any = [];
  licensesData = this.licensesServices.licensesSubject$.value
  constructor(private licensesServices : LicensesService) { }

  ngOnInit( ): void {
    this.licensesServices.getDataLicenses().subscribe((data:any) => {
  
      this.datalicensesObserver = data

    })
  }

}
