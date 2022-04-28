const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Constructor value", () => {
    it("should give us the constructor property value", () => {
      //Arrange
      const newEmployee = new Employee("Godfrey", 1, "bongomin@uw.edu");

      //Assert
      expect(newEmployee.name).toBe("Godfrey");
      expect(newEmployee.id).toBe(1);
      expect(newEmployee.email).toBe("bongomin@uw.edu");
    });
  });

  describe("getName()", () => {
    it("should give us a name from getName() method", () => {
      //Arrange
      const newEmployee = new Employee("Godfrey", 1, "bongomin@uw.edu");

      //Assert
      expect(newEmployee.getName()).toBe("Godfrey");
    });
  });

  describe("getId()", () => {
    it("should give us an id from getId() method", () => {
      //Arrange
      const newEmployee = new Employee("Godfrey", 1, "bongomin@uw.edu");
      //act

      //Assert
      expect(newEmployee.getId()).toBe(1);
    });
  });

  describe("getEmail()", () => {
    it("should give us an email from getEmail() method", () => {
      //Arrange
      const newEmployee = new Employee("Godfrey", 1, "bongomin@uw.edu");

      //Assert
      expect(newEmployee.getEmail()).toBe("bongomin@uw.edu");
    });
  });

  describe("getRole()", () => {
    it("should give us a role from getRole() method", () => {
      //Arrange
      const newEmployee = new Employee("Godfrey", 1, "bongomin@uw.edu");
      const role = "Employee";

      //Assert
      expect(newEmployee.getRole()).toBe(role);
    });
  });
});
