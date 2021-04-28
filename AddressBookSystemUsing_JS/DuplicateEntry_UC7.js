// UC7 
function duplicateEntry()
{
    let userInput = prompt("Enter name to check Entry in addressbook : ");
    addressBookArray.forEach(addressBook => {
        if (addressBook.firstName == userInput)
        {
            console.log("Contact already exists in the book");
        }
        else
        {
            console.log("Contact not exists in the book");
        }
    });
}
duplicateEntry();
