import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LicensesService } from '../../services/licenses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public data : any[] = [];
  public columns: any[] = [];
  public loading: boolean = false;
  public dataChange: Observable<any> | undefined;

  constructor(private licensesServices: LicensesService) { }

  ngOnInit(): void {
    this.setDataColumns();
    // this.dataChange = this.changeDataTable();
    this.buildDataTable();

    this.licensesServices.getLicensesMap().subscribe( dataResp => dataResp)
  }

  setDataColumns(){
    this.columns  = [
      { headerName: 'id Solicitud', field: 'id' },
      { headerName: 'Nombre', field: 'name' },
      { headerName: 'Apellido', field: 'surname' },
      { headerName: 'ID HR', field: 'tenant' },
      { headerName: 'CUIL', field: 'cuil' },
      { headerName: 'Licencia', field: 'typeLicense' },
      { headerName: 'Unidad Organizativa', field: 'id' },
      { headerName: 'Fecha de inicio', field: 'initDate' },
      { headerName: 'Fecha de fin', field: 'endingDate' },
      { headerName: 'Estado', field: 'gcbaLicenseStatus' },
    ];
  }

  buildDataTable(){
    this.loading = true
    this.licensesServices.getlicenses().subscribe( (resp:any) => {

      this.data = resp.content
     
      this.loading = false
   })
  }


  private changeDataTable() {
		return this.licensesServices.getlicenses();
	}


}
