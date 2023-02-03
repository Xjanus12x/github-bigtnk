import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'resume';

  fullName: string = 'Villacarlos, Alberto S.';
  email: string = 'albertovillacarlos07@gmail.com';
  major: string = 'WEB DEVELOPER';
  bgDark: string = 'bg-dark';
  textWhite: string = 'text-white';
  textBlack: string = 'text-black';
  pushLeft = 'push-left';
  address: string = 'purok 4 dahlia st. Manibaug senura';
  defaultColor: string = 'white';
  hoverColor: string = 'red';
  originalColor: string = this.defaultColor;

  defaultSize: number = 1;
  hoverSize: number = 2;
  originalSize: number = this.defaultSize;
}
