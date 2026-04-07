const fs = require("fs");
const path = require("path");

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith(".jsx") || file.endsWith(".css") || file.endsWith(".js")) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(path.join(__dirname, "src"));
files.forEach(file => {
  let content = fs.readFileSync(file, "utf8");
  let original = content;
  // Replace hex color
  content = content.replace(/#ae7aff/g, "#e81cff");
  content = content.replace(/#AE7AFF/g, "#e81cff");
  // Replace tailwind colors
  content = content.replace(/text-purple-/g, "text-fuchsia-");
  content = content.replace(/bg-purple-/g, "bg-fuchsia-");
  content = content.replace(/border-purple-/g, "border-fuchsia-");
  
  if (content !== original) {
    fs.writeFileSync(file, content, "utf8");
    console.log("Updated", file);
  }
});
console.log("Done replacing colors.");
