(() => {
  // ? Aplicando el principio de responsabilidad única
  // ! Priorizar la composición frente a la herencia!

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
    email: string;
    role: string;
  }

  class User {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  class Settings {
    public lastOpenFolder: string;
    public workingDirectory: string;

    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
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

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      name,
      gender,
      birthDate,
      email,
      role,
      lastOpenFolder,
      workingDirectory,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthDate });
      this.user = new User({ email, role });
      this.settings = new Settings({ lastOpenFolder, workingDirectory });
    }
  }

  const userSettings = new UserSettings({
    birthDate: new Date("1985-10-21"),
    email: "/fernando@google.com",
    gender: "M",
    lastOpenFolder: "/home",
    name: "Fernando",
    role: "Admin",
    workingDirectory: "/usr/home",
  });
  console.log({ userSettings });
})();
