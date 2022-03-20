const ContactModel = require("../../models/contactModel/ContactModel");
const router = require("express").Router();

router.post("/contact", async (req, res) => {
  const response = await new ContactModel(req.body);
  try {
    res.status(201).json({
      status: "Success",
      json: response,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
