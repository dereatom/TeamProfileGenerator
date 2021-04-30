const Intern = require("../lib/Intern");

test("can set school via constructor", () => {
    const testValue= "VCU";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);

});
test("can get school via getSchool()", () => {
    const testValue = "VCU";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);

});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Foo", 1, "test@test.com", "VCU");
    expect(e.getRole()).toBe(testValue);
  });
