import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-aes-encryption',
  templateUrl: './aes-encryption.component.html',
  styleUrls: ['./aes-encryption.component.css']
})
export class AESEncryptionComponent implements OnInit {
  secrectkey : string='';
  text : string='';
  textEncrypt='';
  textDecrypt='';
   showKeyDecr='';

  encryptText:string='';
  constructor() { }

  ngOnInit(): void {
    // console.log(this.secretKey)
    // console.log(this.text)
  }

  login()
  {
   const usr= this.secrectkey;
   const password= this.text;
   console.log(usr);
   console.log(password)
  }
  encrypt(): string {
    this.textEncrypt=CryptoJS.AES.encrypt(this.text, this.secrectkey).toString();
    return this.textEncrypt;
  }

  decrypt() {
    this.textDecrypt=CryptoJS.AES.decrypt(this.textEncrypt, this.secrectkey).toString(CryptoJS.enc.Utf8);
    console.log(this.textDecrypt)
    return this.textDecrypt;
  }
  showKey(){
   this.showKeyDecr=this.secrectkey;
  }
}
