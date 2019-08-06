var config = {
    entry: ['./src/page/index/index.js'],
    output: {
        path: __dirname +'/dist/',
        filename: 'app.js'  // release 会自动创建
    }
}

module.exports = config