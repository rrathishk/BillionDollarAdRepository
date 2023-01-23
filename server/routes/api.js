const express = require('express');
const router = express.Router();
const Advertisement = require('../models/advertisement');

router.post('/advertisement', (req, res) => {
    // Create a new advertisement
    const newAdvertisement = new Advertisement({
        image: req.body.image,
        name: req.body.name,
        details: req.body.details,
        pixelWidth: req.body.pixelWidth,
        pixelHeight: req.body.pixelHeight,
        disclaimer: req.body.disclaimer,
        termsAndConditions: req.body.termsAndConditions,
        cost: req.body.cost
    });

    // Save the advertisement to the database
    newAdvertisement.save()
        .then(advertisement => res.json(advertisement))
        .catch(err => res.status(400).json({error:err}));
});


router.get('/advertisements', (req, res) => {
    Advertisement.find()
        .then(advertisements => res.json(advertisements))
        .catch(err => res.status(400).json({error:err}));
});


router.get('/advertisements/:id', (req, res) => {
    Advertisement.findById(req.params.id)
        .then(advertisement => res.json(advertisement))
        .catch(err => res.status(400).json({error:err}));
});


router.patch('/advertisements/:id', (req, res) => {
    Advertisement.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(advertisement => res.json(advertisement))
        .catch(err => res.status(400).json({error:err}));
});

router.delete('/advertisements/:id', (req, res) => {
    Advertisement.findByIdAndDelete(req.params.id)
        .then(() => res.json({success: true}))
        .catch(err => res.status(400).json({error:err}));
});

module.exports = router;

