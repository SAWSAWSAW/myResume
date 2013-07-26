		/*清除置顶*/
		function clearOver()
		{
			/*清除页面*/
			var div = document.querySelectorAll('div.over')[0];
			if(div != undefined)
				div.className='';
			/*清除导航*/
			var list = document.querySelectorAll('li.active')[0];
			/*根据条件改回原来的className*/
			if(list != undefined)
			{
				if(list.id!='logo'|| undefined)
					list.className='nav';
				else
					list.className='tooltip navy-tooltip';
			}
		}

		/*点击上一页*/
		function showPrev()
		{	
			var pastPage = document.querySelectorAll('div.over')[0].previousSibling;
			if(pastPage.nextSibling.id=='main') 
				pastPage = document.querySelector('div#demos');
			else if((pastPage!=null || undefined))
			{
				while(pastPage.nodeType!=1 )
				{
					pastPage=pastPage.previousSibling;
				}
			}
			clearOver();
			showPage(pastPage);
		}

		/*点击下一页*/
		function showNext()
		{
			var nextPage = document.querySelectorAll('div.over')[0].nextSibling;
			if(nextPage.previousSibling.id=='demos')
				nextPage=document.querySelector('div#main');
			else if(nextPage!=null || undefined)
			{
				while(nextPage.nodeType!=1)
				{
					nextPage=nextPage.nextSibling;
				}
			}
			clearOver();
			showPage(nextPage);
		}

		/*换页，主要功能是加亮文字*/
		function showPage(page)
		{
			/*换页*/
			page.className='over';
			/*后代选择h1*/
			var obj = page.getElementsByTagName('h1')[0].innerHTML;
			var nav = document.querySelectorAll('ul#header li');
			if(obj =='叶福永')
				nav[0].className+=' active';
			else if(obj=='校园活动')
				nav[1].className+=' active';
			else if(obj=='培训经历')
				nav[2].className+=' active';
			else if(obj=='更多信息')
				nav[3].className+=' active';
		}

		/*导航换页*/
		function alterPage(e)
		{
			var e=e||window.event;
			var obj = e.target.innerHTML||e.srcElement.innerHTML;
			console.log(e.target);
			/*点击的是导航上的字或者图标才有反应*/
			if(e.target.tagName!='UL')
			{
				clearOver();
				if(obj =='首页')
					document.getElementById('main').className+='over';
				else if(obj=='校园活动')
					document.getElementById('schooling').className+='over';
				else if(obj=='培训经历')
					document.getElementById('training').className+='over';
				else if(obj=='更多信息')
					document.getElementById('activities').className+='over';
				else if(e.target.tagName=='IMG' || 'SPAN')
					document.getElementById('demos').className+='over';
				/*选中后高亮*/
				e.target.className+=' active';
			}			
		}
		
		//键盘快捷键
		document.onkeydown=function keyDown(e)
        { 
        	//兼容FF /IE/Chrome
    		var e=e||event; 
            var keyCode = e.keyCode||e.which||e.charCode;
              /*小箭头向右*/
            if(keyCode==39)
            	showNext();
            /*小箭头向左*/
        	else if(keyCode==37)
        		showPrev();
        }

    	/*滚动滑动页面*/
		var scrollFunc = function(e)
		{
			var direct= 0;
			e=e|| window.event;
			/*ie/chrome*/
			if(e.wheelDelta)
				direct = e.wheelDelta;
			else if(e.detail)/*firefox*/
				direct = e.detail;
			scrollPage(direct);
		}

		/*判断是上滚还是下滚*/
		function scrollPage(direct)
		{
			/*chrome ie 120表示上滚，ff 是-3*/
			if(direct==120 || direct==-3)
				showPrev();
			else 
				showNext();
		}
		/*FF注册滚轮事件*/
		if(document.addEventListener)
			document.addEventListener('DOMMouseScroll',scrollFunc,false);
		/*IE/Chrome添加滚轮事件*/
		window.onmousewheel=scrollFunc;

		/*点击我知道了按钮，添加cookie，不再显示*/
		function closeWindow(obj)
		{
		  var parent = obj.parentNode;
		  parent.style.visibility='hidden'; 
		  writeCookie('gotit','yes',30);
		}

		/*判断是否显示尾部tooltip*/
		function showTooltip()
		{
			if (readCookie('gotit') != null)
				document.getElementById('middle-tooltip').style.visibility='hidden'; 
		}
		
		showTooltip();