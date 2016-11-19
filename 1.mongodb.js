//导入mongoose模块
var mongoose=require('mongoose');
//连接数据库
mongoose.connect('mongodb://localhost:27017/nodeblog');
//操作集合  先定义集合的骨架模型,定义一个集合的名称,集合字段的名称和类型
//规定的是此集合中的文档的名称和类型
var PersonSchema=new mongoose.Schema({
    name:String,
    birthday:Date,
    gender:String
},{collection:'person'});//定义此集合的名称
//在向此集合中存储文档的时候,会判断文档对象的属性名和类型是否匹配,如果属性名不匹配则过滤此字段,如果类型不匹配先回尝试进行类型转换,如果转换成功则保持,失败则报错

//在根据schema定义模型
var PersonModel=mongoose.model('Person',PersonSchema);



