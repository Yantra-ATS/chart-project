import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  products!: any[];

  constructor() {
  }

  ngOnInit() {
  this.products =this.getProductsData();
  }

  getProductsData() {
    return [
      {
        id: '1000',
        actions:'',
        modelYear: '2023',
        vehicleProgramCode: 'CD542',
        namePlate: 'EV0S',
        engineDisplacement: '2.0L',
        Transmission: 'Hf55',
        driveline: '',
        batterypacktype: '',
        vehiclemp1date: '',
        status: 'Active'
      },

      {
        id: '1000',
        actions:'',
        modelYear: '2024',
        vehicleProgramCode: 'CD656',
        namePlate: 'EVOS',
        engineDisplacement: '2.0L',
        Transmission: 'Hf55',
        Driveline: '',
        Btterypacktype: '',
        vehiclemp1date: '',
        status: 'Active'
      },
      {
        id: '1000',
        actions:'',
        modelYear: '2028',
        vehicleProgramCode: 'H567',
        namePlate: 'F-650/F-750',
        engineDisplacement: '7.3L',
        Transmission: 'ALL',
        Driveline: '',
        Btterypacktype: '',
        vehiclemp1date: '11/20/2026',
        status: 'Active'
      },  {
        id: '1000',
        actions:'',
        modelYear: '2020',
        vehicleProgramCode: 'CD656',
        namePlate: 'Product Description',
        engineDisplacement: '2.0L',
        Transmission: '10R',
        Driveline: '',
        Btterypacktype: 24,
        vehiclemp1date: '',
        status: 'Active'
      },  {
        id: '1000',
        actions:'',
        modelYear: '2024',
        vehicleProgramCode: 'U611',
        namePlate: 'Aviator',
        engineDisplacement: '3.0l',
        Transmission: '10R',
        Driveline: '',
        Btterypacktype: '',
        vehiclemp1date: '',
        status: 'Active'
      },  {
        id: '1000',
        actions:'',
        modelYear: '2019',
        vehicleProgramCode: 'CD656',
        namePlate: 'EVOS',
        engineDisplacement: '2.0L',
        Transmission: 'ALL',
        Driveline: '',
        Btterypacktype: '',
        vehiclemp1date: '',
        status: 'Active'
      },  {
        id: '1000',
        actions:'',
        modelYear: '2025',
        vehicleProgramCode: 'H567',
        namePlate: 'F-650/F-750',
        engineDisplacement: '6.7L',
        Transmission: '6R140',
        Driveline: '',
        Btterypacktype: '',
        vehiclemp1date: '',
        status: 'Active'
      },  {
        id: '1000',
        actions:'',
        modelYear: '2020',
        vehicleProgramCode: 'H567',
        namePlate: 'F-650/F-750',
        engineDisplacement: '6.7L',
        Transmission: '6R140',
        Driveline: '',
        Btterypacktype: '',
        vehiclemp1date: '10/04/2019',
        status: 'Active'
      },  {
        id: '1000',
        actions:'',
        modelYear: '2021',
        vehicleProgramCode: 'H567',
        namePlate: 'F-650/F-750',
        engineDisplacement: '7.3L',
        Transmission: '6R140',
        Driveline: '',
        Btterypacktype: '',
        vehiclemp1date: '12/02/2020',
        status: 'Active'
      },  {
        id: '1000',
        actions:'',
        modelYear: '2028',
        vehicleProgramCode: 'CD656',
        namePlate: 'E-Series(Van/cutaway)',
        engineDisplacement: '7.3L',
        Transmission:'',
        Driveline: '',
        Btterypacktype: '',
        vehiclemp1date: '11/30/2026',
        status:'Active'
      },  {
        id: '1000',
        actions:'',
        modelYear: '2027',
        vehicleProgramCode: 'CD656',
        namePlate: 'Product Description',
        engineDisplacement: '7.3L',
        Transmission: '',
        Driveline: '',
        Btterypacktype: '',
        vehiclemp1date: '30/11/2026',
        status: 'Active'
      },
    ];
  }
}
