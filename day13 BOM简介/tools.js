//给函数添加可以上下移动，改变高度的功能
function move(box,attr,target,speed,callback) {
    clearInterval(box.timer);
    //提前判断目标和当前元素的位置关系，speed的值可直接输入正数
    let oldValue = parseInt(getStyle(box, attr));
    if (target < oldValue) {
        speed = -speed
    }

    box.timer = setInterval(function () {
        let oldValue = parseInt(getStyle(box, attr));
        let newValue = oldValue + speed;

        //判断移动的目标是否到位
        if (speed > 0 && newValue > target || speed < 0 && newValue < target) {
            newValue = target
        };
        box.style[attr] = newValue + 'px';
        
        if (newValue == target) {
            clearInterval(box.timer);
            callback();//该回调函数可以再前一个动画执行完毕后执行
        }
    },30)
}

function getStyle(ele, style) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(ele, null)[style];
    }
    return ele.currentStylr[style];
};