function Biodata() {
  let Ade = {
    Name: "Ade Rahman P",
    Address: "Depok",
    Hobbies: ["Read Book", "Basketball", "Streaming"],
    isMarried: false,
    School: {
      highSchool: "Sejahtera 1",
      University: "UPNVJ"
    },
    Skill: [
      {
        nodeJs: 75
      },
      {
        mongodb: 80
      },
      {
        express: 70
      }
    ]
  };
  return Ade;
}

console.log(Biodata());
