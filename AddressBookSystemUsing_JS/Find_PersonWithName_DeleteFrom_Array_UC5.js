//UC5
function deleteContact()
{
    let userInput = prompt("Enter name to Delete Entry : ");
    addressBookArray.forEach(addressBook => {
        if (addressBook.firstName == userInput)
        {
            addressBookArray.splice(addressBookArray.indexOf(addressBook), 1)
            console.log("Record Deleted");
            console.log(addressBookArray);
        }
    });
}

deleteContact();