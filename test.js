const mongoose=require('mongoose')

const Post=require('./models/Post')

mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db',{
    useNewUrlParser:true,
    useUnifiedTopology: true
  
})

Post.create({
    title:'Benim ilk Post Başlığım Denemesi',
    content:'Post içeriği, lorem ipsum text'
}, (error, post)=>{
    console.log(error,post)

})