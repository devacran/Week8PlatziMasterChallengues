class Persona {
  constructor(props) {
    this.personaName = props.name;
    this.personaLastname = props.lastname;
    this.personaEmail = props.email;
  }
  get name() {
    return this.personaName;
  }
  set name(name) {
    return (this.personaName = name);
  }
  get lastname() {
    return this.personaLastname;
  }
  set lastname(lastname) {
    return (this.personaLastname = name);
  }
  get email() {
    return this.personaEmail;
  }
  set email(email) {
    return (this.personaEmail = name);
  }
  showInfo() {
    return { name: this.name, lastname: this.lastname, email: this.email };
  }
}
class Validator extends Persona {
  constructor(props) {
    super(props);
    this.emailValidator(this.name, this.lastname, this.email);
  }
  emailValidator(name, lastname, email) {
    const regex = /\w{3,15}@\w{3,15}\.[a-z]{2,5}/;
    if (!email.match(regex)) {
      console.log("email invalid");
    } else {
      console.log(
        `hello my name is ${name} ${lastname} and my email is ${email}`
      );
    }
  }
}
const pancho = new Validator({
  name: "pancho",
  lastname: "lopez",
  email: "panchogmail.com",
});
const juan = new Validator({
  name: "juan",
  lastname: "ramirez",
  email: "juan@gmail.com",
});
