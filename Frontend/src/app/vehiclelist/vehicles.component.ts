import { Component, OnInit, OnDestroy } from '@angular/core';
import { VehicleService } from '../shared/services/vehicle.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit, OnDestroy {
  vehicles:any;
  private subscription: Subscription;
  public Loading = false;
  constructor(private vehicleService: VehicleService) {
   }

  ngOnInit() {
    this.Loading = true;
    setTimeout(() => {
      this.subscription = this.vehicleService.getAllVehicles().subscribe(data => {
        this.vehicles = data;
        this.Loading = false;
        });
    }, 1000);
   }

   ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
