// ==UserScript==
// @name         FuckCoco2D
// @version      1.0.1-20241215
// @description  让题目逆转吧！iCode
// @author       guoyujie666
// @match        https://ide.icode.org.cn/*
// @icon         https://static.icode.org.cn/assets/zone/static/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.onkeydown=function(event){
        if(event.key=="F8"){
            var guanka;
            var bushu;
            var hangshu;
            var daima;
            var arr = ["Dev.step(3)","Dev.step(8)","Dev.turnLeft()","Dev.turnRight()"];
            daima = arr[Math.floor(Math.random()*3)];
            }
            guanka = prompt("关卡数（禁止为空或0，两分钟一关！如果误触请刷新页面，等级赛可无视）");
            bushu = prompt("步数（和关卡原步数相同）");
            hangshu = prompt("行数")
            adventureManager.updateGameInfo(
                {
                levelId: guanka,
                isClear: 1,
                totalTime: 396,
                codeTxt: daima,
                curLine: 1,
                configLine: hangshu,
                curSteps: bushu,
                configSteps: bushu,
                star: 3,
                isLastLevel: false,
                },
                () => {
                }
                );
        }
    }
)();
