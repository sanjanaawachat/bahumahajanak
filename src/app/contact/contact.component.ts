import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MainService } from '../services/main.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  emailForm!: any;
  ApiResult: any;
  emailId: any = "sanjanaawachat1998@gmail.com";


  constructor(private fb: FormBuilder, private mainService: MainService) { 
    
  }


 

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      Name: ['', Validators.required],
      Email: ['', Validators.required],
      Phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      Message:['', Validators.required],
      post: ['', Validators.required]
     
    });
  }
  send_Email(){ 
    // stop here if form is invalid
    var name = this.emailForm.get("Name")!.value;
    var email = this.emailForm.get("Email")!.value;
    var phone = this.emailForm.get("Phone")!.value;
    var message = this.emailForm.get("Message")!.value;
    var EmailBodyMsg = "<table ><thead><tr><th>Kendriya Manavadhikar</th></tr></thead><tbody><tr><td>Name:</td><td>" + name + "</td></tr><tr><td>Email:</td><td>" + email+"</td></tr></tbody></table>"+"</td></tr><tr><td>Phone:</td><td>" + phone +"</td></tr></tbody></table>"  +  "</td></tr><tr><td>Message:</td><td>" + message+"</td></tr></tbody></table>";
    var Moobj: any = {};
    Moobj.EmailSubject = "For Contact Us";
    Moobj.EmailTo = this.emailId;
    Moobj.PkSystemEmailSetting = 4;
    Moobj.message = EmailBodyMsg;
    this.mainService.emailMethod(Moobj).subscribe(value => {
      this.ApiResult = value;
      console.log(this.ApiResult);
    
      
    });
  
    alert("Send Request Successfully");
  }
}
