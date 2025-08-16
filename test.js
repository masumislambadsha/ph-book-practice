let price = 555;
// console.log(typeof price)

let learning = true;
// console.log(typeof learning)

let megaCity = "Dhaka";
// console.log(typeof megaCity)

let tempreture = 102.5;
// console.log(typeof tempreture)

let isHungry = true;
// console.log(typeof isHungry)

let age = 20;
age = 32;
// console.log(age)

let pocketMoney = 500;
pocketMoney = 150;
// console.log(pocketMoney)

let studyTime = 4;
studyTime = 0;
// console.log(studyTime)

let friendsCount = 3;
friendsCount = 3 - 2;
// console.log(friendsCount)

// Score of last cricket match
let score = 30;

// This is a radius of circle
let radius = 4;

//  let dress = 'shirt';

let amarBasharThikana = "Bipul Bhila, Norshinhopur, Ashulia, Savar, Dhaka";

// super cannot be used as variable, its a reserved key
let super1 = 35;
//  console.log(super1)

let math = "20";
let num = Number(math) + 10;
// console.log(num)

let floatNumber = 3.1416;
let intNumber = parseInt(floatNumber);
// console.log( intNumber)

let firstNum = 56.7328;
let secNum = 12.342343;
let sum = firstNum + secNum;
// console.log( sum.toFixed(2))

let myClass = 45;
let sideClass = 50;

// console.log(myClass < sideClass)

let myNum = 75;
let myFriendNum = 75;
//
// console.log(myNum === myFriendNum)
//
let joma = 95;
let target = 100;

// console.log(joma === target)

let myName = "Rahim";
let myFriendName = "Karim";

// console.log(myName.length === myFriendName.length)

let myStudy = true;
let myFriendStudy = false;

// console.log ( myStudy === myFriendStudy)

let time = 6;

if (time <= 6) {
  // console.log('Nasta Pamu')
} else {
  // console.log('Jharur Bari Khamu')
}

let login = true;
if (login === true) {
  // console.log('Welcome!')
} else {
  // console.log('Get Lost!')
}

let run = "5km";
if (run == "5km") {
  // console.log('Choclate Dibe')
} else {
  // console.log('Bhuri Barbe')
}

let boyos = 18;
let height = 60;
if (boyos == 18 && height == 60) {
  // console.log('Gari Thelbe')
} else {
  //  console.log('Gari Thelbe Na')
}

let nums = [71, 72, 73, 74, 75, 76, 77, 78, 79];
nums[2] = 21;
// console.log(nums.length)
// console.log(nums[2])

let frnds = ["Sagor", "Sajid", "Sakib", "Sohel"];
frnds.push("Suman");
// console.log(frnds)

const numbers = [12, 34, 54, 56, 23, 45, 34];
for (const num of numbers) {
  // console.log(num)
}

for (i = 1; i <= 30; i++) {
  if (i > 15) {
    break;
  }
  // console.log(i)
}

for (i = 1; i <= 40; i++) {
  if (i % 7 === 0) {
    continue;
  }
  // console.log(i)
}

for (i = 1; i <= 15; i++) {
  if (i === 9) {
    continue;
  }
  //    console.log(i)
}

let teacher = {
  name: "Shorif Bhai",
  subject: "Physics",
  age: 24,
  home: "Jahangirnogor Rofiq Jobbar Hall",
};
const person = {
  name: "sodor uddin",
  age: 25,
  profession: "Developer",
  slaray: 25000,
  married: true,
  "  fav place ": ["bandorbon", "sundorban", "kuakata"],
};
// console.log(person.profession)
// console.log(person['age'])

const cricketer = {
  position: 4,
  specialty: "batter",
  age: 24,
  runs: 8000,
};

// console.log(cricketer)
// console.log(cricketer.runs)

cricketer.runs = 4000;

// console.log(cricketer.runs)
// console.log(cricketer)

let player = {
  name: "Sinister",
  age: 22,
  sport: "PUBG",
  teamName: "A1Esports",
};
// console.log(player.teamName)
let laptop = {
  brand: "HP",
  price: 34000,
  hardDisk: "512GB",
  ram: "16GB",
  screenSize: "16 Inch",
};
// console.log(laptop.screenSize)

let favPlace = {
  name: "Cox's Bazar",
  distance: "4000KM",
  popularity: "High",
};
// console.log(favPlace['popularity'])

let phone = {
  brand: "Realme",
  color: "White",
  price: 5000,
};
// console.log(phone['price'])

let college = {
  name: "NDC",
  established: 1949,
  group: ["Science", "Arts", " Commerce"],
};
// console.log(college.group[1])

let family = {
  abbuAge: 42,
  ammuAge: 38,
};
let Abbu = (family.abbuAge = 45);
// console.log(Abbu)
// console.log(family)

const computer = {
  brand: "lenovo",
  price: 35000,
  processor: "intel",
  ssd: "256gb",
};

const key = Object.keys(computer);
// console.log(key)
const value = Object.values(computer);
// console.log(value)

const profile = {
  name: "Rahim",
  age: "28",
  city: "Dhaka",
};
// const profileKeys = Object.keys(profile)
// const hasName = profileKeys.includes('name')
// console.log(hasName)

if ("name" in profile) {
  // console.log('Email Exists')
}

if (person.hasOwnProperty("name")) {
  // console.log('Email Ache')
}

// for( const key in profile){
//     console.log(key, ':', profile[key])
// }

const keys = Object.keys(profile);

for (const key of keys) {
  //  console.log(key, ':', profile[key])
}

let book = {
  name: "Biology 1st Paper",
  author: "Abul Hasan",
  price: "340 Taka",
};
for (const key in book) {
  // console.log(key, ':',  book[key])
}
const article = {
  title: "Learning JS",
  category: "Progamming",
};

const kis = Object.keys(article);
// console.log(kis.includes('author'))

const laptop2 = {
  brand: "Dell",
  model: "Inspiron",
  price: 45000,
};
for (const keys in laptop2) {
  //  console.log(keys, laptop2[keys])
}

const phone2 = {
  brand: "Samsung",
  model: "S21 Ultra",
  price: 85000,
};
const kies = Object.keys(phone2);

for (const kie of kies) {
  // console.log(kie ,phone2[kie])
}
let bike = {
  brand: "Hero",
  price: 120000,
  model: "Splender",
};

const nums1 = { a: 10, b: 20, c: 30, d: 40 };
let sum1 = 0;
for (const maan in nums1) {
  sum1 = sum1 + nums1[maan];
}
//console.log(sum1)

function juice() {
  // console.log('Here, Take Lemon Juice')
}
juice();
function myRoutine() {
  // console.log('Ghum theke uthe ja ja kori:-')
  // console.log('Namaz E Jai')
  // console.log('Eshe Quran Suni/Pori')
  // console.log('Ishrak Pori')
  // console.log('Khaia Ghum Dei')
}
myRoutine();
function family1() {
  // console.log('Badsha')
  // console.log('Sadia')
  // console.log('Moniza')
  // console.log('Mizan')
}
family1();
function taskDone() {
  // console.log('Namaz')
  // console.log('Breakfast')
  // console.log('Class')
  // console.log('PH Book')
  // console.log('Practice')
}
taskDone();

function greetMe() {
  // console.log('Good Morning! Have a great day!')
}
greetMe();
function introduceMyself() {
  //     console.log('Name : Badsha')
  //     console.log('Age : 20')
  //     console.log('Address : Norshinhopur, Dhaka')
  //     console.log('Contact Number : 01929686694')
  //     console.log("Height : 5'2")
  //     console.log('Favorite Food : Kala Bhuna')
}
introduceMyself();

function doubleIt(number4) {
  const doubled = number4 * 2;
  // console.log(doubled)
}
doubleIt(15);
doubleIt(88);
doubleIt(873);

function square(number) {
  const squared = number * number;
  // console.log(squared)
}
square(4);
square(5);

function add(num1, num2) {
  const sumed = num1 + num2;
  console.log(sumed);
}
// add(2, 3);

function addAll(a, b, c, d, e) {
  const sum = a + b + c + d + e;
  console.log(sum);
}
// addAll(3, 4, 5, 6, 7, 1)

function difference(num1, num2) {
  const diffr = num1 - num2;
  console.log(num1, num2, "difference is:", diffr);
}
const fatherAge = 40;
const sonAge = 20;
// difference(fatherAge,sonAge)

function addNumber(a, b) {
  return a + b;
}
const result = addNumber(4, 5, 6, 7, 8);
// console.log(result)

function addNumbers(a, b) {
  // console.log(arguments);
  return a + b;
}
const results = addNumbers(5, 8, 9, 6);
// console.log(results);

function addNumbers1(a, b) {
  let sum = 0;
  for (const num of arguments) {
    sum += num;
  }
  // console.log(sum)
}
addNumbers1(5, 8, 9, 6);

function sonFatherAge(a, b) {
  sum = a + b;
  return sum;
}
sonFatherAge(40, 21);
// console.log(sum)

function calc(a, b) {
  multi = a * b;
}
calc(20, 15);
// console.log(multi)

function exam_result(a, b, c) {
  Result = a + b + c;
  return Result;
}
exam_result(65, 70, 80);
// console.log(Result)

function findAge(a, b) {
  age = a - b;
}
findAge(2025, 2005);
// console.log(age);

function bornYear(a) {
  requied_years = a + 100;
}
bornYear(2005);
// console.log(requied_years)

function screenTime_period(a, b) {
  const mobileUse = a * b;
  return mobileUse;
}
const result_mobileUse = screenTime_period(4, 30);
// console.log(result_mobileUse)

function add(price1, price2) {
  return price1 + price2;
}

const price1 = add(21, 12);
// console.log(price1)

const potato = 35;
const onion = 62;
const shirt = 500;
const pant = 1250;
function add(price1, price2) {
  return price1 + price2;
}
const bill1 = potato + onion;
const bill2 = shirt + pant;
const total = bill1 + bill2;
// console.log(total)

function isEven(a) {
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
// console.log(isEven(6))

function Num(a) {
  if (a > 10) {
    return true;
  } else {
    return false;
  }
}
// console.log(Num(11))

function num_(a) {
  if (a % 13 === 0) {
    return true;
  } else {
    return false;
  }
}
// console.log(num_(26))

const rice = 30;
const curry = 120;
const drinks = 40;
function add(price1, price2) {
  return price1 + price2;
}
const Bill1 = rice + curry;
const totalBill = Bill1 + drinks;
// console.log(totalBill)

function voting(age) {
  if (age > 18) {
    console.log("Eligible For Voting");
  } else {
    console.log("Not Eligible");
  }
}
// voting(9)

function stringLength(string) {
  console.log(string.length);
}
// stringLength(' This is a sentence which is called as a string')

function evenSizedString(str) {
  // const size= str.length
  // console.log(str, str.length)// size will replace the str.length
  if (str.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
const isEVen = evenSizedString("Dhak")
// console.log(isEVen)



function doubleOrTriple(num, doDouble) {
  if (doDouble === true) {
    // const result = num * 2
    console.log(num*2)
  }
  else {
    // const result = num * 3
    console.log(num*3)
  }
}
// doubleOrTriple(3,true)
// doubleOrTriple(3,false)

function numberOfElements(nums) {
  return nums
}
numberOfElements([12, 45, 67, 67, 56, 45, 67, 5454, 45])
// console.log(nums.length)



function checkArray(nums) {
  if (nums.length % 2 === 0) {
    return true
  }
  else {
    return false
  }
}
const ifEven=checkArray([12,  67, 67, 56, 45, 67, 545,4])
// console.log(ifEven)

function isPassed(name, ifPassed) {
  if (ifPassed === true)
  {
    console.log(name[0])
  }
}
// const ifPassed = isPassed('Raju', true)


function numCheck(num) {
  if (num > 10) {
    console.log(num/10)
  }
  else {
    console.log(num*10)
  }
}
// numCheck(15)

function numsArray(array) {
  let len = array[0]+array[1]
  return len
}
const len=numsArray([12, 54, 34, 67, 432])
// console.log(len)


function names(firstName, secondName) {
  if (firstName.length > secondName.length) {
      return true  
  }
  else {
    return false
  }
}
const namesResult = names('Badsha', 'Masum')
// console.log(namesResult)

function Multi(num1, num2 ) {
  const multipl = num1 * num2
  if (multipl > 120)
  {
    console.log(multipl/2)
  }
  else {
    console.log(multipl)
  }

  return multipl
}
// const multiplResult = Multi(12, 12)


function arraySum(numbers) {
  let sum = 0
  for (let number of numbers) {
    sum += number
  } 
  console.log('Sum of the numbers :',sum)
  return num
}
// const array = arraySum([12, 45, 6, 8, 14])

function arraySum(numbers) {
  let sum = 0
  for (let number of numbers) {
    if (number % 2 === 0) {
      sum += number
    }
    
  } 
  console.log('Sum of the numbers :',sum)
  return num
}
// const array = arraySum([54, 13, 1, 6])

function arraySum(numbers) {
  let sum = 0
  for (let number of numbers) {
    if (number % 2 != 0) {
      sum += number
    }
    
  } 
  console.log('Sum of the numbers :',sum)
  return num
}
// const array = arraySum([5, 15, 8, 7])

function small(number) {

  console.log(Math.min(...number))
  return number
}
// const smallNumber = small([20, 45, 78])

function Age(number) {
  if (number < 18) {
    console.log('Age :', 18)
  }
  else if (number > 45) {
    console.log('Age :', 45 )
  }
  else {
    console.log('Age :', number)
  }
    return number
}
// const age_ = Age(34)



function arraySum(numbers) {
  let sum = 0
  for (let number of numbers) {
    if (number % 4 === 0) {
      sum += number
    }
    
  } 
  console.log('Sum of the numbers :',sum)
  return num
}
// const array = arraySum([2, 4, 5, 7, 8, 32, 45])


 
function numCheck(num) {
  
  if (num < 20) {
     console.log(num*2)
  }
  else {
   console.log(num/20)
  }
}
// numCheck(45)

function arraySum(numbers) {
  let sum = 0
  for (let number of numbers) {
    if (number < 0) {
      sum += number
    }
    
  } 
  console.log('Sum of the numbers :',sum)
  return num
}
// const array = arraySum([2, -4, 5, -7, 8, -32, 45])


function sumArray(numbers) {
  let multipl=1
  for (const number of numbers) {
    if (number % 3 === 0) {
      multipl = multipl * number
    }
  }console.log(multipl)
 return
}
// const multiResult = sumArray([2, 9, 5, 15, 8, 32, 45])

// function inchToFeet(inch) {
//   const feet = inch / 12
//   console.log('Feet :',feet)
//   return feet
// }
// inchToFeet(75)

function inchToFeet2(inch) {
  const feet = inch / 12
  const feetInt = parseInt(feet)

  const inchRemaining = inch % 12
  const result = feetInt + ' ft ' + inchRemaining + ' inch '
  console.log(result)
  return result
}

// const result34 =inchToFeet2(75)


function mileToKilo(mile) {
  const kilo = mile * 1.609
  console.log(kilo)
} 
// mileToKilo(1)

function kiloToMile(kilo) {
  const mile = kilo * 0.621371
  console.log(mile)
}
// kiloToMile(1)

function mileToGoj(mile) {
  const goj = mile * 1760
  return goj
}
const result_mileToGoj = mileToGoj(13)
// console.log(result_mileToGoj)

function kilowattToKilocalori(kilowatt) {
  const kilocalori = kilowatt * 860
  console.log(kilocalori)
}
// kilowattToKilocalori(5)

function hourToSecond(hour) {
  const second = hour * 3600
  console.log(second)
}
// hourToSecond(5)

function sentiToMeter(senti) {
  const meter = senti /100
  console.log(meter)
}
// sentiToMeter(9837)

function leapYear(year) {
  if (year % 400 === 0) {
    return true
  }
  else {
    return false
}
}
const resultleapYear = leapYear(2300)
// console.log(resultleapYear)

function tax(incomeAmount) {
  if (incomeAmount <= 50000) {
    return 10
  }
  else if (incomeAmount >= 50001 && incomeAmount < 100000) {
    return 20
  }
  else if (incomeAmount >= 100001 && incomeAmount < 200000) {
    return 30
  }
  else {
    return 40
  }
}
  const taxAmount=tax(200000)
// console.log(taxAmount)

function deliveryCharge(weight) {
  if (weight < 10) {
    console.log(100 ,'Tk')
  }
  else if (weight >= 10 && weight < 20) {
     console.log(200 ,'Tk')
  }
  else if (weight >= 20 && weight < 50) {
     console.log(1000 ,'Tk')
  }
  else {
    console.log(1000 +(weight -50)* 100, 'Tk')
  }
}
// const delivery_Charge = deliveryCharge(55)

// function leapYearCount(years) {
//   let count = 0
//   for (const year of years) {
//     if (year % 400 === 0 || (year % 100 != 0 && year % 4 === 0)) {
//       count++
//       console.log(count)
//       return count
//     }
//   }
  
// }
// const leap_Year = leapYearCount([2015, 2020, 2024, 2025, 2028, 2040, 2030])

function leapYearCount(years) {
    let count = 0; // Initialize a counter for leap years

    for (const year of years) {
        if ((year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)) {
            count++; // Increment count for each leap year
        }
    }

    console.log(count); // Log the total count (optional)
    return count; // Return the total count
}

// const leapYearsFound = leapYearCount([2015, 2020, 2024, 2025, 2028, 2040, 2030]);


// function avgOfOddds(numbers) {
//   const oddArray = []
//   for (const number of numbers) {
//     if (number % 2 != 0) {
//       oddArray.push(number)
//     }
//   }
//   let sumOfOdds = 0
//   for (const number of oddArray) {
//     sumOfOdds += number
    
//   }
//   const lengthOfOdds = oddArray.length
//   console.log(sumOfOdds /lengthOfOdds)
// }
// const avg_OfOddds = avgOfOddds([42, 13, 58, 65, 81, 96, 7])




// function avgOfOddds(odds) {
//   let oddArray =[]
//   for (const number of odds) {
//     if (number % 2 != 0){
//     oddArray.push(number)
//     }
//     if (oddArray.length === 0) {
//       return 0
//     }
//   }    let sum = 0
//   for (const number of oddArray) {
//     sum+=number
//   }
//   const lenOfOdds = oddArray.length 
//   console.log(sum/lenOfOdds)
// }
// const avg_OfOddds = avgOfOddds([42, , 58, 65, , 96])
// console.log(avg_OfOddds)

function avgOfEvens(evens) {
  let evenArray = []
  for (const number of evens) {
   
    if (number % 2 === 0) {
      evenArray.push(number)
    }
  }
  let sumOfEvens = 0
  for (const num of evenArray) {
 
    sumOfEvens += num
  }
  const evenLength = evenArray.length
  const result = sumOfEvens / evenLength
  // console.log(result)
  return result
}
const result_avgOfEvens=avgOfEvens([12,13,14,15,16,17,18,19,20])
// console.log(result_avgOfEvens)

function multiplOdds(odds) {
  let oddArray =[]
  for (const num of odds) {
    if (num % 2 != 0) {
          oddArray.push(num*2)
    }
  } 
  return oddArray
}
// const multipl_Odds=multiplOdds([12,13,14,15,16,17,18,19,20])
// console.log(multipl_Odds)

function countOddNumbers(numbers) {
  let oddArray = []
  for (const num of numbers) {
    if (num % 2 != 0) {
      return "Odd numbers found"
    }
    else {
      return "No odd numbes found"
    
    }
  }
}
// const count_OddNumbers=countOddNumbers([12,14,16,18,20])
// console.log( count_OddNumbers)

function oddNumberAvg(numbers) {
  let oddArray = []
  for (const num of numbers) {
    if (num % 2 != 0) {
     oddArray.push(num)
    }
  }
  let size = oddArray.length
  let sum = 0
  for (const num of oddArray) {
    sum+=num
  }
   const avg = sum / size
    return avg
   

}// const odd=oddNumberAvg([12,13,14,15,16,17,18,19,20])
// console.log(odd_NumberAvg)

function oddMinus(odds) {
  let oddArray =[]
  for (const num of odds) {
    if (num % 2 != 0) {
          oddArray.push(num-1)
    }
  } 
  return oddArray
}
// const odd_Minus=oddMinus([12,13,14,15,16,17,18,19,20])
// console.log(odd_Minus)

const students = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul'];
const numbs = [1, 5, 61, 5, 87, 7, 5, 81, 61];
const unique = []


function NoDuplicate(students) {
  for (const item of students) {
    if (!unique.includes(item)) {
      unique.push(item)
    }
  }
  return unique
}
// const No_Duplicate = NoDuplicate(students)
// console.log(No_Duplicate)

let a = 2
let b = 3
let temp = a
// console.log(a,b)

a = b
b = temp
// console.log(a,b)


const numbrs = [23, 4, 23, 12, 56];
numbrs[1] = 55;
// console.log(numbrs);


const nmbers = [23, 4, 23, 12, 56];
nmbers[1] = 55;
nmbers.push(8, 9, 65);
// console.log(nmbers);

function add(num1, num2 = 0) {
  const result = num1 + num2
  // console.log(result, num1, num2)
  return result
}
// const suum = add(5)
// console.log(suum)

function defNumber(num1, num2,num3 = 0) {
  const result = num1 + num2 + num3
  // console.log(num1 ,num2 , num3, result)
  return result
}
// const def_Number = defNumber(5, 9)
// console.log(def_Number)


function Profile(name ='anonymous', salary = 0 ) {
  // console.log(name, salary)
}

Profile('sadiya', 30000)

function getSquare(number) {
  if (typeof number != 'number') {
    return  number =1
  }

  const result = number ** 2
  return result
}
// const get_Square = getSquare('badsha')
// console.log(get_Square)

// function getPrice(name ="Unknown product", price=1) {
//   return n
// }

function favBook(arr=['JS BOOK']) {
  let books= []
  for (const book of arr) {
    books.push(book)
  } return books 
}

// const fav_Book = favBook()
// console.log(fav_Book)

function getObject(price = 10, quantity = 1) {
  const totalPrice = price * quantity
  return totalPrice
}
// const get_Object = getObject()
// console.log(get_Object)\

function arrayDouble(arr = [5,10,15]) {
  let array = []
  for (const element of arr) {
    array.push( element*2)
  }
 return array
}
// const array_Double = arrayDouble([52,120,152])
// console.log(array_Double)

const name = 'Rofiq'
const age__ = 30
// console.log(`Name :${name}, Age:${age__}`)

function test() {
  const a = 10
  const b = 20
  const math =`the sum of ${a} and ${b} is ${a+b}`
  return math
}
const Test = test()
//console.log(Test)

const email = `Jhon Cena
cena naki ochena
mair khaile bachena`

const getName = function(){
return "Nadia";
}
const message = `Na Bolle Sadia, ase amar ${getName()}!`;
// console.log(message);

const age___ = 12
const status = `You are ${age___>=18? "Adult ": "Minor"}`
// console.log(status)

const user = {
  name: "Tariq",
  age: 25
}
  const info =`Name: ${user.name}, Age: ${user.age}`

// console.log(info)

function fruits() {
  const fruits = ['Apple', 'Banana', 'Mango']
  const list = `My Favorit fruits are : ${fruits.join(", ")}`
  // console.log(list) 
}
fruits()

function html() {
  const title = "Welcome"
  const body = 'This is a dynamic template'
  const html =
    `<div>
      <h1>${title}</h1>
      <p>${body}</p>
    </div>`
  console.log(html)
}
// html()

function circleRadius() {
  const radius = 5
  const area = `Circle area is ${Math.round(Math.PI * radius ** 2)}`
  console.log(area)
} 
// circleRadius()

const greet = function (name) {
  return `Hello, ${name}` 
}
console.log(greet("Nadia"))