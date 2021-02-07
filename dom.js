const companies = [
    {name: 'PT. Yutaka', address: 'cibitung', category: 'otomotif', start: 1996, end: 2021},
    {name: 'PT. YKK', address: 'cibitung', category: 'food', start: 1986, end: 2010},
    {name: 'PT. Unilever', address: 'jababeka', category: 'otomotif', start: 1981, end: 2011},
    {name: 'PT. Miura', address: 'karawang', category: 'otomotif', start: 1974, end: 2001},
    {name: 'PT. Epson', address: 'cikarang', category: 'electronic', start: 1956, end: 2000},
    {name: 'PT. NSK', address: 'cibitung', category: 'otomotif', start: 1989, end: 2011},
];

const age = [21, 34, 18, 27, 43, 56, 23, 41, 18];
// loop biasa
for(let i = 0; i < companies.length; i++){
    console.log(companies[i].address);
}
// loop es6
companies.forEach((item) => {
    console.log(item.name);
});

// filter biasa
const getAddress = companies.filter(company => {
    if(company.address === 'cibitung'){
        return true;
    }
});

console.log(getAddress);

// filter es6
const getAddressES6 = companies.filter(company => company.category === 'otomotif');

console.log(getAddressES6);

// get 80's
const get80 = companies.filter(company => (company.start >= 1980 && company.start < 1990));

// get established >= 30 yo
const last30 = companies.filter(company => (company.end - company.start >= 30));
console.log('30', last30);

console.log('eigthes', get80);

// filter biasa
const canDrive = [];

for(let i = 0; i < age.length; i++){
    if(age[i] > 18){
        canDrive.push(age[i]);
    }
}
console.log(canDrive);

// filter biasa
const canDriveFilter = age.filter((age) => {
    if(age > 18){
        return true;
    }
});
console.log(canDriveFilter);

// filter es6
const canDriveES6 = age.filter(age => age > 18);

console.log(canDriveES6);

// map
// create array of companies name
const companyNames = companies.map( company => {
    return company.name;
});

console.log('company name', companyNames);

const test = companies.map(company => {
    return `${company.name} [${company.start} - ${company.end} ]`
});

console.log('company start-end', test);

const testMap = companies.map(company => 
    `${company.name} [${company.start} - ${company.end} ]`
);
console.log(testMap)

const agesSquare = age.map(age => age );
console.log(agesSquare);

// sort

const sortedCompany = companies.sort(function(c1, c2){
    if(c1.start > c2.start){
        return 1;
    } else return -1;
});
console.log('companies', sortedCompany);

const sortCompany = companies.sort((a, b) => (a.start > b.start ?1 : -1));

console.log(sortCompany);

const sortCompanies = companies.sort();

console.log('tes', sortCompanies);

const sortAge = age.sort();

console.log(sortAge);

const descAge = age.sort((a, b) => b - a);

console.log('tes desecending', descAge);

 let ageSum = 0;
 for(let i = 0; i < age.length; i++){
    ageSum += age[i];
 };
 console.log(ageSum); // result 281

 const addAge = age.reduce((total, age) => total + age, 0); // 0 as parameter age 
 console.log(addAge); // result 281 

 const reduceAge = age.reduce(function(total, age){
    return total + age;
 }, 0);
 console.log(reduceAge);

 const totalYear = companies.reduce((total, company) => {
     return total + (company.end - company.start);
 }, 0);
 console.log(totalYear);
 const totalYearES6 = companies.reduce((total, company) => 
     total + (company.end - company.start), 0);
console.log(totalYearES6);

const ageModif = age
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a -b)
    .reduce((a, b) => a+b, 0);

console.log('age modif', ageModif);    
