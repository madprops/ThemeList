const fs = require(`fs`)
const path = require(`path`)
const ThemeList = require(`./themelist.js`)

function remove_duplicates() {
  let unique = []
  let obj_strings = new Set()

  for (let obj of ThemeList) {
    let ostring = JSON.stringify(obj)

    if (!obj_strings.has(ostring)) {
      unique.push(obj)
      obj_strings.add(ostring)
    }
    else {
      console.info(`Duplicate found: ${ostring}`)
    }
  }

  return unique
}

function save_file(objects) {
  let file_path = path.join(__dirname, `cleaned.json`)
  let file_data = JSON.stringify(objects, null, 2)
  fs.writeFileSync(file_path, file_data, {encoding: `utf-8`, flag: `wx`})
}

save_file(remove_duplicates())
console.info(`Duplicates removed and file saved successfully.`)