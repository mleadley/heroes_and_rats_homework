const Hero = function (name, favouriteFood) {
  this.name = name
  this.health = 20
  this.favouriteFood = favouriteFood
  this.questLog = []
  this.gold = 0
  this.experience = 0
}

Hero.prototype = {
  talk: function () {
    return `I am the great adventurer ${this.name}!`
  },

  eat: function (food) {
    if (this.favouriteFood === food.name) {
      this.health += food.replenishment * 1.5
    } else {
      this.health += food.replenishment
    }
  },

  takeQuest: function (quest) {
    this.questLog.push(quest)
  },

  questsByDifficulty: function () {
    return this.questLog.sort(
      (questA, questB) => questA.difficulty - questB.difficulty
    )
  },

  questsByUrgency: function () {
    return this.questLog.sort(
      (questA, questB) => questA.urgency - questB.urgency
    )
  },

  completedQuests: function () {
    return this.questLog.filter(
      quest => quest.completed
    )
  },

  incompleteQuests: function () {
    return this.questLog.filter(
      quest => quest.completed === false
    )
  }
}

module.exports = Hero
