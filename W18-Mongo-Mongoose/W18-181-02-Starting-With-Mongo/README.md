# Starting with Mongo

## Instructions

A. Use the command line to create a classroom database. Insert entries for yourself and the people in your row in a students collection. Each document should have:

use lessondb
db.classroom.insert({"name":"Seiji Osada", "rownumber":"1", "os":"mac", "hobbies": ["Coding", "Watching TV", "Reading"]});
db.classroom.insert({"name":"Jorge Castellanos", "rownumber":"1", "os":"win", "hobbies":["Coding", "Watching TV", "Exercising"],});
db.classroom.insert({"name":"Alma Soltelo", "rownumber":"1", "os":"win", "hobbies":["Coding", "Cooking", "Reading"],});
db.classroom.insert({"name":"Alix Reyna", "rownumber":"1", "os":"win", "hobbies":["Coding", "Watching TV", "Gaming"],});
db.classroom.insert({"name":"Jonathan Barcelo", "rownumber":"2", "os":"mac", "hobbies":["Coding", "Gaming", "Reading"],});
db.classroom.insert({"name":"Nikolas Kennof", "rownumber":"2", "os":"win", "hobbies":["Coding", "Watching TV", "Reading"],});
db.classroom.insert({"name":"Eduardo Monforte", "rownumber":"2", "os":"mac", "hobbies":["Coding", "Watching TV", "Partying"],});
db.classroom.insert({"name":"Pablo Dubcovsky", "rownumber":"2", "os":"win", "hobbies":"",});
db.classroom.insert({"name":"Jorge Báez", "rownumber":"3", "os":"win", "hobbies":"",});
db.classroom.insert({"name":"Eduardo Morán", "rownumber":"3", "os":"win", "hobbies":"",});
db.classroom.insert({"name":"Manuel Muñuzuri", "rownumber":"3", "os":"mac", "hobbies":"",});
db.classroom.insert({"name":"Charlie Acevedo", "rownumber":"3", "os":"win", "hobbies":"",});
db.classroom.insert({"name":"Francisco Gonzalez", "rownumber4":"", "os":"win", "hobbies":"",});
db.classroom.insert({"name":"Enrique Gomez", "rownumber":"4", "os":"mac", "hobbies":"",});
db.classroom.insert({"name":"Jorge Gonzalez", "rownumber":"4", "os":"mac", "hobbies":"",});
db.classroom.insert({"name":"Robert Lopez", "rownumber":"4", "os":"win", "hobbies":"",});
db.classroom.insert({"name":"Felix Ruano", "rownumber":"5", "os":"win", "hobbies":"",});
db.classroom.insert({"name":"Walter Almada", "rownumber":"5", "os":"mac", "hobbies":"",});
db.classroom.insert({"name":"Adrian Salinas", "rownumber":"5", "os":"mac", "hobbies":"",});
db.classroom.insert({"name":"Valeria Betancourt", "rownumber":"5", "os":"mac", "hobbies":"",});
db.classroom.insert({"name":"Maria Fernanda Enriquez", "rownumber":"6", "os":"win", "hobbies":"",});
db.classroom.insert({"name":"Arly Castro", "rownumber":"6", "os":"mac", "hobbies":"",});
db.classroom.insert({"name":"Ana Gonzalez", "rownumber":"6", "os":"mac", "hobbies":"",});
db.classroom.insert({"name":"Froy", "rownumber":"6", "os":"mac", "hobbies":"",});

db.classroom.insert({"name":"", "rownumber":"", "os":"", "hobbies":"",});


1. A field of name with the person's name.
2. A field of rownumber which will contain the row number that they are in.
3. A field of os which will contain the Operating System of the computer they are using: 'Mac', 'Win', etc
4. A field of hobbies with an array of the hobbies the person likes to do.

B. Use find commands to get:

1. A list of everyone in your row.
2. An entry for a single person.
3. The entries for all the Mac users in your row. 

### BONUS

If you finish early, check out the MongoDB documentation and figure out how to find users by an entry in an array.


{"name": "Jorge Baez", "os": "Win", hobbies: ["Coding", "Guitar Playing", "Reading"]}
{"name": "Felix Ruano", "os": "Win", hobbies: ["Coding", "Gaming", "Chillin"]}
{"name": "Nicolas Kennof", "os": "Win", hobbies: ["Coding", "Traveling", "Beer Tasting"]}
{"Name" : "Charlie", "rownumber" : "1", "os:" : "Windows", "hobbies" : [ "Reading literature", "Programming" ] }
{"name": "Alex Tarasiuk", "os": "Win", hobbies: ["Coding", "Skydiving", "Extreme Taco Eating"]}
{"name":"Seiji Osada", "rownumber":"1", "os":"mac", "hobbies": ["Coding", "Watching TV", "Reading"]}
{"name": "Jonathan Barcelo, "os": "Mac", hobbies: ["Coding", "Bass", "Writing"]}
{"name": "Manuel Muñuzuri, "os": "Mac", hobbies: ["Coding", "gaming", "Stout beer"]}
{"name":"Pablo Dubcovsky", "rownumber":"1", "os": "Windows", "hobbies": ["Coding", "Cooking", "Origami"]}
{"name": "Ana ", "os": "Mac", hobbies: ["Reading", "traveling", "sleeping"]}
{"name": "Alma Sotelo", "os": "Win", hobbies: ["Coding", "Piano Playing", "Sewing"]}
{"name": "Robert Lopez", "os": "Win",  "hobbies": ["Coding", "Gaming", "Netflix"]}
{“name”:“Enrique Gomez”, “os”:“mac”, “hobbies”: [“running”, “reading”, “cooking”]}





{"name": "Jorge Baez", "os": "Win", "hobbies": ["Coding", "Guitar Playing", "Reading"]},
{"name": "Felix Ruano", "os": "Win", "hobbies": ["Coding", "Gaming", "Chillin"]},
{"name": "Nicolas Kennof", "os": "Win", "hobbies": ["Coding", "Traveling", "Beer Tasting"]},
{"Name" : "Charlie", "rownumber" : "1", "os:" : "Windows", "hobbies" : [ "Reading literature", "Programming" ] },
{"name": "Alex Tarasiuk", "os": "Win", "hobbies": ["Coding", "Skydiving", "Extreme Taco Eating"]},
{"name": "Seiji Osada", "rownumber":"1", "os":"mac", "hobbies": ["Coding", "Watching TV", "Reading"]},
{"name": "Jonathan Barcelo, "os": "Mac", "hobbies": ["Coding", "Bass", "Writing"]},
{"name": "Manuel Muñuzuri, "os": "Mac", "hobbies": ["Coding", "gaming", "Stout beer"]},
{"name": "Pablo Dubcovsky", "rownumber":"1", "os": "Windows", "hobbies": ["Coding", "Cooking", "Origami"]},
{"name": "Ana ", "os": "Mac", hobbies: ["Reading", "traveling", "sleeping"]}
{"name": "Alma Sotelo", "os": "Win", hobbies: ["Coding", "Piano Playing", "Sewing"]},
{"name": "Robert Lopez", "os": "Win",  "hobbies": ["Coding", "Gaming", "Netflix"]},
{"name": "Enrique Gomez", "os":"mac", "hobbies": ["running", "reading", "cooking"]}
{"name": "Eduardo Morán", "os": "Win", hobbies: ["Cooking & Eating", "Beer Tasting", "Snowboarding", "Learning new things"]}
{"name": "Alix", "os": "Win", "hobbies": ["cross stitch", "videogames", "read"]}