// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const inventory = require("../models/inventory");

module.exports = (app) => {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
      });
    }
  });

  // NEW CODE STARTS HERE:
  // route to view store
  app.get("/api/inventorys", (req, res) => {
    db.Inventory.findAll().then((dbInventory) => {
      res.json(dbInventory);
    });
  });
  //route to view the "shopping cart" populated with data from Inventory table

  // make into a post to have access to the body, include user id in the body, find
  app.get("/api/cart/:id", (req, res) => {
    db.Inventory.findOne({ where: { id: req.params.id } }).then(
      (dbInventory) => {
        res.json(dbInventory);
      }
    );
  });
  // route to input the total from "shopping cart" and inputs it into Cart table
  app.post("/api/carts", (req, res) => {
    console.log(req.body);
    db.Cart.create({
      total: req.body.total,
    }).then((dbCart) => {
      res.json(dbCart);
    });
  });
  // route to input the "order form" into the Order table
  app.post("/api/order", (req, res) => {
    console.log(req.body);
    db.Order.create({
      firstName: req.body.fistName,
      astName: req.body.firstName,
      streetAddress: req.body.streetAddress,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
      ccBrand: req.body.ccBrand,
      ccNum: req.body.ccNum,
      ccExpirationDate: req.body.ccExpirationDate,
      ccCVV: req.body.ccCVV,
    }).then((dbOrder) => {
      res.json(dbOrder);
    });
  });
};
