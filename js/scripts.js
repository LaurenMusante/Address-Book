function AddressBook(contact){
  this.currentId=0;
  this.contacts=[];
}
 function Contact(first, last, phone) {
   this.firstName = first;
   this.lastName = last;
   this.phoneNumber = phone;
   this.address = {};
 }

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
  return contact;
}

Contact.prototype.addAddress = function(type, address){
  this.address[type] = address;
  return this.address;
}

AddressBook.prototype.findContact = function(id) {
  for (var i = 0; i<this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    }
  };
  return false;
}

function displayContactDetails(addressBookToDisplay) {
  var contactsList = $("ul#contacts");
  var htmlForContactInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact){
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
}
AddressBook.prototype.deleteContact = function(id) {
  for (var i=0; i<this.contacts.length; i++) {
    if (this.contacts[i]){
      if(this.contacts[i].id = id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}

AddressBook.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact

var nina = new Contact ("Nina", "Murphy", "8318880000");
var rj = new Contact ("RJ", "Leimpeter", "5109873019");
var someChick = new Contact ("Vanessa", "Shoemaker", "5038675309");
var someDude = new Contact ("Chad", "Michaels", "5082037045");

// UI Logic
var addressBook = new AddressBook();

$(document).ready(function() {
  $("form#new-contact").submit(function(event){
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNumber = $("input#new-phone-number").val();
    var inputtedAddress = $("input#new-address").val();
    var inputtedAddressType = $("select[name=addressType] option:selected").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
    newContact.addAddress(inputtedAddressType, inputtedAddress);
    addressBook.addContact(newContact);
    console.log(addressBook.contacts);


    $("span.first-name").text(inputtedFirstName);
    $("span.last-name").text(inputtedLastName);
    $("span.phone-number").text(inputtedPhoneNumber);
    $("span.address").text(inputtedAddressType + ": " + inputtedAddress);
    $("#show-contact").show();
    displayContactDetails(addressBook);
    $("ul").show();
  });
});
