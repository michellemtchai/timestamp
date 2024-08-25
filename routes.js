var express = require('express');
const router = express.Router();

const formatDate = (date)=>{
  if(parseInt(date).toString() == date){
    return parseInt(date);
  }
  else{
    return date;
  }
}
router.get('/timestamp', (req,res)=>{
  let date = new Date();
  res.json({
    unix: date.getTime(), 
    utc: date.toUTCString() 
  });
});
router.get('/timestamp/:date_string', (req,res)=>{
  let date = new Date(formatDate(req.params.date_string));
  if(isNaN(date.getTime())){
    res.json({
      error : "Invalid Date" 
    });
  }
  else{
    res.json({
      unix: date.getTime(), 
      utc: date.toUTCString() 
    });
  }
});
//---------- DO NOT EDIT BELOW THIS LINE --------------------

module.exports = router;
