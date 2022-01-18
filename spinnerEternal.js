const animations = ['|', '/', '-', '\\'];  // spinner animation frames

let delay = 100;

const rotate = (counter, callback) => {
  setTimeout(() => {
    process.stdout.write(`\r${animations[counter % animations.length]}   `);
    callback(++counter, callback);
  }, delay);
};

rotate(0, rotate);