require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({
	api_key: "669411354282412",
	api_secret: "P7QUr1u49MtJKOUTY_t-rRKbhZo",
	cloud_name: "ayushraj",
	// cloud_name: process.env.CLOUDINARY_NAME,
	// api_key: process.env.CLOUDINARY_API_KEY,
	// api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = { cloudinary };
