function AddressBook(contact){
  this.currentId=0;
  this.contacts=[];
}
 function Contact(first, last, phone){
   this.firstName = first;
   this.lastName = last;
   this.phoneNumber = phone;
 }

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
  return contact;
}

AddressBook.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
}

var nina = new Contact ("Nina", "Murphy", "8318880000");
var rj = new Contact ("RJ", "Leimpeter", "5109873019");
var someChick = new Contact ("Vanessa", "Shoemaker", "5038675309");
var someDude = new Contact ("Chad", "Michaels", "5082037045");
