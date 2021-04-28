//UC10
function countByCity(city)
{
    return addressBookArray.filter(contact => contact.city == city).reduce((count, contact) => count += 1, 0);
}
function countByState(state)
{
    return addressBookArray.filter(contact => contact.state == state).reduce((count, contact) => count += 1, 0)
}
console.log("number of Person in city " + countByCity("Hosur"));
console.log("number of Person in state " + countByState("TamilNadu"));
