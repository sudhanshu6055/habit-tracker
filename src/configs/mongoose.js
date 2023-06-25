const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/sudhanshu',{
useNewUrlParser:true,useUnifiedTopology:true
},)
  .then(() => console.log('Connected!'))
  .catch((err)=>{console.error(err);});