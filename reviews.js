var express = require('express');
var router = express.Router();


let dummyreview = { reviewName: 'test adder', reviewMessage: 'This is a test adder' };

let reviews = [
    { reviewName: 'Santa Ono', reviewMessage: 'Brent is a swell guy. I would give him an A.'},
    { reviewName: 'Donald J. Trump', reviewMessage: 'See, this guy, he\'s, I don\'t much care for Brad, when he sits, you see you have to understand, he is not a good guy, so he sits up there up there, you know when he does, on the computer, he isn\'t that smart or bigly smart, not smart like me.'},
    { reviewName: 'Steven Spielberg', reviewMessage: 'There\'s no way that you are going to get a quote from me to put on your website.'},
    { reviewName: 'Brent\'s mom', reviewMessage: 'He\'s such a handsome young man.' }
];

/* GET reviews initial data */
router.get('/', (req, res, next) => {
    res.send(reviews);
});

/* POST reviews. */
router.post('/', (req, res, next) => {
    const newUser = req.body;
    console.log("POSTING...");
    console.log(req.body);
    reviews = [...reviews, req.body];
    res.send(reviews);
});

/* POST MESSAGE -TYPE INTO TERMINAL
 *
 *curl -d "reviewName"="a","reviewMessage"="b" -X POST localhost:5000/reviews
 */


module.exports = router;