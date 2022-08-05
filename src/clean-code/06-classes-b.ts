(() => {
  // No aplicando el principio de responsabilidad única

  type Gender = "M" | "F";

  interface PersonProps {
    birthDate: Date;
    gender: Gender;
    name: string;
  }

  class Person {
    public birthDate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthDate }: PersonProps) {
      this.birthDate = birthDate;
      this.gender = gender;
      this.name = name;
    }
  }

  interface UserProps {
    birthDate: Date;
    email: string;
    gender: Gender;
    name: string;
    role: string;
  }

  class User extends Person {
    public email: string;
    public role: string;
    private lastAccess: Date;

    constructor({ email, role, name, gender, birthDate }: UserProps) {
      super({ name, gender, birthDate });
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps {
    birthDate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }

  class UserSettings extends User {
    public lastOpenFolder: string;
    public workingDirectory: string;

    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthDate,
    }: UserSettingsProps) {
      super({ email, role, name, gender, birthDate });
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: "/usr/home",
    lastOpenFolder: "/home",
    email: "/fernando@google.com",
    role: "Admin",
    name: "Fernando",
    gender: "M",
    birthDate: new Date("1985-10-21"),
  });
  console.log({ userSettings });
})();
