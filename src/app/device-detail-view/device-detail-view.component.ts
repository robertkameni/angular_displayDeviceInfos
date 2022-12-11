import { Component, OnInit, ViewChild } from '@angular/core'
import { MatTableDataSource } from '@angular/material/table'
import { ActivatedRoute, Router } from '@angular/router'
import { DeviceViewComponent } from '../device-view/device-view.component'
import { DeviceView } from '../models/device-view'
import { DeviceInfosService } from '../service/device-infos.service'

@Component({
  selector: 'app-device-detail-view',
  templateUrl: './device-detail-view.component.html',
  styleUrls: ['./device-detail-view.component.css']
})
export class DeviceDetailViewComponent implements OnInit {
  public deviceId: string | null = null
  public deviceInfo!: DeviceView
  public deviceInfos: Array<DeviceView> = []
  public errorMessage: string | null = null

  public dataSource = new MatTableDataSource<DeviceView>()
  public displayedColumns = [
    'name',
    'deviceTypeId',
    'failsafe',
    'tempMin',
    'tempMax',
    'installationPosition',
    'insertInto19InchCabinet',
    'terminalElement',
    'advancedEnvironmentalConditions'
  ]

  @ViewChild(DeviceViewComponent)
  deviceViewComponent!: DeviceViewComponent

  constructor (
    private activatedRoute: ActivatedRoute,
    private deviceInfoService: DeviceInfosService,
    private router: Router
  ) {}

  public ngOnInit (): void {
    this.getDeviceInfo()
  }

  public getDeviceInfo () {
    this.activatedRoute.params.subscribe({
      next: params => {
        this.deviceId = params['deviceId']
      }
    })
    if (this.deviceId) {
      this.deviceInfoService.getDeviceInfo(this.deviceId).subscribe({
        next: data => {
          this.deviceInfos.push(data)
        },
        error: err => {
          this.errorMessage = err
        }
      })
    }
  }

  public isDeviceInfosNotEmpty () {
    return Object.keys(this.deviceInfos).length > 0
  }

  public navigateBack () {
    this.router.navigate(['/devices'])
  }
}
