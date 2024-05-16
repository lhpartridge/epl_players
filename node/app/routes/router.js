const express = require('express')
const router = express.Router()

const port = process.env.port || 3005

router.get('/api', (req, res)=> {
    res.json({
        'All players': `http://localhost:${port}/api/player`
    })
})

router.use('/api/player', require('./api/playerRoutes'))

router.get('*', (req, res)=> {
    if (req.url === '/favicon.ico') {
        res.end()
    } else {
        res.send('<h1>404 ERROR:  Page does not exist</h1>')
    }
})

module.exports = router