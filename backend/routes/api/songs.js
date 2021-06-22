const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Song, Artist, Tag } = require('../../db/models')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

router.get('/:id', asyncHandler(async (req, res) => {
    const song = await Song.findByPk(req.params.id, {
        include: [Artist, Tag]
    })
    res.json(song)
}))

module.exports = router;
