const fs = require("fs");
const path = require("path");
const files = [
  "README.md",
  "SETUP_GUIDE.md",
  "backend/Readme.md",
  "frontend/README.md"
];
for (const file of files) {
  const fp = path.join("c:/Users/Bhumika Kumari/OneDrive/Desktop/orvexa", file);
  if (fs.existsSync(fp)) {
    let c = fs.readFileSync(fp, "utf8");
    c = c.replace(/Orvexa/g, "ORVΞXA");
    fs.writeFileSync(fp, c, "utf8");
  }
}
