function AddressBook(contact){
  this.currentId=0;
  this.contacts=[];
}
 function Contacts(first, last, phone){
   this.firstName = first;
   this.lastName = last;
   this.phoneNumber = phone;
 }

Contacts.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
  return contact;
}

AddressBook.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
}
