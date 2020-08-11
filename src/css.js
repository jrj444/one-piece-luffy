const string = `/* 这是一个通过JavaScript实现的
  * 自动画出一面草帽海贼旗的项目
  * 下面的代码将会展示出来，注意看屏幕的下半部分
  * 此外在右边还有四个按钮可以点击
  * 实现暂停、播放、常速和加速播放的功能
  * 让我们开始吧
  */
  
  .flag {
  width: 100%;
  height: 100%;
  position: relative;
  background: black;
  z-index: 1;
}

/* 先画两根骨头在最下面
 * 一根骨头可以用一个矩形和四个圆形来完成
 */
 
.bone-1, .bone-2 {
  position: absolute;
  width: 100px;
  height: 100px;
  left: 50%;
  margin-left: -50px;
  top: 50%;
  margin-top: -50px;
  z-index: 2;
}

.rectangle {
  background: #fff;
  width: 16em;
  height: 1.5em;
  position: absolute;
  left: 50%;
  margin-left: -8em;
  top: 50%;
}

.bone-1 > .rectangle {
  transform: rotate(35deg);
}

.bone-2 > .rectangle {
  transform: rotate(-35deg);
}

.circle {
  position: absolute;
  width: 1.5em;
  height: 1.5em;
  background: #fff;
  border-radius: 0.75em;
}

.left-top {
  left: -0.8em;
  top: -0.5em;
}

.left-bottom {
  left: -0.8em;
  bottom: -0.5em;
}

.right-top {
  right: -0.8em;
  top: -0.5em;
}

.right-bottom {
  right: -0.8em;
  bottom: -0.5em;
}

.head {
  width: 150px;
  height: 150px;
  position: absolute;
  left: 50%;
  margin-left: -75px;
  top: 50%;
  margin-top: -75px;
  border-radius: 75px;
  z-index: 3;
}

/* 接下来是帽子
 * 一个简单的半圆形
 */

.hat {
  width: 8em;
  height: 4em;
  position: absolute;
  left: 50%;
  margin-left: -4em;
  top: 25px;
  border-radius: 4em 4em 0 0;
  background: #f7b600;
  border: 5px solid black;
  border-bottom: none;
  z-index: 4;
}

/* 然后是草帽上面的红色边带
 * 用了一个伪元素来做
 */

.hat::before {
  content: '';
  width: 8em;
  height: 2.4em;
  position: absolute;
  left: 50%;
  margin-left: -4em;
  border: 5px solid black;
  border-bottom: none;
  background: red;
  bottom: 0;
  border-top-left-radius: 25px 50px;
  border-top-right-radius: 25px 50px;
}

/* 接着就是帽檐了
 * 用一个椭圆形
 * 结合 z-index 放在帽子的上层
 */

.hat-brim {
  width: 12em;
  height: 2.2em;
  position: absolute;
  border: 5px solid #000;
  left: 50%;
  margin-left: -6em;
  top: 3.8em;
  border-radius: 50%;
  background: #f7b600;
  z-index: 5;
}

/* 接下来同样是一个椭圆形的额头
 * 以及一个半圆形的脸
 * 通过 z-index 来结合两个图形
 */

.forehead {
  position: absolute;
  width: 8em;
  height: 2em;
  left: 50%;
  margin-left: -4em;
  background: white;
  top: 4.4em;
  border-radius: 100%;
  border: 5px inset black;
  z-index: 6;
}

.face {
  width: 8em;
  height: 4em;
  position: absolute;
  left: 50%;
  margin-left: -4em;
  bottom: 0;
  border-radius: 0 0 4em 4em;
  background: #fff;
  border: 5px solid #000;
  border-top: none;
  z-index: 6;
}

/* 两个骷髅头的眼睛
 * 和鼻子
 */

.eye {
  width: 2.4em;
  height: 2.4em;
  background: #000;
  border-radius: 50%;
  border: 5px solid #000;
  position: absolute;
  left: 50%;
  top: 2px;
  margin-left: -1.2em;
  z-index: 2;
}

.eye.left {
  transform: translateX(-1.5em);
}

.eye.right {
  transform: translateX(1.5em);
}

.nose {
  width: 1.2em;
  height: 1.2em;
  background: #000;
  border-radius: 50%;
  border: 5px solid #000;
  position: absolute;
  left: 50%;
  margin-left: -0.6em;
  top: 2.2em;
  z-index: 2;
}

/* 最后是最麻烦的下巴
 * 以及牙齿的部分
 */

.chin {
  height: 100px;
  width: 100px;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  top: 50%;
  margin-top: -50px;
}

.jaws {
  position: absolute;
  width: 5em;
  height: 6em;
  background: white;
  border: 5px solid black;
  border-radius: 20em 20em 30em 30em;
  left: calc(50% - 2.5em);
  top: 5.5em;
  overflow: hidden;
}

.lower-jaw {
  width: 10em;
  position: absolute;
  left: calc(50% - 5em);
  top: -2.8em;
  background: black;
  border: 5px solid black;
  border-bottom: none;
  height: 125%;
  border-radius: 50%;
  overflow: hidden;
  transition: all 0.2s 0s linear;
}

.black {
  width: 100%;
  height: 100%;
  position: absolute;
  top: -1.1em;
  border-radius: 50%;
  background: black;
  border: 5px solid black;
  z-index: 1;
}

/* 同样是使用 z-index
 * 利用 div 画出牙齿部分
 */

.lower-teeth {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  border-radius: 50%;
  background: white;
  border: 5px solid black;
}

.upper-teeth {
  width: 200%;
  height: 125%;
  left: -50%;
  position: absolute;
  top: -70%;
  border-radius: 50%;
  background: white;
  border: 5px solid black;
  z-index: 2;
  overflow: hidden;
}

.gum1 {
  height: 10em;
  width: 1em;
  border-radius: 50%;
  border-left: 5px solid black;
  position: absolute;
  left: 32%;
  top: 45%;
  z-index: 2;
}

.gum2 {
  height: 10em;
  width: 0;
  border-radius: 50%;
  border-left: 5px solid black;
  position: absolute;
  left: 45%;
  top: 45%;
  z-index: 2;
}

.gum3 {
  height: 10em;
  width: 1em;
  border-radius: 50%;
  border-right: 5px solid black;
  position: absolute;
  left: 52%;
  top: 45%;
  z-index: 2;
}

/* 最后添加上鬼畜的动画
 * 让嘴巴动起来
 * 感谢观看 完
 */

@keyframes bite {
  0% {transform: translate3d(0, 0, 0);}
  50% {transform: translate3d(0, .8em, 0);}
  100% {transform: translate3d(0, 0, 0);}
}

.lower-jaw {
  animation: bite 1000ms infinite linear;
}
`;

export {string};