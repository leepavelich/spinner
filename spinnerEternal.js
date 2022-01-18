const animations = ['|', '/', '-', '\\'];  // spinner animation frames
const delay = 100;

const rotate = (frame, callback, stopFrame = Infinity) => {
  if (frame >= stopFrame) return;
  setTimeout(() => {
    process.stdout.write(`\r${animations[frame % animations.length]}   `);
    callback(++frame, callback, stopFrame);
  }, delay);
};

// rotate(0, rotate);
rotate(0, rotate, 8);