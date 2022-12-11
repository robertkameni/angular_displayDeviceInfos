import { Component, OnInit } from '@angular/core'
import { DeviceView } from '../models/device-view'
import { DeviceInfosService } from '../service/device-infos.service'
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-device-view',
  templateUrl: './device-view.component.html',
  styleUrls: ['./device-view.component.css']
})
export class DeviceViewComponent implements OnInit {
  public deviceInfos!: Array<DeviceView>
  public errorMessage: string | null = null
  public status!: string
  public deviceId!: string

  public dataSource = new MatTableDataSource<DeviceView>()
  public displayedColumns = ['name', 'deviceTypeId', 'failsafe']

  constructor (private deviceInfoService: DeviceInfosService) {}

  public ngOnInit (): void {
    this.getAllDataDevices()
  }

  getAllDataDevices () {
    this.deviceInfoService.getAllDeviceInfos().subscribe({
      next: data => {
        this.dataSource.data = data
      },
      error: err => {
        this.errorMessage = err
      }
    })
  }

  public viewDetail () {}

  public deleteDevice (deviceId: string | undefined) {
    this.deviceInfoService.deleteDevice(deviceId).subscribe({
      next: () => {
        this.getAllDataDevices()
      },
      error: err => (this.errorMessage = err)
    })
  }
}
