const bcrypt = require('bcrypt')
const UserModel = require('../models/UserModel')
const jwt = require('jsonwebtoken');
UserModel.table = 'users'

class User {
  static signup(req, res, next) {
    console.log(req.body);
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        UserModel.insert({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            adress: req.body.adress,
            zip: req.body.zip,
            city: req.body.city,
            country: req.body.country,
            password: hash
          }).then((thing) => {
            res.status(200).json(thing);
          })
          .catch((error) => {
            res.status(404).json({
              error: error
            });
          });
      })
      .catch(error => res.status(500).json({
        error
      }));
  };

  static signin(req, res, next) {
    UserModel.getByEmail(req.body.email).then((user) => {
      console.log(user);
      if (!user) {
        res.status(401).json({
          error: 'Utilisateur non trouvé !'
        });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({
              error: 'Mot de passe incorrect !'
            });
          }
          const token = jwt.sign(
            { userId: user._id },
            'RANDOM_TOKEN_SECRET',
            { expiresIn: '24h' });

          res.status(200).json({
            user: user,
            token: token
          })
          
        }).catch(error => res.status(500).json({
          error
        }));
    }).catch(error => res.status(500).json({
      error
    }));
  }
}
module.exports = User;