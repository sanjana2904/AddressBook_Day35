//UC11
function sortByName()
{
    addressBookArray.sort((a, b) => a.firstName.toLowerCase().localeCompare(b.firstName.toLowerCase()));
    console.log("Sorted Array : ")
    addressBookArray.forEach(contact => console.log(contact.toString()));
}
sortByName();