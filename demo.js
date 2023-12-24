var sparkles = require("./index")();

sparkles.on("my-event", function (evt) {
  console.log("my-event handled", evt);
});

sparkles.emit("my-event", { my: "event" });
