onload = function () {
    var rotates = document.getElementsByClassName("img_center");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var box = document.getElementById("wapper2");
    var ul = document.getElementById("ullist");
    var li = ul.getElementsByTagName("li");
    var index = 0;
    var anCon = function () {
        index--;
        index = index == -1 ? 2 : index;
        for (var i = 0; i < rotates.length; i++) {
            rotates[i].style.opacity = 0;
        }
        rotates[index].style.opacity = 1;
        //焦点切换
        for (var j = 0; j < li.length; j++) {
            li[j].style.background = "none";
        }
        li[index].style.background = "#fff";
    }
    var time = setInterval(anCon, 2000);
    box.onmouseover = function () {
        clearInterval(time);
    }
    box.onmouseout = function () {
        time = setInterval(anCon, 2000);
    }
    //点击左箭头
    left.onclick = function () {
        anCon();
    }
    //点击右箭头
    right.onclick = function () {
        index++;
        index = index == 3 ? 0 : index;
        for (var i = 0; i < rotates.length; i++) {
            rotates[i].style.opacity = 0;
        }
        rotates[index].style.opacity = 1;
        //焦点切换
        for (var i = 0; i < li.length; i++) {
            li[i].style.background = "none";
        }
        li[index].style.background = "#fff";
    }
    //循环滚动
    var scr = document.getElementById("scr");
    var scoroll = document.getElementById("scroll");
    var scoroll2 = document.getElementById("scroll2");
    scoroll2.innerHTML = scoroll.innerHTML;
    var scrolls = function () {
        if (scr.scrollTop >= scoroll.offsetHeight) {
            scr.scrollTop = 0;
        } else {
            scr.scrollTop++;
        }
    }
    var scrolltime = setInterval(scrolls, 50);
    scr.onmouseover = function () {
        clearInterval(scrolltime);
    }
    scr.onmouseout = function () {
        scrolltime = setInterval(scrolls, 50);
    }
}