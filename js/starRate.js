/*
封装星级评分函数
2020.12.16
魏滢
*/
$(function(){

    //写一个创建星星评分的函数 挂在window上
    window.createStarRate = function(score){
    //$.fn.createStarRate = function(score){   //原型扩展
    //满星
    var on = '<span class="on iconfont icon-xingxing"></span>';
    //半星
    var half = '<span class="half iconfont icon-star-half"></span>';
    //灰色星星
    var off = '<span class="off iconfont icon-xingxing"></span>';
    // 样式
    /*$(on).css({
        fontSize: '50px',
        color: 'gold'
    })
    $(half).css({
        fontSize: '42px',
        color: 'gold'
    })
    $(off).css({
        fontSize: '50px',
        color: '#ccc'
    })*/

    //计算分数
    var calcScore = Math.floor(score * 2) / 2;
    //计算满星
    var onCount = Math.floor(calcScore);
    //计算半星
    var isHasHalf = 0;
    if (calcScore % 1 !== 0) {
        var isHasHalf = 1;
    }
    //计算灰色星星
    var offCount = 5 - onCount - isHasHalf;

    //拼接结果
    var rst = '';
    //拼接满星
    for (var i = 0; i < onCount; i++){
        rst += on;
    }
    //拼接半个星星
    if (isHasHalf === 1){
        rst += half;
    }
    //拼接灰色星星
    for (var k = 0; k < offCount; k++){
        rst += off;
    }

    //返回
    return rst;



}
    
})