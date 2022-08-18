import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { LuminaireModel } from 'src/app/models/luminaire-model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.scss']
})
export class ContentDetailsComponent implements OnInit {

  @Input() public infoLuminaires: any = null;

  luminaireObj: LuminaireModel = new LuminaireModel();

  public editFormFlag:boolean=true;

  constructor() { }

  ngOnInit(): void {
    if (this.infoLuminaires) this.luminaireObj = this.infoLuminaires.properties;
  }

  ngOnChanges() {
    if (this.infoLuminaires) this.luminaireObj = this.infoLuminaires.properties;
  }

  
  /**
   * Cambia el formulario a editable
   */
   changeEditBtn() {
    this.editFormFlag = !this.editFormFlag;
  }

  /**
   * Actualiza luminaria
   */
  updateBtn(){    
    Swal.fire({ icon: 'success', title: 'Proceso realizad con exitos', text: 'Se actualizo la luminaria correctamente' });
    this.editFormFlag = !this.editFormFlag;
  }
}
