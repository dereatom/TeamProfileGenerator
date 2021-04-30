const Manager = require("../lib/Manager");

test("can set via constructor argument", () => {
    const testValue=101;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.getRole()).toBe("Manager");
     
})
test("getRole() shold return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.getRole()).toBe(testValue);
})
test("Can get office number via getOffice()", () => {
    const testValue = 101;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});

