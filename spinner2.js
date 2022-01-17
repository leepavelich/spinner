const animations = ['|', '/', '-', '\\']
const FULL_REVS = 1;
for (let i = 0; i < 2 * FULL_REVS * animations.length + 1; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${animations[i % animations.length]}   `);
  }, 100 + i * 200);
}
setTimeout(() => console.log(), 100 + (2 * FULL_REVS * animations.length + 1) * 200);