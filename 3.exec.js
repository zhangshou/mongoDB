var persons = {
    data: [{age: 1}, {age: 2}, {age: 3}, {age: 4}, {age: 5}, {age: 6}, {age: 7}, {age: 8}, {age: 9}, {age: 10}],
    skip(num){
        this._skip=num;
        return this;
    },
    limit(num){
        this._limit=num;
        return this;
    },
    sort(sortObj){
        var attr=Object.keys(sortObj)[0];//先取出排序的字段
        var order=sortObj[attr];//在取出升序还是降序
        this._sort= function (a,b) {
            return (a[attr]-b[attr])*order;
        };
        return this;
    },
    exec(cb){
        cb(null,this.data.sort(this._sort).slice(this._skip,this._skip+this._limit));
    }
};
persons.skip(6).sort({age:-1}).limit(3).exec(function(err,result){
    console.log(result);//[ { age: 4 }, { age: 3 }, { age: 2 } ]
});
