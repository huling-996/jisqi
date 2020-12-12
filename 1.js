function xshishuru(){
    return document.getElementById('xshishuru-val').innerText;
}

function xshishuchu(){
    return document.getElementById('xshishuchu-val').innerText;
}

function prinxshishuru(num){
    document.getElementById('xshishuru-val').innerText=num;
}
function prinxshishuchu(num){
    document.getElementById('xshishuchu-val').innerText=num;
}
/*主要逻辑函数*/
function luojipduan(num){
    if(num=='clear'){
        prinxshishuru('');
        prinxshishuchu('');
    }else if(num=='backspace'){
        prinxshishuchu(backspace());
    }else if(num=='/' ||num=='*'||num=='-'||num=='+'||num=='='){
        var numl=xshishuru().substr(-1,1);/*取出上栏显示的最后一位*/
        var numa=num;/*用于当num='='；时*/
        if (numl=='/' ||numl=='*'||numl=='-'||numl=='+') {/*用于无法连续输入运算符*/
            num='';
            
        }

        var crushuru=xshishuru()+xshishuchu()+num;
        prinxshishuru(crushuru);
        prinxshishuchu('');

        if (numa=='=') {/*用于计算*/
            var jisuan=xshishuru();
            jisuan=jisuan.slice(0,jisuan.length);
            jisuan=eval(jisuan);
            prinxshishuru('');
            prinxshishuchu(jisuan);
        }
    }else{
        prinxshishuchu(num);
    }
    
}
/*CE按键功能*/
function backspace(){
    var xshishuchutext;
    if (xshishuchu()=='') {
        xshishuchutext=xshishuru();
        xshishuchutext=xshishuchutext.slice(0,xshishuchutext.length-1);
        prinxshishuru('');
        return xshishuchutext
    } else {
        xshishuchutext=xshishuchu();
        xshishuchutext=xshishuchutext.slice(0,xshishuchutext.length-1);
        return xshishuchutext
    }  
}




var numbe=document.getElementsByClassName('numbe');
for(let k=0;k<numbe.length;k++){
    numbe[k].addEventListener('click',function(){
        var numtext=xshishuchu()
        numtext+=this.id;
        luojipduan(numtext);
    })
}

var operator=document.getElementsByClassName('operator');
for(let k=0;k<operator.length;k++){
    operator[k].addEventListener('click',function(){
        luojipduan(this.id);
    })
}