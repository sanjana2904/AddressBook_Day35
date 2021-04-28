//UC4
const prompt = require('prompt-sync')({sigint: true});

function editPerson()
{
    let userInput = prompt("Enter name to update Contact : ");

    addressBookArray.forEach(addressBook => {
        if (addressBook.firstName == userInput)
        {
            console.log("1.PhoneNumber" + "\n2.Address" + "\n3.quit");
            var choice = prompt("Select any option to edit :")
    
    switch (choice)
            {
                case "1":
                    phoneNumber = prompt("Enter new Phone Number :");
                    addressBook.phoneNumber = phoneNumber;
                    console.log(addressBook.toString());
                    console.log("Phone number updated")


            break;
                case "2":
                    city = prompt("Enter new city : ");
                    addressBook.city = city;
                    console.log(addressBook.toString());

                    state = prompt("Enter new state : ");
                    addressBook.state = state;
                    console.log(addressBook.toString());

                    zip = prompt("Enter new zip : ");
                    addressBook.zip = zip;
                    console.log(addressBook.toString());
                    break;
                default:
                    console.log("Incorrect choice");
                    break;
            }
        }
    });
}
