const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let profile = [];

rl.question("What is your name? ", (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  profile.push(answer);

  rl.question("What is an activity you like doing? ", (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    profile.push(answer);

    rl.question("What do you listen to while doing that? ", (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      profile.push(answer);

      rl.question(
        "Which meal is your favourite? (eg: dinner, brunch, etc.) ",
        (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
          profile.push(answer);

          rl.question(
            "What is your favourite thing to eat for that meal? ",
            (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);
              profile.push(answer);

              rl.question(
                "Which sport is your absolute favourite? ",
                (answer) => {
                  console.log(
                    `Thank you for your valuable feedback: ${answer}`
                  );
                  profile.push(answer);

                  rl.question(
                    "what is your superpower? in a few words, tell us what you are amazing at! ",
                    (answer) => {
                      console.log(
                        `Thank you for your valuable feedback: ${answer}`
                      );
                      profile.push(answer);

                      rl.close();
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});
