const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Constructor values", () => {
    it("It should have all Intern properties", () => {
      //Arrange
      const intern = new Intern(
        "Godfrey",
        1,
        "bongomin@uw.edu",
        "University of Washington"
      );

      //Assert
      expect(intern.name).toBe("Godfrey");
      expect(intern.id).toBe(1);
      expect(intern.email).toBe("bongomin@uw.edu");
      expect(intern.school).toBe("University of Washington");
    });
  });

  describe("getName()", () => {
    it("Should return a name when getName() is called", () => {
      //Arrange
      const intern = new Intern(
        "Godfrey",
        1,
        "bongomin@uw.edu",
        "University of Washington"
      );

      //Assert
      expect(intern.name).toBe("Godfrey");
    });
  });

  describe("getId()", () => {
    it("Should return an Id when getId() is called", () => {
      //Arrange
      const intern = new Intern(
        "Godfrey",
        1,
        "bongomin@uw.edu",
        "University of Washington"
      );

      //Assert
      expect(intern.id).toBe(1);
    });
  });

  describe("getEmail()", () => {
    it("Should return an email when getEmail() is called", () => {
      //Arrange
      const intern = new Intern(
        "Godfrey",
        1,
        "bongomin@uw.edu",
        "University of Washington"
      );

      //Assert
      expect(intern.email).toBe("bongomin@uw.edu");
    });
  });

  describe("getSchool()", () => {
    it("Should return Github profile url when getGithub() is called", () => {
      //Arrange
      const intern = new Intern(
        "Godfrey",
        1,
        "bongomin@uw.edu",
        "University of Washington"
      );

      //Assert
      expect(intern.getSchool()).toBe("University of Washington");
    });
  });

  describe("getRole()", () => {
    it("Should return a role when getRole() is called", () => {
      //Arrange
      const intern = new Intern(
        "Godfrey",
        1,
        "bongomin@uw.edu",
        "University of Washington"
      );
      const role = "Intern";

      //Assert
      expect(intern.getRole()).toBe(role);
    });
  });
});
