// Part 1: Variables, Data Types, Conditionals

// Event listener for age check
document.getElementById("checkAgeBtn").addEventListener("click", function () {
  let age = Number(document.getElementById("ageInput").value);

  if (age >= 18) {
    document.getElementById("ageResult").innerText = "✅ You are an adult.";
  } else {
    document.getElementById("ageResult").innerText = "❌ You are a minor.";
  }
});

// Part 2: Functions (Reusable Logic)

// Function to calculate sum of numbers in an array
function calculateSum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

// Function to format a string (capitalize first letter)
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Part 3: Loops

const numbers = [10, 20, 30, 40, 50];

document.getElementById("showNumbersBtn").addEventListener("click", function () {
  let list = document.getElementById("numbersList");
  list.innerHTML = ""; // clear previous items

  // Example 1: for loop
  for (let i = 0; i < numbers.length; i++) {
    let li = document.createElement("li");
    li.textContent = "Index " + i + ": " + numbers[i];
    list.appendChild(li);
  }

  // Example 2: using forEach
  let total = 0;
  numbers.forEach(num => {
    total += num;
  });

  let sumItem = document.createElement("li");
  sumItem.textContent = "Total Sum: " + total;
  list.appendChild(sumItem);
});

// Part 4: DOM Manipulation

// 1. Change text dynamically
document.getElementById("title").innerText = capitalize("javascript fundamentals demo");

// 2. Toggle class on click
document.getElementById("toggleBtn").addEventListener("click", function () {
  document.getElementById("title").classList.toggle("highlight");
});

// 3. Create a new element dynamically
let newPara = document.createElement("p");
newPara.textContent = "This paragraph was added using JavaScript!";
document.body.appendChild(newPara);
