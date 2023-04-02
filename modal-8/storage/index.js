import storage from "./storage.js";

const { save, load, remove } = storage;

save("name", "Vladislav Gulida");
save("age", "28");
save("marritel status", "married");
remove("marride");
save("hobby", ["sport", "It", "English"]);

console.log(load("hobby"));
console.log(load("hobby"));

console.log(localStorage);
