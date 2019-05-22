import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appnw';

  constructor(private route:Router){

   this.routeEvent(this.route);

 }
 routeEvent(router: Router){
   router.events.subscribe(e => {
     if(e instanceof NavigationEnd){
       console.log(e)
       //reset de select
       this.select.home = false;
       this.select.un = false;
       //recherche url
       if (e.urlAfterRedirects === '/'){
          this.select.home = true;
          return;
       }
       if (e.urlAfterRedirects === '/deux'){
          this.select.un = true;
          return;
       }
     }
   });
 }

 select = {
    home: false,
    un: false
 };

}
