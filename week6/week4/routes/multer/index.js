const express = require('express');
const router = express.Router();
//const multer = require('multer');
const upload = require('../../modules/multer');
//const upload = multer({
  dest: 'upload/'
//});


// one image
router.post('/single', upload.single('image'), async (req, res) => { //postman에서 설정해준 key 값이랑 Multer Fieldname이랑 동일해야함
  const image = req.file.location;
  console.log(req.file);
  console.log(req.body);
  res.send({
    imageUrl: image,
    file: req.file,
    body: req.body
  });
});

// array of image
// upload.array(KEY NAME, MAX item )
router.post('/array', upload.array('images', 3), async (req, res) => {
  const imageUrls = req.files.map(file => file.location);
  console.log(req.files);
  console.log(req.body);
  res.send({
    imageUrls: imageUrls,
    file: req.files,
    body: req.body
  });
});

module.exports = router;