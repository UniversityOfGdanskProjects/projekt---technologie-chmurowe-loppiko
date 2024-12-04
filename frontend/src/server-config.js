const serverConfig = {
    "server-url": process.env.REACT_APP_API_URL,
    "endpoints": {
        "footer": "/footer",
        "header": "/header",
        "mainSite": "/mainSite",
        "subjects": "/subjects"
    }
}

module.exports = serverConfig;