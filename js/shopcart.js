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
})

$allPriceInput.change(function(){
    var state = $(this).prop('checked');

    $bodyInput.prop('checked',state);
    $theadInput.prop('checked',state);
})

$bodyInput.change(function(){
    var flag = true;

    var totalPrice = 0;

    $bodyInput.each(function(i,input){
        if (!$(input).prop('checked')){
            flag = false;
        }else{
            totalPrice += parseFloat ($(this).closest('tr').find('.subprice').text());
        }
    })

    $theadInput.prop('checked',flag)
    $allPriceInput.prop('checked',flag)

    //渲染到总价对应的位置
    $('.total').text(totalPrice.toFixed(2))
})

//数量的加减功能
//加
$('.add').on('click',function(){
    var $nextInput = $(this).next();

    var oldVal = parseInt($nextInput.val());

    oldVal++;

    $nextInput.val(oldVal);

    subTotalPrice(oldVal,$(this)); 
})

//减
$('.reduce').on('click',function(){
    var $prevInput = $(this).prev();

    var oldVal = parseInt($prevInput.val());

    oldVal--;
    oldVal = oldVal < 1 ? 1 : oldVal;

    $prevInput.val(oldVal);

    subTotalPrice(oldVal,$(this));    
})

//抽取一个小计的函数
    function subTotalPrice(oldVal,dom){
        var subtotal = oldVal * parseFloat( dom.closest('tr').find('.price').text());
        dom.closest('tr').find('.subprice').text(subtotal.toFixed(2));
    }

//删除
$('.del').click(function(){
    $(this).closest('tr').remove();
})

//计算总价
//$bodyInput.each(function(i,input){
  //  var totalPrice = 0;

    //if ($(input).prop('checked')){
      //  totalPrice += parseFloat ($(this).closest('tr').find('.subprice').text());
    //}
//})

})