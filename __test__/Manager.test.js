const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Constructor values", () => {
    it("It should have all manager properties", () => {
      //Arrange
      const newManager = new Manager("Godfrey", 1, "bongomin@uw.edu", 100);

      //Assert
      expect(newManager.name).toBe("Godfrey");
      expect(newManager.id).toBe(1);
      expect(newManager.email).toBe("bongomin@uw.edu");
      expect(newManager.officeNumber).toBe(100);
    });
  });

  describe("getName()", () => {
    it("Should return a name when getName() is called", () => {
      //Arrange
      const newManager = new Manager("Godfrey", 1, "bongomin@uw.edu", 100);

      //act
      //Assert
      expect(newManager.name).toBe("Godfrey");
    });
  });

  describe("getId()", () => {
    it("Should return an Id when getId() is called", () => {
      //Arrange
      const newManager = new Manager("Godfrey", 1, "bongomin@uw.edu", 100);

      //Assert
      expect(newManager.id).toBe(1);
    });
  });

  describe("getEmail()", () => {
    it("Should return an email when getEmail() is called", () => {
      //Arrange
      const newManager = new Manager("Godfrey", 1, "bongomin@uw.edu", 100);

      //Assert
      expect(newManager.email).toBe("bongomin@uw.edu");
    });
  });

  describe("getRole()", () => {
    it("Should return a role when getRole() is called", () => {
      //Arrange
      const newManager = new Manager("Godfrey", 1, "bongomin@uw.edu", 100);
      const role = "Manager";

      //Assert
      expect(newManager.getRole()).toBe(role);
    });
  });
});
