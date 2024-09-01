function extractTextFromQuotes(str) {
  const match = str.match(/[\u2018](.*?)[\u2019]/);
  return match ? match[1] : null;
}

console.log(extractTextFromQuotes("‘Rudy’ With Bill Simmons and Kyle Brandt"));
console.log(extractTextFromQuotes("'Rudy' With Bill Simmons and Kyle Brandt"));
console.log(extractTextFromQuotes("'Greg' Tracy"));
console.log(extractTextFromQuotes("'Greg' Fred Tracy"));
