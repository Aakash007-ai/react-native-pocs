module.exports = async () => {
  console.log('background task called');
  setTimeout(() => {
    console.log('background task completed');
  }, 10000);
};
