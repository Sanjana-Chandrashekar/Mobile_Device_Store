import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {



  constructor(
    public routing: ActivatedRoute,
    public alertController: AlertController
  ) { }

  formID: any;

  ngOnInit() {
    this.formID = this.routing.snapshot.paramMap.get('id');
    console.log(this.formID);
    this.show();
  }
  pageTitle: any;

 
  camera: any;
  processor: any;
  display: any;
  battery: any;
  features:any;
  technology:any;
  sound:any;
  colors:any;
  link:any;
  buy:any;

  show() {

    if (this.formID == "1") {
      this.camera="CAMERA:  12MP, Front-Camera : 8MP";
      this.processor="PROCESSOR:  Snapdragon 670";
      this.display="DISPLAY:   5.7 Inch";
      this.battery="BATTERY: 3000 MAh";
      this.pageTitle = "Pixel 3A-Specifications";
      this.features="SENSORS:  fingerprint, accelerometer, gyro, proximity, compass, barometer";
      this.technology="TECHNOLOGY:  GSM/CDMA/HSPA/EVDO/LTE";
      this.sound=" SOUND:  loudspeaker with stereo speakers, 3.5mm audio jack";
      this.colors="COLORS:  Just Black, Clearly White, Purple-ish";


      this.link="https://www.youtube.com/watch?v=vcaXm9dgcpI";
      this.buy="https://store.google.com/product/pixel_3a?gclid=CjwKCAjwlPTmBRBoEiwAHqpvhXIx9gTB-BTW_TR0rA4PL-65GYGjCjPoP70bGshSfMBz0V3hct3D1BoCRYMQAvD_BwE&gclsrc=aw.ds";

      // this.t1 = "Specifications";
      // this.r1 = "Camera:  ";



      // this.t2 = "Pixel 3XL";
      // this.r2 = "../../assets/images/pixel_3xl.jpg";

      // this.t3 = "Pixel 3";
      // this.r3 = "../../assets/images/pixel_3.jpg";
    }

    else if (this.formID == "2") {
      this.camera="Camera: 12.2MP";
      this.processor="Processor: Snapdragon 845";
      this.display="Display: 6.3 Inch";
      this.battery="Battery: 3430 mAh";
      this.pageTitle = "Pixel 3XL-Specifications";
      this.link="https://www.youtube.com/watch?v=Lg9N8XAZ6u4";
    
    }

    else if (this.formID == "2XL") {
      this.camera="Camera: 12.2MP";
      this.processor="Processor: Snapdragon 835";
      this.display="Display: 6 Inch";
      this.battery="Battery: 3100 mAh";
      this.pageTitle = "Pixel 2XL-Specifications";
      this.link="https://www.youtube.com/watch?v=a-9IZz8Ry5I";
     
    }

    
    else if (this.formID == "4") {
      this.camera="Camera: 12MP";
      this.processor="Processor: Snapdragon 845";
      this.display="Display: 6.4 Inch";
      this.battery="Battery: 4000 MAh";
      this.pageTitle = "Samsung Note 9-Specifications";
      this.link="https://www.youtube.com/watch?v=ihEhAbVRC78";
     
    }
    
    else if (this.formID == "5") {
      this.camera="Camera: 12MP";
      this.processor="Processor: Snapdragon 835";
      this.display="Display: 5.8 Inch";
      this.battery="Battery: 3000 MAh";
      this.pageTitle = "Samsung Galaxy S8-Specifications";
      this.link="https://www.youtube.com/watch?v=nNlTNE1y9DM";
      
    }
  
    
    else if (this.formID == "6") {
      this.camera="Camera: 12MP";
      this.processor="Processor: Snapdragon 845";
      this.display="Display: 5.8 Inch";
      this.battery="Battery: 3000 MAh";
      this.pageTitle = "Samsung Galaxy S9-Specifications";
      this.link="https://www.youtube.com/watch?v=Gzy_nCkn88U";
      
    }
    
    else if (this.formID == "7") {
      this.camera="Camera: 48MP";
      this.processor="Processor: Snapdragon 855";
      this.display="Display: 6.67 Inch";
      this.battery="Battery: 4000 MAh";
      this.pageTitle = "One Plus 7 pro-specifications";
      this.link="https://www.youtube.com/watch?v=PVWLD3064Ng";
     
    }
    
    else if (this.formID == "8") {
      this.camera="Camera: 16MP";
      this.processor="Processor: Snapdragon 845";
      this.display="Display: 6.41 Inch";
      this.battery="Battery: 3700 MAh";
      this.pageTitle = "OnePlus 6T-specifications";
      this.link="https://www.youtube.com/watch?v=_6-XjSvbJsE";
     
    }
    
    else if (this.formID == "9") {
      this.camera="Camera: 16MP";
      this.processor="Processor: Snapdragon 835";
      this.display="Display: 6 Inch";
      this.battery="Battery: 3300 MAh";
      this.pageTitle = "OnePlus 5T-specifications";
      this.link="https://www.youtube.com/watch?v=Lxet1zLBTM8";
    }
  }

  async submit() {
    const alert = await this.alertController.create({
      header: 'Specs',
      message: 'Application Submitted Successfully',
      buttons: ['OK']
    });

    await alert.present();
  }

}
