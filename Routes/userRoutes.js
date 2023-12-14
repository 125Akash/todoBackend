const express = require('express');
const { registration, login, dashboard, getUser ,logout} = require('../Controllers/userControllers');
const auth = require("../middleware/auth")
const cookieParser = require('cookie-parser');
const router = express.Router();




router.post("/api/u/register", registration);
router.post("/api/u/login", login);
router.get("/api/u/user", auth, getUser);
router.post('/api/u/logout', auth, (req, res) => {
    // Clear the token cookie
    res.clearCookie('token');
  
    res.json({ success: true, message: 'Logout successful' });
  });
  

module.exports = router;