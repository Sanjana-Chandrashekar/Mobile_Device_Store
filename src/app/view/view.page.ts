import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  budget;
  category;

  pageTitle: any;

  viewID: any;
  title1: any;
  subtitle1: any;
  requirements1: any;

  title2: any;
  subtitle2: any;
  requirements2: any;

  title3: any;
  subtitle3: any;
  requirements3: any;


  constructor(
    public routing: ActivatedRoute
  ) { }

  ngOnInit() {
    this.viewID = this.routing.snapshot.paramMap.get('id');
    this.budget = this.routing.snapshot.paramMap.get('bud');
    this.category = this.routing.snapshot.paramMap.get('cat');
    this.show()
  }

  

  show() {

    if(this.budget==1&&this.category==1&&this.viewID==1){
      this.pageTitle="Find Your Pixel";
      this.title1 = "Pixel 3a";
      this.requirements1 = "../../assets/images/pixel_3a.jpg";

      this.title2=null;
      this.title3=null;
    }


    else if (this.viewID == "1") {
      this.pageTitle="Find Your Pixel";
      this.title1 = "Pixel 3a";
      this.requirements1 = "../../assets/images/pixel_3a.jpg";

      this.title2 = "Pixel 3XL";
      this.requirements2 = "../../assets/images/pixel_3xl.jpg";

      this.title3 = "Pixel 3";
      this.requirements3 = "../../assets/images/pixel_3.jpg";
    }

    else if (this.viewID == "2") {
      this.pageTitle="Samsung";
      this.title1 = "Samsung Note 9 ";
      this.requirements1 = "../../assets/images/samsung_note9.png";

      this.title2 = "Samsug Galaxy s8";
      this.requirements2 = "../../assets/images/samsung_s8.jpg";

      this.title3 = "Samsung Galaxy s9";
      this.requirements3 = "../../assets/images/samsung_s9.jpg";
    }
    else if (this.viewID == "3") {
      this.pageTitle="Never Settle";
      this.title1 = "One Plus 7 Pro";
      this.requirements1 = "../../assets/images/oneplus_6t.jpeg";

      this.title2 = "One Plus 6T";
      this.requirements2 = "../../assets/images/oneplus_6t.jpeg";

      this.title3 = "One plus 5T";
      this.requirements3 = "../../assets/images/onsplus_5T.jpg";
    }
   
    }

  }


