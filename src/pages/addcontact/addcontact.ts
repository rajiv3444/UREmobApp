// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Contacts } from '@ionic-native';


// @Component({
//   selector: 'page-addcontact',
//   templateUrl: 'addcontact.html',
// })
// export class AddcontactPage {
//  nav: any;
//   newcontact:any;
//  static get parameters() {
//     return [[NavController]];
//   }

//   constructor(nav) {
//     this.nav = nav;
//     this.newcontact = {
//         displayName: '',
//         nickname: '',
//         phnumber: '',
//         phtype: ''
//     }
    
//   }
  
//   addcontact(newct) {
//       var contact = Contacts.create();
//       contact.displayName = newct.displayName;
//       contact.nickname = newct.nickname;
      
//       var contactfield = new ContactField();
//       contactfield.type = newct.phtype;
//       contactfield.value = newct.phnumber;
//       contactfield.pref = true;
      
//       var numbersection = [];
//       numbersection.push(contactfield);
//       contact.phoneNumbers = numbersection;
      
//       contact.save().then((contact) => {
//           alert('saved');
//       }, (error) => {
//       alert(error);
//       })
      
//   }

// }

// export class ContactField
// {
//   type:any;
//   value:any;
//   pref:any;

// }
