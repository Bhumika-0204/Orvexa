require("dotenv").config({ path: "./.env" });
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const { execSync } = require("child_process");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Download a tiny valid mp4 sample (e.g. 5 seconds)
execSync("curl -s -L -o sample.mp4 https://www.w3schools.com/html/mov_bbb.mp4");

console.log("Uploading to Cloudinary...");
cloudinary.uploader.upload("sample.mp4", { resource_type: "auto" })
  .then(res => {
    console.log("SUCCESS! Video uploaded:", res.secure_url);
  })
  .catch(err => {
    console.error("CLOUDINARY UPLOAD ERROR:");
    console.error(err);
  })
  .finally(() => {
    if (fs.existsSync("sample.mp4")) fs.unlinkSync("sample.mp4");
  });
