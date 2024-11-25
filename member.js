function skillsMember() {
  const member = {
    name: "John",
    age: 30,
    skills: ["HTML", "CSS", "JS"],
    greet: function () {
      console.log(`Hello, I'm ${this.name}`);
    },
    logSkills: function () {
      this.skills.forEach((skill) => {
        console.log(skill);
      });
    },
  };
  return member;
}
