// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ', employees);


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus(employee) {
  let totalBonus = 0;
  let bonusPercentage = 0;
  let totalCompensation = 0;
  // your logic here
  console.log(employee.name)
  console.log(employee.annualSalary)

  //Those who have a rating of a 2 or below should not receive a bonus.
  if (employee.reviewRating < 2) {
    console.log('review rating is less than 2:', employee.reviewRating)
    bonusPercentage = 0;
    console.log('current bonus percentage:', bonusPercentage);
  }

  // Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
  if (employee.reviewRating === 3) {
    console.log('review rating is equal than 3:', employee.reviewRating)
    bonusPercentage = .04;
    console.log('current bonus percentage:', bonusPercentage);
  }

  // Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
  if (employee.reviewRating === 4) {
    console.log('review rating is equal than 4:', employee.reviewRating)
    bonusPercentage = .06;
    console.log('current bonus percentage:', bonusPercentage);
  }

  // Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
  if (employee.reviewRating === 5) {
    console.log('review rating is equal than 5:', employee.reviewRating)
    bonusPercentage = .1;
    console.log('current bonus percentage:', bonusPercentage);
  } 

  /* If their employee number is 4 digits long, this means they have been with the company for longer than 15 years,
   and should receive an additional 5%
  */
  if (employee.employeeNumber.length > 4) {
    bonusPercentage = bonusPercentage + .05;
  } 

  // However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
  // if (employee.annualSalary < 65000) {
  //   bonusPercentage = bonusPercentage - .01;
  // }

// creating a new object for each employee with the bonus percentage, bonus, and total compensation.
  return {
    name: employee.name,
    bonusPercentage: bonusPercentage, // test value
    totalCompensation: totalCompensation, // test value
    totalBonus: totalBonus, //test value
  }
}


// crating a loop to run the function over every employee.
for (let employee of employees) {
  calculateIndividualEmployeeBonus(employee)
}
