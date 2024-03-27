const repo = require('./controllers/repo')
const express = require('express');
const router = express.Router();


router.post('/gh_user_repos', repo.post)

router.get('/gh_user_repos/:username', repo.get)

module.exports = router