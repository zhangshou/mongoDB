//导入mongoose模块
var mongoose=require('mongoose');
//连接数据库
mongoose.connect('mongodb://127.0.0.1/nodeblog');
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

//create可以保存一个文档,会把保存后的文档传给result参数
PersonModel.create({
    name:'张三',
    birthday:new Date(),
    gender:'男',
    home:'北京'
}, function (err,result) {
     console.log(result);
});
/*{ __v: 0,
    name: '张三',
    birthday: 2016-11-19T04:00:16.848Z,
    gender: '男',
    _id: 582fce5019f0b143fc1d0570 }*/
//find用于查找  参数1表示查找的条件  参数2表示回调函数
PersonModel.find({name:'张三'}, function (err,data) {
    console.log(data);
});
//更新操作   参数1表示更新的条件  参数2表示更新的字段   multi:true表示匹配到几个更新几个
PersonModel.update({name:'张三'},{gender:'女'},{multi:true}, function (err,result) {
    console.log(result);
});
//删除文档   会删除所有匹配的记录
PersonModel.remove({gender:'女'}, function (err,result) {
    console.log(result);
});