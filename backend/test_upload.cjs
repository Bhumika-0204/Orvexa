require("dotenv").config({ path: "./.env" });
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// create a dummy 1mb mp4 file
const path = "./test.mp4";
fs.writeFileSync(path, Buffer.alloc(1024 * 1024, "X"));

cloudinary.uploader.upload(path, { resource_type: "auto" })
  .then(res => console.log("Success:", res.url))
  .catch(err => console.error("Cloudinary Error:", err))
  .finally(() => fs.unlinkSync(path));
