//UC6
function numberOfContact()
{
    let totalCount = addressBookArray.reduce(((totalCount) => { totalCount += 1; return totalCount; }), 0);
    console.log("Total Number of Contacts in AddressBook : " + totalCount);
}
