import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, Observable, throwError } from 'rxjs'
import { DeviceView } from '../models/device-view'

@Injectable({
  providedIn: 'root'
})
export class DeviceInfosService {
  private serverURL = `http://localhost:3000`

  constructor (private http: HttpClient) {}

  public getAllDeviceInfos (): Observable<Array<DeviceView>> {
    let dataURL: string = `${this.serverURL}/devices`

    return this.http
      .get<Array<DeviceView>>(dataURL)
      .pipe(catchError(this.handleError))
  }

  public getDeviceInfo (deviceId: string | null): Observable<DeviceView> {
    let dataURL: string = `${this.serverURL}/devices/${deviceId}`
    return this.http.get<DeviceView>(dataURL).pipe(catchError(this.handleError))
  }

  public deleteDevice (deviceId: string | undefined) {
    let dataURL: string = `${this.serverURL}/devices/${deviceId}`
    return this.http.delete(dataURL).pipe(catchError(this.handleError))
  }

  public handleError (error: HttpErrorResponse) {
    let errorMessage: string = ''

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error : ${error.error.message}`
    } else {
      errorMessage = `Status : ${error.status} \n Message: ${error.message}`
    }

    return throwError(errorMessage)
  }
}
