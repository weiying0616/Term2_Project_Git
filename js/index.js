/*首页js 
2020.10.25 by魏滢
*/
//当页面加载完毕
$(function(){
    /*首页大图轮播 */
    $('#banner').tyslide({
        boxh:460,//盒子的高度
        w:1000,//盒子的宽度
        h:390,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:40,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:20,//控制按钮高度
        radius:10,//控制按钮圆角度数
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
        isShowNum:true //是否显示数字
    });
    /*图书电子书小轮播*/
    $('#ebooks-banner').tyslide({
        boxh:223,//盒子的高度
        w:332,//盒子的宽度
        h:223,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:2,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
    });
	
	$('#clothes-banner').tyslide({
        boxh:286,//盒子的高度
        w:384,//盒子的宽度
        h:286,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:2,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
    });
	
	$('#sport-banner').tyslide({
        boxh:286,//盒子的高度
        w:384,//盒子的宽度
        h:286,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:2,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
    });
	
	$('#children-banner').tyslide({
        boxh:286,//盒子的高度
        w:384,//盒子的宽度
        h:286,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:2,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
    });
	
    /* 新书列表手风琴效果*/
    $('.ebooks .right-box ul > li').mouseenter(function(){
        //所有兄弟：隐藏属性 显示标题
        $(this).siblings().find('.desc').hide();//隐藏属性
        $(this).siblings().find('.ebooks-title').show();//显示标题

        //当前：隐藏标题 显示详情
        $(this).find('ebooks-title').hide();//隐藏标题
        $(this).find('.desc').show();//显示详情      
    });

    /*推广商品切换 */
    $('.promotion .promotion-title ul li').mouseenter(function(){
        //导航激活类的切换
        $(this).addClass('active').siblings().removeClass('active')
        
        //内容切换
        //获取对应的索引
        var index = $(this).index();
        //左右移动
		$('.promotion .promotion-content .inner-box').animate({
			'left': -index *1170
			},300)
    });
	
	
	/*返回顶部*/
	$(window).scroll(function(){  //只要窗口滚动,就触发下面代码

        var scrollt = document.documentElement.scrollTop + document.body.scrollTop; //获取滚动后的高度

        if( scrollt >200 ){  //判断滚动后高度超过200px,就显示

            $(".back_top").fadeIn(400); //淡入

        }else{

            $(".back_top").stop().fadeOut(400); //如果返回或者没有超过,就淡出.必须加上stop()停止之前动画,否则会出现闪动

        }

    });

    $(".back_top").click(function(){ //当点击标签的时候,使用animate在200毫秒的时间内,滚到顶部

        $("html,body").animate({scrollTop:"0px"},200);

    }); 
    
    $('.qr-code .ticket').hover(function(){
        $('.qr-code div').stop(true).animate({
            left: '-100px'
        })
    },function(){
            $('.qr-code div').stop(true).animate({
                left: 0
            })
    });

    /*顶部搜索框交互*/
    $(document).scroll(function(){
        var topDistance = $('html,body').scrollTop();
        if(topDistance > 500){
            $('.top-search-box').slideDown(300)
            
        }else{
            $('.top-search-box').slideUp(300)
        }
    });


    /*楼梯跳转 */
    $('.floor li').click(function(){
        //获取索引
        var index = $(this).index();
        //选中
        var topOffset = $('.floorBox').eq(index).offset().top;
        //让滚动条滚到这个位置
        $('html,body').animate({
            scrollTop:topOffset - 50
        })
    })

});
