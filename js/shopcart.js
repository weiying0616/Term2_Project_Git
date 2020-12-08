/*
*购物车JS文件
2020.12.6
魏滢
*/
//定义三个变量
$(function(){


var $theadInput = $('table thead input[type=checkbox]'); //头部选择框
var $bodyInput = $('table tbody input[type=checkbox]');//中间选择框
var $allPriceInput = $('.totalPrice input[type=checkbox]');//结算选择框


$theadInput.change(function(){
    var state = $(this).prop('checked');

    $bodyInput.prop('checked',state);
    $allPriceInput.prop('checked',state);

    //调用计算总价函数
    calcTotalPrice();
})

$allPriceInput.change(function(){
    var state = $(this).prop('checked');

    $bodyInput.prop('checked',state);
    $theadInput.prop('checked',state);

    //调用计算总价函数
    calcTotalPrice();
})

$bodyInput.change(function(){
    //顶一个标杆
    var flag = true;
    //总价
    

    //循环表格中所有选择框的的选中状态
    $bodyInput.each(function(i,input){
        if (!$(input).prop('checked')){
            flag = false;
        }
    })

    $theadInput.prop('checked',flag)
    $allPriceInput.prop('checked',flag)

    //调用计算总价函数
    calcTotalPrice();

})

//数量的加减功能
//加
$('.add').on('click',function(){
    var $nextInput = $(this).next();

    var oldVal = parseInt($nextInput.val());

    oldVal++;

    $nextInput.val(oldVal);

    subTotalPrice(oldVal,$(this)); 

    //调用计算总价函数
    calcTotalPrice();
})

//减
$('.reduce').on('click',function(){
    var $prevInput = $(this).prev();

    var oldVal = parseInt($prevInput.val());

    oldVal--;
    oldVal = oldVal < 1 ? 1 : oldVal;

    $prevInput.val(oldVal);

    subTotalPrice(oldVal,$(this));    

    //调用计算总价函数
    calcTotalPrice();
})

//抽取一个小计的函数
    function subTotalPrice(oldVal,dom){
        var subtotal = oldVal * parseFloat( dom.closest('tr').find('.price').text());
        dom.closest('tr').find('.subprice').text(subtotal.toFixed(2));
    }

//删除
$('.del').click(function(){
    $(this).closest('tr').remove();
    calcGoodsCount();
})


 //计算总价的函数
 function calcTotalPrice(){
     var count = 0;

     //定义变量 保持总价格
     var totalPrice = 0;

     console.log(totalPrice)

     $('table tbody input[type=checkbox]').each(function(i,input){
         if($(input).prop('checked')){
             count ++
             //累加价格
             totalPrice += parseFloat ( $(input).closest('tr').find('.subprice').text())
         }
     })

     console.log(totalPrice)

     //把总价渲染到对应位置
     $('.total').text( totalPrice.toFixed(2) )

     $('.count').text(count)

 }


 //全部商品
 function calcGoodsCount(){
      $('.goodsCount').text($('table tbody tr').length)
 }
 calcGoodsCount();
//删除选中商品
$('.deleteChecked').on('click',function(){
    $bodyInput.each(function (i,input){
        if($(this).prop('checked')){
            $(this).closest('tr').remove();
        }
    })

    //计算总价
    calcTotalPrice();
    //计算商品数量
    calcGoodsCount();
})


})