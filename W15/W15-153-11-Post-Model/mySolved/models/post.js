module.exports = function(sequelize, DataTypes) {
  // Add code here to create a Post model
  // This model needs a title, a body, and a category
  // Don't forget to 'return' the post after defining
};


module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,60],
        isAlphanumeric: true,
        // notNull: true,
        notEmpty: true
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        min: 1,
        // isAlphanumeric: true,
        notEmpty: true
      }
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "Personal",
      validate: {
        // isAlphanumeric: true,
        notEmpty: true,
      }
    }
  });
  return Post;
};

// 5) Create a Sequelize `Post` model here. The model should have a title property of type DataTypes.STRING, a body property of DataTypes.TEXT, and a category property of DataTypes.STRING. 