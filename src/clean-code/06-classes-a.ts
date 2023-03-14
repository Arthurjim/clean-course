(() => {
  // No aplicando el principi de responsablidad única

  type Gender = "M" | "F";
  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}

    //Forma larga de hacerlo
    // public name: string;
    // public gender: Gender;
    // public birthdate: Date;

    // constructor(name: string, gender: Gender, birthdate: Date) {
    //   this.name = name;
    //   this.gender = gender;
    //   this.birthdate = birthdate;
    // }
  }

  class User extends Person {
    public lastAcces: Date;
    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAcces = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, name, gender, birthdate);
    }
  }

  const userSettings = new UserSettings(
    "user/home",
    "/home",
    "arjimenez@palaceresorts",
    "admin",
    "Arturin",
    "M",
    new Date("1997-09-16")
  );

  // console.log({ userSettings, areCredentialValid: userSettings.checkCredentials()})
  console.log({ userSettings})
})();
