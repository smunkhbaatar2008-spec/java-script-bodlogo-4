// const laptop = {
//     brand : "lenovo" ,
//     ram : 16 ,
//     storage : 512 ,
// }
// console.log(Object.keys(laptop));

// const weather = {
//     city: "Дархан" ,
//     temperature : 12 ,
//     isSunny : true ,
// }
// console.log(Object.values(weather));

// const phone = {
//     brand :"Samsung",
//     model :"Galaxy",
//     storage :256 ,
//     color : "Хар" ,
// }
// console.log(Object.keys(phone).length);

// const settings = {}
// if (Object.keys(settings).length <= 0){
//     console.log("Тохиргоо оруулаагүй");
// }
// else {
//     console.log("Тохиргоо оруулсан");
// }

// const sizes = ["S" , "M" , "L"]
// console.log(sizes.indexOf("XL"));

// const steps = ["Эхлэл", "Дунд", "Төгсгөл"]
// console.log(steps.reverse());

// const tags = "спорт,хөгжим,аялал"
// console.log(tags.split(","));

// const playlist = {
//     name :  "Өглөө" ,
//     songs : ["Нар", "Салхи", "Бороо"]
// }
// console.log(`${playlist.name} нэртэй жагсаалтад ${playlist.songs.length} дуу байна. Хоёр дахь дуу нь ${playlist.songs[1]}`);

// const pets = [
//     { name : "Банхар" , type : "Нохой"} ,
//     { name: "Мими" , type : "Муур"}
// ]
// console.log(`Нэр: ${pets[1].name} , төрөл: ${pets[1].type}`);

// const classroom = {
//     name : "10A" ,
//     teacher : {
//         name : "Оюун" ,
//         subject : "Математик"
//     }
// }
// console.log(`${classroom.name} ангийн багш ${classroom.teacher.name}. Заадаг хичээл: ${classroom.teacher.subject}`);

// const store = {
//   branches: [
//     { name: "Төв", hours: ["09:00", "18:00"] },
//     { name: "Баруун", hours: ["10:00", "20:00"] },
//   ],
// };
// console.log(`${store.branches[1].name} салбар ${store.branches[1].hours[1]} цагт хаана`);

// const user = {
//     email : "anu@example.com" ,
//     pass : "pass123" ,
//     isBloked : false ,
// }
// const enteredEmail = "anu@example.com" 
// const enteredPassword = "pass123"
// if (user.isBloked === true) {
//     console.log("Хандах эрх хаагдсан");
// }
// else if (user.isBloked === false && user.email === enteredEmail && user.pass === enteredPassword) {
//     console.log("Амжилттай нэвтэрлээ");
// }
// else {
//     console.log("И-мэйл эсвэл нууц үг буруу");
// }

// const user = {
//     role : "editor" ,
//     isActive : true ,
// }
// if (user.isActive === false ) {
//     console.log("Эрх идэвхгүй");
// }
// else if (user.role === "admin") {
//     console.log("Бүх мэдээллийг удирдана");
// }
// else if (user.role === "editor") {
//     console.log("Мэдээлэл засна");
// }
// else {
//     console.log("Зөвхөн мэдээлэл үзнэ" );
// }

// const visitor = {
//     age : 16 ,
//     isStudent : true 
// };
// const Price = 12000 ;
// if (visitor.isStudent === true && visitor.age < 12) {
//     visitor.tiketPrice = Price * 0.5 ;
// }
// else if (visitor.isStudent === true && visitor.age >= 12) {
//     visitor.tiketPrice = Price * 0.75;
// }
// else {
//    visitor.tiketPrice = Price
// }
// console.log(visitor.tiketPrice);

// const order = {
//     subtotal : 49000 ,
//     coupon : "SAVE10" ,
//     couponUsed : false
// }
// if (order.couponUsed === true) {
//     console.log("Купон ашиглагдсан");
// }
// else if (order.couponUsed === false && order.coupon === "SAVE10" && order.subtotal >= 50000 ) {
//      console.log(order.subtotal * 0.9);
//      console.log(order.couponUsed = true);
// }
// else {
//     console.log("Купон хэрэглэх боломжгүй");
// }

// const member = {
//     name : "Номин" ,
//     borrowedBooks : ["Атлас", "Нууц арал"],
//     hasOverdue : false 
// }
// if (member.hasOverdue === true) {
//     console.log("дахин ном зээлүүлэхгүй");
// }
// else if (member.hasOverdue === false && member.borrowedBooks.length < 3) {
//     member.borrowedBooks.push("Оддын тухай")
//     console.log(member.borrowedBooks);
// }
// else {
//     console.log("Зээлэх номын хязгаарт хүрсэн");
// }

// const seats = ["Сул", "Захиалсан", "Сул"]
// const selectedIndex = 2;
// if (selectedIndex > seats.length -1) {
//     console.log("Суудлын дугаар буруу");
// }
// else if (seats[selectedIndex] === "Сул") {
//     seats[selectedIndex] = "Захиалсан"
//     console.log(seats);
// }
// else {
//     console.log("Энэ суудал захиалгатай");
// }

