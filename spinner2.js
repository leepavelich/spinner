const frames = ['|', '/', '-', '\\'];  // spinner animation frames
const delay = 100;

const rotate = (frame, stopFrame = Infinity) => {
  if (frame >= stopFrame) return;
  setTimeout(() => {
    process.stdout.write(`\r${frames[frame % frames.length]}   `);
    rotate(++frame, stopFrame);
  }, delay);
};

rotate(0);
// rotate(0, 8);