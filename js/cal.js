//判断是否已经存在小数点
var decimalAdded = false;
//判断是否需要重新输入
var refill = false;
//运算符号
var opertaors = ['+','-','x','÷'];
function addKey()
{
	var keys = document.querySelectorAll('#calculator span');
	for(var i =0;i<keys.length;i++)//添加方法
	{
		keys[i].onclick=function keyMethod()
		{
			/*获取按键信息*/
			var num = this.innerHTML;
			//屏幕信息
			var inputVal = document.querySelector('.screen').innerHTML;
			//获得屏幕
			var input = document.querySelector('.screen');

			if(inputVal.length>15)
			{
				document.querySelector('.screen').style.fontSize='80%';
			}
			else if(inputVal.length>30)
			{
				document.querySelector('.screen').style.fontSize='40%';
			}

			//清除
			if(num == 'C')
			{
				input.innerHTML='';
				decimalAdded = false;
				refill=false;
			}

			//等号
			else if(num == '=')
				{
					var equal = inputVal;
					var lastChar = equal[equal.length-1];

					//最后一位是运算符或者小数点
					if(opertaors.indexOf(lastChar)!=-1 || lastChar=='.')
						equal.replace(/.$/,'')//去掉小数点

					equal = equal.replace(/x/g,'*').replace(/÷/g,'/');
					if(equal)
						input.innerHTML=eval(equal);
					//判断是否为小数
					if(input.innerHTML.indexOf('.')!=-1)
						decimalAdded = true;
					else
						decimalAdded = false;
					//重新算数
					refill=true;
				}

			//运算符号
			else if(opertaors.indexOf(num)>-1)
			{
				var lastChar = inputVal[inputVal.length-1];
				//非运算符直接添加
				if(opertaors.indexOf(lastChar)==-1)
					input.innerHTML+=num;
				
				//负数
				else if(inputVal=='' && lastChar=='-')
					input.innerHTML+=num;
				//已经存在运算符
				else if(opertaors.indexOf(lastChar)!=-1 && inputVal.length>1) 
				{
					input.innerHTML=inputVal.replace(/.$/,num);
					
				}
				decimalAdded = false;
				refill=false;
			}

			//已经存在一位小数点
			else if(num =='.')
				{
					if(!decimalAdded)
					{
						input.innerHTML+=num;
						decimalAdded=true;
						refill=false;
					}
				}

			//一般情况,判断是否已经等于运算过
			else if(refill==false)
			{
				input.innerHTML+=num;
			}
			else if(refill==true)
			{
				input.innerHTML=num;
				refill=false;//正常状态
			}
		}
	}
}



//监听键盘
document.onkeydown=function keyDown(e)
        { 
        	//兼容FF /IE/Chrome
    		var keys = document.querySelectorAll('#calculator span');
            e=e||event; 
            var keyCode = e.keyCode||e.which||e.charCode;
            switch(keyCode)
            {
            	case 103:
            		keys[1].click();
            		break;
            	case 104:
            		keys[2].click();
            		break;
            	case 105:
            		keys[3].click();
            		break;
            	case 107:
            		keys[4].click();
            		break;
            	case 100:
            		keys[5].click();
            		break;
            	case 101:
            		keys[6].click();
            		break;
            	case 102:
            		keys[7].click();
            		break;
		     	case 109:
            		keys[8].click();
            		break;
            	case 97:
            		keys[9].click();
            		break;
            	case 98:
            		keys[10].click();
            		break;
            	case 99:
            		keys[11].click();
            		break;
            	case 106:
            		keys[12].click();
            		break;
            	case 96:
            		keys[13].click();
            		break;
		     	case 110:
            		keys[14].click();
            		break;
				case 13:
					keys[15].click();
					break;
		     	case 111:
            		keys[16].click();
            		break;
            	default:
            		break;
            }          
        } 