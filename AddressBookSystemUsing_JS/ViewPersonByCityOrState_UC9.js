//UC9

function viewByCityOrState()
{
    let inputCity = prompt("Enter city to search person : ");
    let inputState = prompt("Enter state to search person : ");
    if (addressBookArray.some(contact => contact.city == inputCity && contact.state == inputState))
    {
        console.log("Person in city " + inputCity + " and state " + inputState);
    }
    addressBookArray.filter(contact => contact.city == inputCity && contact.state == inputState)
        addressBookArray.forEach(contact => console.log(addressBookArray));
}

viewByCityOrState();