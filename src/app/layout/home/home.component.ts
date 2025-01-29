import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit, VERSION } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import Typed from 'typed.js';
 


@Component({
  selector: 'app-home',
  imports: [ButtonModule,CardModule,FormsModule,CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  isEnglish:boolean=false
  activeSection: string = 'home'; // Default active section
  isShowing:boolean=true
  prayerTimes: any = null;
  location: string = 'Loading...';
  // List of sections to track
  sections = ['home', 'features', 'about', 'quran', 'prayer-times', 'testimonials'];
someStringProperty: any;
qiblaDirection: number | null = null;
currentHeading: number = 0;
  constructor(private http:HttpClient){}

  fetchPrayerTimes() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Fetch location name using reverse geocoding
        this.http.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
          .subscribe((locationData: any) => {
            this.location = locationData.city || locationData.locality || 'Your Location';
          });

        // Fetch prayer times
        const today = new Date();
        const dateString = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
        this.http.get(`https://api.aladhan.com/v1/timings/${dateString}?latitude=${latitude}&longitude=${longitude}&method=2`)
          .subscribe((data: any) => {
            this.prayerTimes = data.data.timings;
          });
        });
      } else {
        this.location = 'Location access denied';
      }
    }
    fetchQiblaDirection() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
  
          // Fetch Qibla direction
          this.http.get(`https://api.aladhan.com/v1/qibla/${latitude}/${longitude}`)
            .subscribe((data: any) => {
              this.qiblaDirection = data.data.direction;
            });
        });
      } else {
        alert('Geolocation is not supported by this browser.');
      }
    }
    startCompass() {
      if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', (event) => {
          if (event.alpha !== null) {
            this.currentHeading = event.alpha; // Get the device's heading (0-360 degrees)
          }
        });
      } else {
        alert('Device orientation is not supported by this browser.');
      }
    }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.detectActiveSection();
  }
  detectActiveSection() {
    for (const section of this.sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = section;
          break;
        }
      }
    }}
    scrollTo(section: string) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    changeLangToAr()
    {
      this.isEnglish=false
    }
    changeLangEn()
    {
      this.isEnglish=true
    }
  ngOnInit(): void {
    this.detectActiveSection();
    this.fetchPrayerTimes(); 
    this.fetchQiblaDirection()
    setTimeout(() => {
      this.isShowing=false;
    }, 4000);
  
   
  }

}
