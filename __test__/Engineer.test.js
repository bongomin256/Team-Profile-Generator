const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Constructor values", () => {
    it("It should have all Engineer constructor properties and values", () => {
      //Arrange
      const engineer = new Engineer(
        "Godfrey",
        1,
        "bongomin@uw.edu",
        "https://github.com/bongomin256"
      );

      //Assert
      expect(engineer.name).toBe("Godfrey");
      expect(engineer.id).toBe(1);
      expect(engineer.email).toBe("bongomin@uw.edu");
      expect(engineer.github).toBe("https://github.com/bongomin256");
    });
  });

  describe("getName()", () => {
    it("Should return a name when getName() is called", () => {
      //Arrange
      const engineer = new Engineer(
        "Godfrey",
        1,
        "bongomin@uw.edu",
        "https://github.com/bongomin256"
      );

      //Assert
      expect(engineer.name).toBe("Godfrey");
    });
  });

  describe("getId()", () => {
    it("Should return an Id when getId() is called", () => {
      //Arrange
      const engineer = new Engineer(
        "Godfrey",
        1,
        "bongomin@uw.edu",
        "https://github.com/bongomin256"
      );

      //Assert
      expect(engineer.id).toBe(1);
    });
  });

  describe("getEmail()", () => {
    it("Should return an email when getEmail() is called", () => {
      //Arrange
      const engineer = new Engineer(
        "Godfrey",
        1,
        "bongomin@uw.edu",
        "https://github.com/bongomin256"
      );

      //Assert
      expect(engineer.email).toBe("bongomin@uw.edu");
    });
  });

  describe("getGitHub()", () => {
    it("Should return Github profile url when getGithub() is called", () => {
      //Arrange
      const engineer = new Engineer(
        "Godfrey",
        1,
        "bongomin@uw.edu",
        "https://github.com/bongomin256"
      );

      //Assert
      expect(engineer.getGitHub()).toBe("https://github.com/bongomin256");
    });
  });

  describe("getRole()", () => {
    it("Should return a role when getRole() is called", () => {
      //Arrange
      const engineer = new Engineer(
        "Godfrey",
        1,
        "bongomin@uw.edu",
        "https://github.com/bongomin256"
      );
      const role = "Engineer";

      //Assert
      expect(engineer.getRole()).toBe(role);
    });
  });
});
