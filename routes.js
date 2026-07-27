const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const controller = require("../controllers/userController");

router.get("/", controller.getUsers);

router.get("/:id", controller.getUser);

router.post("/", auth, controller.createUser);

router.put("/:id", auth, controller.updateUser);

router.patch("/:id", auth, controller.patchUser);

router.delete("/:id", auth, controller.deleteUser);

module.exports = router;
