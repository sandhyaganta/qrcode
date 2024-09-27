import { Routes } from '@angular/router';
import { QrcodeComponent } from './qrcode/qrcode.component';

export const routes: Routes = [
    {path:'',redirectTo:'qr',pathMatch:'full'},
    {path:'qr',component:QrcodeComponent},
];
