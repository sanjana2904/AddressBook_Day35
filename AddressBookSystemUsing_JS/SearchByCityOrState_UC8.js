//UC8 

function searchbyCityOrState()
{
    let inputCity = prompt("Enter city to search person : ");
    let inputState = prompt("Enter state to search person : ");
    addressBookArray.forEach(addressBook => {
        if (addressBook.city == inputCity || addressBook.state == inputState)
        {
            console.log("Person in city " + inputCity + " and state " + inputState);
        }
    });
    addressBookArray.filter(contact => contact.city == inputCity)
    addressBookArray.filter(contact => contact.city == inputCity)
    addressBookArray.forEach(contact => console.log(addressBookArray));
}

searchbyCityOrState();