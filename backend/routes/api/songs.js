const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Song, Artist, Tag, Comment } = require('../../db/models')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

router.post('/', asyncHandler(async (req, res) => {
    // console.log('here', req.body)
    // by: 'asd',
    // title: 'asd',
    // tag: 'rap',
    // lyrics: '<p>ss</p>',
    // albumImage: '',
    // youtubeLink: ''
    // let {by}
    // let song = await Song.build({

    // })
}))

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const song = await Song.findByPk(req.params.id, {
        include: [Artist, Tag]
    })
    res.json(song)
}))

router.get('/:id(\\d+)/comments', asyncHandler(async (req, res) => {
    const comments = await Comment.findAll({
        where: {
            songId: req.params.id
        }
    })
    res.json(comments)
}))

module.exports = router;
