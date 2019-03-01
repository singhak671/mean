var router = require("express").Router();

var bookController = require('../controller/bookController');

router.get('/',(req, res, next)=>{
res.send("Express Restfull api");
});

router.post('/',bookController.saveData);
router.get('/',bookController.getAllBook);
router.get('/:id',bookController.getSingleBook);
router.put('/:id',bookController.updateBook);
router.delete('/:id',bookController.deleteBook);

module.exports = router;
