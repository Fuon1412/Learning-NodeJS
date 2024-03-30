const connection = require("../config/database");
const {createUser, getAllUsers,getUserById,updateUserById,deleteUserById } = require("../services/CRUDService");
const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};
const getCreatePage = (req, res) => {
  return res.render("create.ejs");
};

const getDumbPage = (req, res) => {
  res.render("sample.ejs");
};
const getUpdatePage = async(req, res) => {
  const userID = req.params.id;
  let user = await getUserById(userID);
  return res.render("edit.ejs",{userEdit : user});
};
const postCreateUser = async (req, res) => {
  let { email, myName: name, city } = req.body;
  console.log(email, name, city);
  await createUser(email, name, city);
  res.redirect("/");
};
const postUpdateUser = async (req, res) => {
  let { email, myName: name, city ,userID: ID} = req.body;
  console.log(email, name, city, ID);
  await updateUserById(ID,email, name, city);
  res.redirect("/");
};
const postDeleteUser = async (req, res) => {
  let userID = req.params.id;
  console.log(userID);
  let user = await getUserById(userID);
  res.render("delete.ejs",{userEdit : user});
};
const postHandlerRemoveUser=async(req,res)=>{
  const ID = req.body.userID;
  await deleteUserById(ID);
  res.redirect("/");
};

module.exports = {
  getHomePage,
  getDumbPage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandlerRemoveUser,
};
