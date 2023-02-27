import { Component,OnInit } from '@angular/core';
import {FormControl,  Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor (
    private router:Router
  ){}
  forgot(){
    this.router.navigate(['forgot'])
  }

  ngOnInit(): void {
    
  }
  "emailFormControl" = new FormControl('', [Validators.required, Validators.email]);
  
    matcher = new ErrorStateMatcher();
    country: string[]=[
  "Afrikaans",
  "azərbaycan",
  "English (United Kingdom)",
  "English (United States)",
  "Українська",
  "ქართული",  
  "हिन्दी",
  "অসমীয়া",
  "বাংলা",
  "ਪੰਜਾਬੀ",
  "ગુજરાતી",
  "ଓଡ଼ିଆ",
  "தமிழ்",
  "తెలుగు",
  "ಕನ್ನಡ",
  
    ]
   
  
}
