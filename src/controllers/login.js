import { User } from "../db/createModels.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import privateKey from "../auth/private_key.js"


const login = (req, res) => {
  User.findOne({ where: { username: req.body.username } })
    .then((user) => {
      if (!user) {
        const message = "Il n'existe pas d'utilisateur à ce nom.";
        return res.status(404).json({ message });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((isPasswordValid) => {
          if (!isPasswordValid) {
            const message = "Erreur de mot de passe. L'utilisateur n'a pas été connecté.";
            return res.status(401).json({message});
          }
// JWT
const token = jwt.sign(
    {userId : user.id},
    privateKey,
    {expiresIn : '24h'}
)

          const message = "L'utilisateur a été connecté avec succès";
          return res.json({ message, data: user, token });
        });
    })
    .catch((error) => {
      const message =
        "La connection n'a pas été effectuée. Réessayez dans quelques instants.";
      res.status(500).json({ message, data: error });
    });
};

export default login;
