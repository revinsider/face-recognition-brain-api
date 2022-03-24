const handleProfileGet = (req, res, db) => {
  const { id } = req.params;
  db.select("*")
    .from("users")
    .where({ id })
    .then((user) => {
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(400).json("No such an user");
      }
    })
    .catch((err) => res.status(400).json("Error getting user"));
};
module.exports = {
  handleProfileGet: handleProfileGet,
};
