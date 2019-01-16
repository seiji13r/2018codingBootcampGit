# MongoDB Notes
- [MongoDB Notes](#mongodb-notes)
- [Installation](#installation)
- [Configuration](#configuration)
- [Run Mongo Services](#run-mongo-services)
- [Run Mongo](#run-mongo)
- [Commands](#commands)
  - [Get Help](#get-help)
  - [Show and Create Databases](#show-and-create-databases)
  - [Check Current Database](#check-current-database)
  - [Create User for Database](#create-user-for-database)
  - [Create Collection](#create-collection)
  - [Show Collections](#show-collections)
  - [Insert Document](#insert-document)
  - [List Documents](#list-documents)
  - [Update Documents](#update-documents)
  - [Remove Documents](#remove-documents)
  - [Query Documents](#query-documents)
    - [Single Match](#single-match)
    - [Multiple Match with $or](#multiple-match-with-or)
    - [Multiple Match with `$lt` `$gt` `$lte` `$gte`](#multiple-match-with-lt-gt-lte-gte)
    - [Match by referencing properties inside objects](#match-by-referencing-properties-inside-objects)
    - [Sorting](#sorting)
    - [Counting](#counting)
    - [forEach](#foreach)
- [End to End Example](#end-to-end-example)
- [Reference](#reference)

# Installation 

brew install mongodb --with-openssl

[Resource](https://github.com/seiji13r/2018codingBootcampGit/blob/master/W18-Mongo-Mongoose/00-Supplemental/Installing_MongoDB.md#3-installing-mongodb-on-macos)

# Configuration

sudo mkdir -p /data/db
sudo chown -R $USER /data/db
sudo chmod go+w /data/db

[Resource](https://github.com/seiji13r/2018codingBootcampGit/blob/master/W18-Mongo-Mongoose/00-Supplemental/Installing_MongoDB.md#3-installing-mongodb-on-macos)

# Run Mongo Services
```
brew services list
brew services start mongodb
```

# Run Mongo

`mongo`

# Commands
## Get Help

```
help
```

## Show and Create Databases
```
show dbs
use [database]
```

## Check Current Database
```
db
```

## Create User for Database

```
db.createUser({
    user: "myusername",
    pwd: "mypassword",
    roles: ["readWrite", "dbAdmin"]
});
```

## Create Collection

```
db.createCollection('collectionName');
```

## Show Collections

```
show collections;
```

## Insert Document

```
db.collectionName.insert(object);
```

## List Documents

```javascript
db.collectionName.find();
// Format Output to improve readability
db.collectionName.find().pretty;
```

## Update Documents

```javascript
db.collectionName.update({match}, object)

// The whole document properties need to be declared, it will override the whole document.
db.collectionName.update({_id:ObjectId()}, object)

// To update just one property or add a Property and do not modify the others we use $set
db.collectionName.update({key_match: value}, {$set:{attr: attr_value}});

// To increment a Numeric Value we use $inc
db.collectionName.update({key_match: value}, {$inc:{attr: increment_value}});

// To remove a Property we use $unset
db.collectionName.update({key_match: value}, {$unset:{attr: 1}});

// To force nsert if no match happen in the update we use upsert option to true.
db.collectionName.update({key_match: value}, object, {upsert: true});

// To Rename Document Properties we use $rename
db.collectionName.update({key_match: value}, {$rename:{"old_attr":"new_attr"}});
```

## Remove Documents

```javascript
db.collectionName.remove({match})
db.collectionName.remove({match}, {justOne:true});
```

## Query Documents
### Single Match
### Multiple Match with $or
### Multiple Match with `$lt` `$gt` `$lte` `$gte`
### Match by referencing properties inside objects
### Sorting
### Counting 
### forEach

```javascript
// Queries
// Single Match
db.customer.find({first_name: "Sharon"});
db.customer.find({gender: "male"});

// Multiple Match with $or
db.customer.find({$or:[{first_name: "Sharon"},{first_name: "Troy"}]);

// Query with greater and lower than $lt $gt $lte $gte
db.customer.find({age:{$lt:40}});

// Query Per Object Properties inside the Document.
// Don't forget to wrap with ""
db.customer.find({"address.city":"Boston"}); // OK
db.customer.find({address.city:"Boston"}); // NOT OK

// Sorting
db.customers.find().sort({last_name: -1}).pretty();

// Counting
db.customers.find().count();

// Limit
db.customers.find().limit(2).pretty();

// forEach
db.customers.find().forEach(doc => print("Customer Name: " + doc.first_name));
```

# End to End Example

```javascript
show dbs
use mycustomers

db.createUser({
    user: "seiji13r",
    pwd: "mypassword",
    roles: ["readWrite", "dbAdmin"]
});

// Create Collection
db.createCollection('customers');
show collections;

// Insert Documents
db.customers.insert({first_name: "John", last_name: "Doe"});
db.customers.insert([{first_name: "Steven", last_name: "Smith"},{first_name: "Joan", last_name: "Johnson", gender:"female"}]);
db.customers.find().pretty();

// Update Documents (Whole)
db.customers.update({first_name: "Joan"}, {first_name: "Joan", last_name: "Johnson", gender:"female"});
db.customers.update({first_name: "John"}, {first_name: "John", last_name: "Doe", gender:"male"});
db.customers.find().pretty();

// Update Documents (One Property Update or Add with $set)
db.customers.update({first_name: "Steven"}, {$set:{gender: "male"}});
db.customers.update({first_name: "Steven"}, {$set:{age: 45}});
db.customers.find().pretty();

// Update Documents (Increment Numeric Property with $inc)
db.customers.update({first_name: "Steven"}, {$inc:{age: 5}});
db.customers.find().pretty();

// Update Documents (Remove Properties with $unset)
db.customers.update({first_name: "Steven"}, {$unset:{age: 1}});
db.customers.find().pretty();

// If No match happen it will not update anything
db.customers.update({first_name: "Mary"}, {first_name: "Mary", last_name: "Samson"});

// To insert new Document if no Match happen we do update with
db.customers.update({first_name: "Mary"}, {first_name: "Mary", last_name: "Samson"}, {upsert: true});
db.customers.find().pretty();

// To rename property key we use $rename
db.customers.update({first_name:"Steven"}, {$rename:{"gender":"sex"}});
db.customers.find().pretty();

// To Remove Documents
db.customers.find().pretty();
db.customers.remove({first_name:"Steven"});
db.customers.find().pretty();
db.customers.insert({first_name: "John", last_name: "Doe"});
db.customers.remove({first_name:"John"}, {justOne:true});

// Queries
// Single Match
db.customer.find({first_name: "Sharon"});
db.customer.find({gender: "male"});

// Multiple Match with $or
db.customer.find({$or:[{first_name: "Sharon"},{first_name: "Troy"}]);

// Query with greater and lower than $lt $gt $lte $gte
db.customer.find({age:{$lt:40}});

// Query Per Object Properties inside the Document.
// Don't forget to wrap with ""
db.customer.find({"address.city":"Boston"}); // OK
db.customer.find({address.city:"Boston"}); // NOT OK

// Sorting
db.customers.find().sort({last_name: -1}).pretty();

// Counting
db.customers.find().count();

// Limit
db.customers.find().limit(2).pretty();

// forEach
db.customers.find().forEach(doc => print("Customer Name: " + doc.first_name));
```

```javascript
db.customers.insert([
    {
        first_name: "Troy",
        last_name: "Makons",
        gender: "male",
        age: 33,
        address: {
            street: "432 Essex Street",
            city: "Lawrence",
            state: "MA"
        },
        memberships: ["mem1", "mem2"],
        balance: 125.32
    },
    {
        first_name: "Beth",
        last_name: "Jenkins",
        gender: "female",
        age: 23,
        address: {
            street: "411 Blue st",
            city: "Boston",
            state: "MA"
        },
        memberships: ["mem2", "mem3"],
        balance: 505.33
    },
    {
        first_name: "Timothy",
        last_name: "Wilkins",
        gender: "male",
        age: 53,
        address: {
            street: "22 School st",
            city: "Amesbury",
            state: "MA"
        },
        memberships: ["mem3", "mem4"],
        balance: 22.25
    },
    {
        first_name: "William",
        last_name: "Jackson",
        gender: "male",
        age: 43,
        address: {
            street: "11 Albany st",
            city: "Boston",
            state: "MA"
        },
        memberships: ["mem1"],
        balance: 333.23
    },
    {
        first_name: "Sharon",
        last_name: "Thomson",
        gender: "female",
        age: 35,
        address: {
            street: "19 Willis st",
            city: "Worchester",
            state: "MA"
        },
        memberships: ["mem1", "mem2"],
        balance: 99.99
    }
]);

db.customers.remove({});
db.customers.find().pretty();
```


# Reference
[MongoDB In 30 Minutes
](https://youtu.be/pWbMrx5rVBE)