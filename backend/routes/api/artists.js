const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Artist, Song } = require('../../db/models')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


router.get('/', asyncHandler(async (req, res) => {
    const artists = await Artist.findAll({
        include: Song
    })
    res.json(artists)
}))

router.post('/', asyncHandler(async (req, res) => {

    let { by, title, tag, lyrics, albumImage, youtubeLink } = req.body
    const newArtist = Artist.build({
        title: by,
        image: 'https://raw.githubusercontent.com/Code-E-Brown/geniusClone/main/backend/images/CaptureLogoCopy.png'
    })
    if (newArtist) {
        await newArtist.save()
        res.json(newArtist)
    }
}))


router.get('/:id(\\d+)/', asyncHandler(async (req, res) => {
    const artist = await Artist.findByPk(req.params.id, {
        include: Song
    })
    res.json(artist)
}))

router.post('/:id(\\d+)/', requireAuth, asyncHandler(async (req, res) => {
    const { id } = await Artist.findByPk(req.params.id)
    let { title, tag, lyrics, youtubeLink, albumImage } = req.body
    if (tag === 'rap') tag = 1;
    if (tag === 'pop') tag = 2;
    if (tag === 'rock') tag = 3;
    if (tag === 'r&b') tag = 4;
    if (tag === 'country') tag = 5;
    if (tag === 'gospel') tag = 6;
    if (tag === 'other') tag = 7;
    if (albumImage === '') albumImage = 'https://raw.githubusercontent.com/Code-E-Brown/geniusClone/main/backend/images/CaptureLogoCopy.png'
    let newSong = await Song.build({
        artistId: id,
        userId: req.user.id,
        title,
        tagId: tag,
        lyrics,
        imageUrl: albumImage,
        youtubeUrl: youtubeLink
    })

    if (newSong) {
        await newSong.save()
        res.json(newSong)
    }
}))

// router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
//     const song = await Song.findByPk(req.params.songId)
//     res.json(song)
// }))


module.exports = router;
