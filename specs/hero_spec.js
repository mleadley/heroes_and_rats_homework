const assert = require("assert")
const Hero = require("../hero")
const Quest = require("../quest")
const Food = require("../food")

describe("Hero", () => {
  var hero
  var quest1
  var quest2
  var apple
  var cheese

  beforeEach(() => {
    hero = new Hero("Michael", "cheese")
    quest1 = new Quest(
      Quest.difficulties.HARD,
      Quest.urgencies.HIGH,
      new Map([["XP", 150], ["Gold", 100]])
    )
    quest2 = new Quest(
      Quest.difficulties.EASY,
      Quest.urgencies.LOW,
      new Map([["XP", 20], ["Gold", 15]])
    )
    apple = new Food("apple", 4)
    cheese = new Food("cheese", 6)
  })

  it("should have a name", () => {
    assert.strictEqual(hero.name, "Michael")
  })

  it("should start with 20 health", () => {
    assert.strictEqual(hero.health, 20)
  })

  it("should have a favourite food", () => {
    assert.strictEqual(hero.favouriteFood, "cheese")
  })

  it("should be able to talk", () => {
    assert.strictEqual(hero.talk(), "I am the great adventurer Michael!")
  })

  it("should start with an empty quest log", () => {
    assert.deepStrictEqual(hero.questLog, [])
  })

  it("should be able to eat food to replenish health", () => {
    hero.eat(apple)
    assert.strictEqual(hero.health, 24)
  })

  it("should be able to eat their fave food for 1.5x health", () => {
    hero.eat(cheese)
    assert.strictEqual(hero.health, 29)
  })

  it("should be able to add quests to their quest log", () => {
    hero.takeQuest(quest1)
    assert.strictEqual(hero.questLog.length, 1)
    assert.ok(hero.questLog.includes(quest1))
  })
})
