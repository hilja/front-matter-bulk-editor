const fs = require('fs')
const path = require('path')
const isHidden = require('is-hidden')

/**
 * Test if a file is markdown file.
 *
 * @param file Filename or file descriptor
 */
const isMarkDownFile = file => {
  const isDotFile = isHidden(path.basename(file))
  const isFile = fs.lstatSync(file).isFile() && !isDotFile
  const regex = /^.+(?:\.md|\.markdown)$/i

  return regex.test(file) && isFile
}

module.exports = isMarkDownFile