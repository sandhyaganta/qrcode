import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { ChangeDetectorRef } from '@angular/core';
import { NgModule } from '@angular/core';
import { SafeValue } from '@angular/platform-browser';


@Component({
  selector: 'app-qrcode',
  standalone: true,
  imports: [QRCodeModule,FormsModule],
  templateUrl: './qrcode.component.html',
  styleUrl: './qrcode.component.css'
})
export class QrcodeComponent {

  constructor( private cd:ChangeDetectorRef){}

  qrdata: string = 'sandhya';
  qrCodeDownloadLink:SafeValue='';

  onChange(url:any){
    this.qrCodeDownloadLink=url;

  }

 
}
