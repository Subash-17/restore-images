import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  items=[
    {
      testhead:'"Just had early access to this and its *ridic*. Powered by @vercel x @replicatehq - also very fast."',
      test:'Guillermo Rauch',
      testcontent:'CEO at Vercel',
      textimg:'../../assets/images/card.jpeg',
      testlink:"https://twitter.com/rauchg/status/1612233034622984192"
      
    },
    {
      
      testhead:'"I just used it and am extremely impressed with the website and wanted to express my appreciation for the excellent design and functionality. Keep up the great work!"',
      test:'Fawaz Adeniji',
      testcontent:'Software Engineer',
      textimg:'../../assets/images/crad1.jpeg',
      testlink:"https://twitter.com/phar_whaz/status/1612498030627852309"

   
      
    },
    {
      testhead:'"Ive just used it and damn Ill keep coming back! This is so good. Great work!"',
      test:'Himanil Gole',
      testcontent:'Designer & Founder at CBREX',
      textimg:'../../assets/images/card2.jpeg',  
      testlink:"https://twitter.com/Himanil_Gole/status/1612510385504157697"

    },
    {
      testhead:'"This is amazing! And in the 🧵 you can see the whole open-source stack instantly deployable to Vercel"',
      test:'Malte Ubl',
      testcontent:'CTO at Vercel',
      textimg:'../../assets/images/card3.jpeg',
      testlink:"https://twitter.com/cramforce/status/1612496954218672128"

    },
    {
      testhead:'"Wow, thank you! Tried a few and love it! My small example (pic of father from 70s original on right), really cleaned it up!"',
      test:'Sergei Vinderskikh',
      testcontent:'CPO at Treeum',
      textimg:'../../assets/images/card4.jpg',
      testlink:"https://twitter.com/sergvind/status/1612610058369515521"

    },
    {
      testhead:'"Turning blurred photos into perfectly sharp ones. Works like magic"',
      test:'Rod Ellison',
      testcontent:'Software Engineer',
      textimg:'../../assets/images/card5.jpeg',
      testlink:"https://twitter.com/rod_ellison/status/1612513333302775809"

    }
    
  ];


  

  constructor() { }

  ngOnInit(): void {
                
     for(let i=0;i<this.items.length;i++){
            console.log("items",this.items[i]);
            
     }

  }

    
}
