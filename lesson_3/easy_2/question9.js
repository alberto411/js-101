// If we have a 40 character-wide table of Flintstone family members,
// how do we center this title above the table using spaces?

let title = "Flintstone Family Members";

let padding = Math.floor((40 - title.length) / 2);

console.log(title.padStart(padding + title.length));
