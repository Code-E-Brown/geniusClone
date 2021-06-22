const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Artist, Song } = require('../../db/models')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


router.get('/', asyncHandler(async (req, res) => {
    const artists = await Artist.findAll()
    res.json(artists)
}))


router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const artist = await Artist.findByPk(req.params.id, {
        include: Song
    })
    res.json(artist)
}))

// router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
//     const song = await Song.findByPk(req.params.songId)
//     res.json(song)
// }))


module.exports = router;
