# Insert Animals

"Sure being a coder is fun and all, but you know what’s better? Being a coder at a zoo. Using MongoDB, you're going to make a zoo database."

## Instructions

Startup mongod and the mongo shell and switch to a new db named zoo.

Insert into a collection named animals:
One entry for each of your five favorite animals.

Each entry should have
1. A field of numLegs with an integer of the number of legs that animal has.
2. A field of class with that animal's class (mammal, reptile, etc).
3. A field of weight with an integer of the weight of the animal in pounds (any reasonable weight, really).
4. A field of name, with the animal's name.
5. A field of whatIWouldReallyCallIt with the name of what you would call the animal if you got to name it.

Example:

{
  "name": "Panda",
  "numLegs": 4,
  "class": "mammal",
  "weight": 254,
  "whatIWouldReallyCallIt": "Desiigner"
}
```

db.animals.find({})

db.animals.insert({
  "name": "Panda",
  "numLegs": 4,
  "class": "mammal",
  "weight": 254,
  "whatIWouldReallyCallIt": "Desiigner"
})

db.animals.insert({
  "name": "Turtle",
  "numLegs": 4,
  "class": "Reptile",
  "weight": .5,
  "whatIWouldReallyCallIt": "Tortuguita"
})

db.animals.insert({
  "name": "Cat",
  "numLegs": 4,
  "class": "mammal",
  "weight": 2,
  "whatIWouldReallyCallIt": "Meaw"
})

db.animals.insert({
  "name": "Snake",
  "numLegs": 0,
  "class": "reptile",
  "weight": 3,
  "whatIWouldReallyCallIt": "Tssss"
})

db.animals.find({}).sort({weight:1})
db.animals.find({}).sort({numLegs:1}).pretty()
db.animals.find({}).sort({numLegs:-1}).pretty()