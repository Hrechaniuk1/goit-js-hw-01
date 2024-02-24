// let log = prompt("write your login")
// let pass

// if (log === "Admin") {
//     pass = prompt("your password")
//     if (pass === "mood") {
//         alert("hello my boy")
//     }
//     else if ((pass !== "mood") && (pass.length > 0)) {
//         alert("its not you")
//     }
//     else {
//         alert("spoon")
//     }
// }
// else if (log !== "Admin") {
//     alert("oops")
// }
// else {
//     alert("Spoon")
// }

// task 2

// let workDays = 0

// alert(workDays ?? 10)

// task 3

// let total = 0
// while (total >= 0 || total <= 0) {
//     let ask = +prompt("let a number")
//     if (!ask) break;
    
//     total += ask
// }

// console.log(total)

// task 4
// for (let i = 0; i <= 10; i += 1) {
//     if ((i % 2 === 0)&&(i>0)) {
//       console.log(i)
//   }
// }

// task 5
// let i = 0
// while (i < 3) {
//     console.log(`number ${i}`)
//     i += 1
// }

//  task 6
// let userNumber = 0

// while (userNumber < 100) {
//     userNumber = prompt("Get a number")
//     if (!userNumber) break;
// }

// alert(userNumber)

// task 7
// let n = 10
// for (let i = 1; i < n; i += 1){
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
// }

// task 8
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Ви згодні?",
//   function() { alert("Ви погодились."); },
//   function() { alert("Ви скасували виконання."); }
// );

// const ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//   else no();
// }

// ask( "are u agree?", () => alert("u agree"), () => alert("u don't"))

// task 9
// Создайте объект "студент", который будет содержать свойства "имя", "возраст" и "средний балл".Добавьте метод для вычисления статуса студента(хорошист, отличник и т.д.) на основе его среднего балла.

// const students = {
//     student: [
//         { name: "Alex", age: 23, score: 78 },
//         { name: "Alex", age: 23, score: 40 },
//         { name: "Alex", age: 23, score: 65 },
//         { name: "Alex", age: 23, score: 97 },
//         {name: "Alex", age: 23, score: 34 },
//     ],
//     getMidScore() {
//         let total = 0;
//         students.student.forEach((member) => {
//             total += member.score
//         })
//         return total / this.student.length
//         }
//     }


// console.log(students.getMidScore())

// task 10
// 3. Создайте объект "калькулятор", который будет иметь свойства "число1" и "число2" , а также методы "сложить", "вычесть", "умножить" и "разделить". Продемонстрируйте работу каждого метода.

// const calc = {
//     numbers: { number1: 0, number2: 0, },
//     getSum() {
//         return this.numbers.number1 + this.numbers.number2
//     },
//     getMult() {
//         return this.numbers.number1 * this.numbers.number2
//     },
//     getDis() {
//         return this.numbers.number1 - this.numbers.number2
//     },
//     getDiv() {
//         return this.numbers.number1 / this.numbers.number2    },
// }

// calc.numbers.number1 = 50
// calc.numbers.number2 = 10
// console.log(calc.getSum())
// console.log(calc.getDiv())
// console.log(calc.getDis())
// console.log(calc.getDiv())

// 2. Создайте объект "calculator" со свойством "total" равным 0. Добавьте методы "add", "subtract" и "multiply", которые будут изменять значение свойства "total" соответствующим образом. Например, метод "add(5)" должен добавить 5 к текущему значению "total".

// const calcReal = {
//     total: 0,
//     getSum(num1, num2) {
//        return this.total = num1 + num2
//     },
//     getDis(num1, num2) {
//        return this.total = num1 - num2
//     },
//     getMult(num1, num2) {
//        return this.total = num1 * num2
//     },
//     getDiv(num1, num2) {
      
//     return  this.total = num1 / num2
//     }
// }

// console.log(calcReal.getSum(10, 12))
// console.log(calcReal.getMult(10, 12))
// console.log(calcReal.getDis(10, 12))
// console.log(calcReal.getDiv(10, 12))

// task 11

// 4. Создайте объект "покупка", который будет содержать свойства "название товара", "количество" и "цена за единицу". Добавьте метод для вычисления общей стоимости покупки (количество * цена за единицу).

// const some = {
//     things: [
//         { name: "bag", amount: 54, price: 2300, },
//         { name: "plate", amount: 34, price: 230, },
//         { name: "bat", amount: 15, price: 600, },
//         { name: "ball", amount: 4, price: 250, },
//         { name: "table", amount: 23, price: 3440,},
//     ],
//     getFullSum() {
//         let total = 0
//         some.things.forEach((thing) => total += thing.amount * thing.price)
//         return total
//     },
// }

// console.log(some.getFullSum())

// some.things.push({ name: "ha", amount: 3, price: 40000, })
// console.log(some.getFullSum())


// task 12

// 5. Создайте объект "пользователь", который будет содержать свойства "имя", "возраст", "электронная почта" и метод "приветствие", выводящий на экран приветствие с именем пользователя.

// const user = {
//     oneUser: { name: "", age: 0, email: "", },
//     getHello() {
//         console.log(`Welcome dear ${this.oneUser.name}`)
//     }
// }

// console.log(user.getHello())

// user.oneUser.name = "Alex"
// user.oneUser.age = 28
// user.oneUser.email = "No"

// console.log(user.getHello())

// task 13
// Создайте объект "shoppingCart" со свойством "items", которое будет содержать массив покупок. Добавьте методы "addItem" и "removeItem", которые будут добавлять и удалять элементы из массива "items".

// const trolley = {
//     basketList: [],
//     addMore() {
//         trolley.basketList.push(...arguments)
//         return trolley.basketList
//     }
// }

// console.log(trolley.addMore("bag", "ga", "table"))

// task 14
// 5. Создайте объект "book" со свойствами "title", "author" и "year". Добавьте метод "getSummary", который будет выводить краткое описание книги в формате "<название_книги> была написана <автор> в <год>".

// const library = {
//     books: [
//         { author: "alex", title: "moonligth", year: 1994, },
//         { author: "alex", title: "sunlight", year: 1967, },
//         { author: "alex", title: "great get", year: 2005, },
//         { author: "alex", title: "yea", year: 2004, },
//         { author: "a", title: "always-on", year: 2004, },
//         { author: "tang", title: "might be", year: 2001, },
             
        
//     ],
//     getSummary(bookTitle) {
//         for (const book of this.books) {
//             if (book.title === bookTitle) {
//                return `The book ${bookTitle} was written in ${book.year}`
//            }
//        }
//     }
// }

// console.log(library.getSummary("always-on"))


// const library = {
//     books: [
//         { author: "alex", title: "moonligth", year: 1994, },
//         { author: "alex", title: "sunlight", year: 1967, },
//         { author: "alex", title: "great get", year: 2005, },
//         { author: "alex", title: "yea", year: 2004, },
//         { author: "a", title: "always-on", year: 2004, },
//         { author: "tang", title: "might be", year: 2001, },
             
        
//     ],
//     getSummary(authorOf) {
//         return `Author ${authorOf} has written next books ${this.books.filter((book) => book.author === authorOf).map((book) => book.title).join(" ")}`
        
//        }
//     }


// console.log(library.getSummary("alex"))

// task 15

// const users = {
//     userLoginList: [
//         { name: "", log: "LAp", lastName: "99", isOnline: true, },
//         { name: "Alex", log: "", lastName: "", isOnline: false },
//         { name: "", log: "", lastName: "Mayf", isOnline: true,},
//         { name: "", log: "72", lastName: "99", isOnline: true},
//         { name: "", log: "ye", lastName: "", isOnline: false},
//         { name: "", log: "one", lastName: "99", isOnline: true },
        
//     ],
//     getHello() {
//         const userOnLine = []
//         for (const user of this.userLoginList) {
//             for (const key in user) {
//                 if ((user[key].length > 0)&&(user.isOnline)) {
//                     userOnLine.push(user[key])
//                     break;
//                 }
//             }
//         }
//         return `Users ${userOnLine.join(" ")} is online right now`
//     }
// }

// console.log(users.getHello())

// task 16
// const user = {
//     loginlist: [
//         { login: "he", isOnL: false, status: "user",},
//         { login: "he", isOnL: false, status: "admin",},
//         { login: "me", isOnL: true, status: "admin", },
//         { login: "he", isOnL: true, status: "admin",},
//         {login: "he", isOnL: true, status: "admin",},
//     ],

//     getFirstOnLine() {
//         let messForAdm = ""
//       hehe:  for (const log of this.loginlist) {
//             for (const key in log) {
//                 if ((log[key] === true) && (log.status === "admin")) {
//                     messForAdm = `since u are here dear ${log.login} you'll do this`
//                     break hehe

//                 }
//             }
//         }
//         return messForAdm
//     }
// }

// console.log(user.getFirstOnLine())

// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function () {
//         alert(this.value += Number(prompt("Get number")));
//     }
// }

// let newOne = new Accumulator(10)
// newOne.read()

// task 17

// function readNumber() {
//     let a

//     do { a = +prompt("number") } while (isNaN(a)) {
//         if (a === "" || a === null) {
//            console.log(null)
//        }
//     }
// console.log(Number(a))
// }

// readNumber()

// task 18
// let nameA = "alex"
// function toUp(name) {
//     let newOne = name.split("")
//     newOne[0] = newOne[0].toUpperCase()
//     nameA = newOne.join("")
//     console.log(nameA)
    
// }

// toUp(nameA)

// task 19
// function checkSpam(str) {
//     const words = ["xxx", "sail", "viagra"]
//     for (const word of words) {
//         if (str.includes(word)) {
//             console.log("This is spam")
//         } else {
// console.log("new message")
//         }
//     }
// }

// checkSpam("I am about to give to you a viagra")

// task 20
// function truncate(str, maxlength) {
//     if (str.length > maxlength) {
//         str = str.slice(0, maxlength )
//         console.log(str)
//     }
// }

// truncate("i am so happy for u", 10)

// // task 21
// let price = "$120"
// function extractCurrencyValue(str) {
//     let newPrice = str.split("")
//     newPrice.splice(0, 1)
//     price = newPrice.join("")
    
//     console.log(price)
     
// }
 
// extractCurrencyValue(price)


// task 22
// const knightIsAwake = true;
// function canExecuteFastAttack(lala) {
//     if (!lala) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(canExecuteFastAttack(knightIsAwake))

// task 23
// const knightIsAwake = false;
// const archerIsAwake = false;
// const prisonerIsAwake = true;

// function canSpy(a, b, c) {
//     if (!a & !b & c) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake))

// task 24
// const knightIsAwake = false;
// const archerIsAwake = false;
// const prisonerIsAwake = true;
// const petDogIsPresent = false;

// function canIHelp(a, b, c, d) {
//     if (!a & !b & c & !d) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(canIHelp(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent))

// task 25
// const autoShop = {
//     auto: {
//         age: 0,
//         brand: "volvo",
//         model: "cd4"
//     },

//     setAge(currentUear) {
//         const autoYear = 2016;
//         this.auto.age = currentUear - autoYear
//     },

// }

// autoShop.setAge(2024)

// console.log(autoShop.auto.age)

// task 26
// const phoneBook = {
//     numbers: {
//         carl: 545782642,
//         mat: 7845164,
//         andrey: 214512754,
//         tanya: 128454124,
//     },

//     addContact(name, number) {
//         this.numbers[name] = number
//     },

//     delContact(number) {
//         // for (let key in this.numbers) {
//         //     if (this.numbers[key] === number) {
//         //         delete this.numbers[key]
//         //     }
//         // }
//         for (let num of Object.keys(this.numbers)) {
//             if (this.numbers[num] === number) {
//         delete this.numbers[num]
//     }
// }


//     }
// }

// phoneBook.addContact("ALex", 7874558000)

// console.log(phoneBook.numbers)

// phoneBook.delContact(7845164)


// console.log(phoneBook.numbers)

// task 27
// const arr = [1, 2, 3, 4, 5];

// let sum = arr.reduce((total, element) => total += element, 0)

// console.log(sum)

// let sortDown = arr.toSorted((a, b) => b - a)

// console.log(sortDown)

// arr.splice(2, 1, 22)

// console.log(arr)

// let newOne = arr.filter((a) => a <= 5).toSorted((a, b) => b - a)

// console.log(newOne)

// console.log(arr.every((a) => a >= 0))
// console.log(arr.some((a) => a === 4))

// task 28
// const arr = [1, 2, 3, 4, 5];

// let filtArr = arr.filter((a) => a % 2 === 0)

// console.log(filtArr)

// let newArr = arr.map((a) => a * a)
// console.log(newArr)

// let rigthNum = arr.find((a) => a > 3)

// console.log(rigthNum)

// task 29

// class Rectangle {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//     }

//     getPer() {
//         return (this.width * 2) + (this.height * 2)
//     }

//     getSum() {
//         return this.width * this.height
//     }

// }

// const rect1 = new Rectangle(15, 20)
// console.log(rect1)
// console.log(rect1.getPer())
// console.log(rect1.getSum())

// task 30
// class Worker {
//     constructor(name, lastName, age, salary) {
//         this.name = name
//         this.lastName = lastName
//         this.age = age
//         this.salary = salary
//     }

//     getInfo() {
//        return this
//     }

//     changeLastName(newLastName) {
//         this.lastName = newLastName
//     }

//     setSalary(newAmount) {
//         this.salary = newAmount
//     }



// }
// // 

// class Manager extends Worker {
//     constructor(name, lastName, age, salary, position, department) {
//         super(name, lastName, age, salary);

//         this.position = position;
//         this.department = department;
//     }

//     setPosition(pos) {
//         this.position = pos
//     }

//     setDepart(dep) {
//         this.department = dep
//     }
// }

// const Artur = new Manager("Artur", "Vasko", 23, 34000, "art", "news")

// Artur.setPosition("Tech Dir")
// console.log(Artur.salary)
// Artur.setSalary(54000)
// console.log(Artur.salary)
// console.log(Artur.department)
// Artur.setDepart("TechDep")
// console.log(Artur.department)

// // 

// class Director extends Worker {
//     constructor(name, lastName, age, salary, period) {
//         super(name, lastName, age, salary);
//         this.period = period;
//     }

//     setPeriod(currentYear) {
//         let startW = 2024
//         const timeW = 3
//         if ((currentYear - startW) <= timeW) {
//             this.period = timeW - (currentYear - startW)
//         } else {
//             delete this.period
//         }

//     }
// }

// const Angie = new Director("Angie", "Mops", 34, 9000, 2)
// Angie.setPeriod(2025)
// console.log(Angie.period)
// console.log(Angie.salary)
// Angie.setSalary(49000)
// console.log(Angie.salary)
