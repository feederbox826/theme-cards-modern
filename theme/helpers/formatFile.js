module.exports = function (filename, options) {
    // strip extension
    // replace underscore with spaces
    return filename.split('.')[0]
        .replace(/_/g, ' ')
}