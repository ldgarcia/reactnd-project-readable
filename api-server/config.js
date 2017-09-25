exports.port = process.env.SERVER_PORT || 3001
exports.origin = process.env.SERVER_ORIGIN || `http://localhost:${exports.port}`
