const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let to_watch = {
  1: "Wake Up Sid",
  2: "Love Aaj Kal",
  3: "Rockstar",
  4: "Zindagi Na Milegi Dobara"
};

let watched = {};

function suggestMovie() {
  const values = Object.values(to_watch);
  let movie = values[Math.floor(Math.random() * values.length)];
  console.log(`\nHow about this? 🍿: ${movie}`);
}

function addMovie() {
  rl.question("Enter movie name: ", (name) => {
    let newKey = Object.keys(to_watch).length + 1;
    to_watch[newKey] = name;
    console.log(`${name} added ✅`);
    menu();
  });
}

function removeMovie() {
  console.log("\nYour list:");
  for (let key in to_watch) {
    console.log(`${key}: ${to_watch[key]}`);
  }

  rl.question("Enter number to remove: ", (num) => {
    if (to_watch[num]) {
      console.log(`${to_watch[num]} removed ❌`);
      delete to_watch[num];
    } else {
      console.log("Invalid choice 😅");
    }
    menu();
  });
}

function markAsWatched() {
  console.log("\nTo-watch list:");
  for (let key in to_watch) {
    console.log(`${key}: ${to_watch[key]}`);
  }

  rl.question("Enter number watched: ", (num) => {
    if (to_watch[num]) {
      let movie = to_watch[num];
      delete to_watch[num];

      let newKey = Object.keys(watched).length + 1;
      watched[newKey] = movie;

      console.log(`${movie} moved to watched 🎉`);
    } else {
      console.log("Invalid choice 😅");
    }
    menu();
  });
}

function menu() {
  console.log(`
1. Suggest movie
2. Add movie
3. Remove movie
4. Mark as watched
5. Exit
`);

  rl.question("Enter choice: ", (choice) => {
    switch (choice) {
      case "1":
        suggestMovie();
        menu();
        break;
      case "2":
        addMovie();
        break;
      case "3":
        removeMovie();
        break;
      case "4":
        markAsWatched();
        break;
      case "5":
        console.log("Goodbye 💕");
        rl.close();
        break;
      default:
        console.log("Invalid 😅");
        menu();
    }
  });
}

menu();