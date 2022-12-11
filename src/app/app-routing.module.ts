import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DeviceDetailViewComponent } from './device-detail-view/device-detail-view.component'
import { DeviceViewComponent } from './device-view/device-view.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  { path: '', redirectTo: 'devices', pathMatch: 'full' },
  { path: 'devices', component: DeviceViewComponent },
  { path: 'devices/:deviceId', component: DeviceDetailViewComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
