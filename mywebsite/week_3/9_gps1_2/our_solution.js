var actor1 = {
    name: 'Adam Sandler',
    age: 47,
    quote: "That's your home! Are you too good for your home?"
    };

var actor2 = {
    name: 'Kristen Bell',
    age: 33,
    quote: "Do you wanna build a snowman?"
    };

var actor3 = {
    name: 'Jim Carrey',
    age: 52,
    quote: "...So you're telling me there's a chance? YEAH!"
    };


var Client = function(name, age, quote){
  this.name = name;
  this.age = age;
  this.quote = quote;
};

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");

<<<<<<< HEAD:week_3/8_gps1_2/our_solution.js
console.log(actor3);
console.log(shooterMcGavin);
=======
// 0. "YOU SIGNED... WHO?!"
>>>>>>> upstream/master:week_3/9_gps1_2/our_solution.js

var AddressBook = function(){
    var clients = [];
    this.addContact = function(new_client){
      clients.push(new_client);
    };
};

AddressBook.addContact(shooterMcGavin);
console.log(AddressBook);


<<<<<<< HEAD:week_3/8_gps1_2/our_solution.js
=======
// 1. "Here they Come!"
>>>>>>> upstream/master:week_3/9_gps1_2/our_solution.js

//fjkehf

var actor1 = {
    name: 'Adam Sandler',
    age: 47,
    quote: "That's your home! Are you too good for your home?"
    };

var actor2 = {
    name: 'Kristen Bell',
    age: 33,
    quote: "Do you wanna build a snowman?"
    };

var actor3 = {
    name: 'Jim Carrey',
    age: 52,
    quote: "...So you're telling me there's a chance? YEAH!"
    };

<<<<<<< HEAD:week_3/8_gps1_2/our_solution.js
=======
// 2. "TIME IS MONEY!"
>>>>>>> upstream/master:week_3/9_gps1_2/our_solution.js

var Client = function(name, age, quote){
  this.name = name;
  this.age = age;
  this.quote = quote;
};

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
<<<<<<< HEAD:week_3/8_gps1_2/our_solution.js

console.log(actor3);
console.log(shooterMcgavin);

var AddressBook = function(){
    var clients = [];
    this.addContact = function(new_client){
      clients.push(new_client);
    };
};

AddressBook.addContact(shooterMcGavin);
console.log(AddressBook);

var AddressBook = function(){
    var contacts = [];
    this.addContact = function(client){
        contacts.push(client);
    }
    this.printContacts = function(){
      for (clientPosition in contacts){
        console.log("Name: " + contacts[clientPosition].name);
        console.log("Age: " + contacts[clientPosition].age);
        console.log("Quote: " + contacts[clientPosition].quote);
      }
    }
}

var ourAddressBook = new AddressBook();

ourAddressBook.addContact(client1);
ourAddressBook.addContact(client2);
ourAddressBook.addContact(client3);
ourAddressBook.printContacts();
=======
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 3. "SHOW 'EM OFF!"





// 4. "But wait, there's more!"



// 5.  ** BONUS **


//  6.  Your Reflection:
>>>>>>> upstream/master:week_3/9_gps1_2/our_solution.js
