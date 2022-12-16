const findTheOldest = function(people) {
    const length = people.length;
    let age;
    
    for (const person of people) {

        if (!person.yearOfDeath) {
            const d = new Date();
            let year = d.getFullYear();
            person.yearOfDeath = year;
        }
        
        age = person.yearOfDeath - person.yearOfBirth;
        person.age = age;
        
    };
    const ordered = people.sort((a,b) => a.age > b.age ? 1: -1);
    console.table(ordered);
    return ordered[length-1];
};

// Do not edit below this line
module.exports = findTheOldest;
