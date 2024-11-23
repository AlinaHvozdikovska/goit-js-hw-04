const profile = {
  username: 'Jacob',
  playTime: 300,

  /* // Метод для зміни імені користувача
    changeUsername(newName) {
        this.username = newName; // Змінюємо значення властивості username
    },

    // Метод для оновлення часу гри
    updatePlayTime(hours) {
        this.playTime += hours; // Додаємо нову кількість годин до playTime
    },

    // Метод для отримання інформації
    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`;
    } */
};

profile.changeUsername = function (newName) {
  this.username = newName;
};

profile.updatePlayTime = function (hours) {
  this.playTime += hours;
};

profile.getInfo = function () {
  return `${this.username} has ${this.playTime} active hours!`;
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername('Marco');
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
