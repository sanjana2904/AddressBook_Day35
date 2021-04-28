//UC12
function sortByCityStateOrZip()
{
    addressBookArray.sort((a, b) => a.city.localeCompare(b.city));
    console.log("Sorted Array By City: ")
     addressBookArray.forEach(contact => console.log(contact.toString()));
    addressBookArray.sort((a, b) => a.state.localeCompare(b.state));
    console.log("Sorted Array By State: ")
     addressBookArray.forEach(contact => console.log(contact.toString()));
    ddressBookArray.sort((a, b) => a.zip.localeCompare(b.zip));
    console.log("Sorted Array By Zip: ")
     addressBookArray.forEach(contact => console.log(contact.toString()));

}
sortByCityStateOrZip();