const validator =require('../validator');
describe("A password validator that checks if password exists", function(){
it("checks if password exists",()=>{
    expect(validator.check1()).toBe(true);
});
});
describe("Check password length", function(){
it("checks if password is 8 characters long",()=>{
    expect(validator.check2()).toBe(true);
});
});
describe("Check for uppercase, lowercase, number and a special character", function(){
it("Search for uppercase",()=>{
expect(validator.check3()).toBe(true);
});
it("Search for lowercase",()=>{
    expect(validator.check4()).toBe(true);
})
it("Search for number",()=>{
    expect(validator.check5(true))
})
it("search for special character",()=>{
    expect(validator.check6()).toBe(true);
})
});
