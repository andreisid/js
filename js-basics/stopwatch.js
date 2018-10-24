// Implementation of a stopwatch

function Stopwatch() {
  let duration = 0;
  let isStarted = false;
  let startTime = null;
  this.start = function() {
    if (!isStarted) {
      isStarted = true;
      startTime = new Date().getTime();
    } else {
      throw new Error("Already started");
    }
  };
  this.stop = function() {
    if (isStarted) {
      isStarted = false;
      const stopTime = new Date().getTime();
      duration = duration + (stopTime - startTime) / 1000;
    } else {
      throw new Error("Already stopped");
    }
  };
  this.reset = function() {
    duration = 0;
    isStarted = false;
    startTime = null;
  };
  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    }
  });
}

function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

sw = new Stopwatch();
sw.start();
console.log(sw.duration);
wait(3000);
sw.stop();
console.log(sw.duration);
sw.reset();
console.log(sw.duration);

console.log("-------");
sw.start();
console.log(sw.duration);
setTimeout(() => {
  sw.stop();
  console.log(sw.duration);
}, 3000);

//sw.reset();
console.log(sw.duration);
