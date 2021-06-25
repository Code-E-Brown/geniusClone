const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Song, Artist, Tag, Comment, Annotation } = require('../../db/models')
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
        include: [Artist, Tag, Annotation]
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
router.post('/:id(\\d+)/annotations', requireAuth, asyncHandler(async (req, res) => {
    // let { id } = req.params.id
    // id = +id
    // console.log(id, typeof id
    console.log(req.params.id, typeof +req.params.id)
    const song = await Song.findByPk(+req.params.id)
    console.log(song)
    console.log(req.body)
    lyricsArray = song.lyrics.split('</p>')
    // console.log(lyricsArray)
    const annotation = await Annotation.build({
        userId: req.user.id,
        songId: +req.params.id,
        body: req.body.annotationText,
    })

    await annotation.save()


    let newArray = []
    lyricsArray.forEach((line => {
        if (line.includes(req.body.fullLine)) {
            // console.log('includesFulllLine')
            // console.log(line)
            // line.replace(req.body.selection, `<a>${req.body.selection}</>`)
            newArray.push(line.replace(req.body.selection, `<a id=${annotation.id} href='/annotations/${annotation.id}'>${req.body.selection}</a>`))
        } else {
            newArray.push(line)
        }
    }))
    // console.log('newkid', newArray.join('</p>'))
    let newLyrics = newArray.join('</p>')

    await song.update({
        lyrics: newLyrics
    })

    // console.log(newAnnotation)
    res.json(annotation)
}))

module.exports = router;
