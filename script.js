$(function(){
var numOfCanvas = 4;
var canvasList = [];
var initProps = [
    {canvas:"canvas1",
     rotate_linear_v:Math.PI*0.075,
     rotateInEase:0.025,
     rotateOutEase:0.025},
    {canvas:"canvas2",
     rotate_linear_v:Math.PI*0.075,
     rotateInEase:0.025,
     rotateOutEase:0.025},
    {canvas:"canvas3",
     rotate_linear_v:Math.PI*0.075,
     rotateInEase:0.025,
     rotateOutEase:0.025},
    {canvas:"canvas4",
     rotate_linear_v:Math.PI*0.075,
     rotateInEase:0.025,
     rotateOutEase:0.025}
];
var loopPlay = true;
var stop = false;


function initSelections() {
    for(var i=0; i<numOfCanvas; i++) {
        switch (i) {
                case 0:
                /*canvas1 initial selections*/
                $("select[name='cvs1_shape']")[0].value = "rect";
                $("input[name='cvs1_stroke']")[0].checked = false;
                $("input[name='cvs1_posX_start']")[0].value = 100;
                $("input[name='cvs1_posY_start']")[0].value = -100;
                $("input[name='cvs1_posX_main']")[0].value = -100;
                $("input[name='cvs1_posY_main']")[0].value = 100;
                $("input[name='cvs1_posX_end']")[0].value = 200;
                $("input[name='cvs1_posY_end']")[0].value = 100;
                $("input[name='cvs1_r_start']")[0].value = 255;
                $("input[name='cvs1_g_start']")[0].value = 0;
                $("input[name='cvs1_b_start']")[0].value = 0;
                $("input[name='cvs1_a_start']")[0].value = "1.0";
                $("input[name='cvs1_r_main']")[0].value = 255;
                $("input[name='cvs1_g_main']")[0].value = 0;
                $("input[name='cvs1_b_main']")[0].value = 0;
                $("input[name='cvs1_a_main']")[0].value = "0.5";
                $("input[name='cvs1_r_end']")[0].value = 255;
                $("input[name='cvs1_g_end']")[0].value = 0;
                $("input[name='cvs1_b_end']")[0].value = 0;
                $("input[name='cvs1_a_end']")[0].value = "0.0";
                $("input[name='cvs1_scale_start']")[0].value = 100;
                $("input[name='cvs1_scale']")[0].value = 100;
                $("input[name='cvs1_scale_end']")[0].value = 100;
                $("input[name='cvs1_rot_reverse']")[0].checked = false;
                $("select[name='cvs1_rot_start']")[0].value = "none";
                $("select[name='cvs1_rot_end']")[0].value = "none";
                $("select[name='cvs1_rot_center']")[0].value = "object";
                $("input[name='random1']")[0].onclick = function(){randomize(1);};
                break;

                case 1:
                /*canvas2 initial selections*/
                $("select[name='cvs2_shape']")[0].value = "hexagon";
                $("input[name='cvs2_stroke']")[0].checked = false;
                $("input[name='cvs2_posX_start']")[0].value = 0;
                $("input[name='cvs2_posY_start']")[0].value = 0;
                $("input[name='cvs2_posX_main']")[0].value = 0;
                $("input[name='cvs2_posY_main']")[0].value = 0;
                $("input[name='cvs2_posX_end']")[0].value = 0;
                $("input[name='cvs2_posY_end']")[0].value = 0;
                $("input[name='cvs2_r_start']")[0].value = 0;
                $("input[name='cvs2_g_start']")[0].value = 255;
                $("input[name='cvs2_b_start']")[0].value = 0;
                $("input[name='cvs2_a_start']")[0].value = "1.0";
                $("input[name='cvs2_r_main']")[0].value = 0;
                $("input[name='cvs2_g_main']")[0].value = 255;
                $("input[name='cvs2_b_main']")[0].value = 0;
                $("input[name='cvs2_a_main']")[0].value = "0.5";
                $("input[name='cvs2_r_end']")[0].value = 0;
                $("input[name='cvs2_g_end']")[0].value = 255;
                $("input[name='cvs2_b_end']")[0].value = 0;
                $("input[name='cvs2_a_end']")[0].value = "0.0";
                $("input[name='cvs2_scale_start']")[0].value = 200;
                $("input[name='cvs2_scale']")[0].value = 150;
                $("input[name='cvs2_scale_end']")[0].value = 0;
                $("input[name='cvs2_rot_reverse']")[0].checked = true;
                $("select[name='cvs2_rot_start']")[0].value = "linear";
                $("select[name='cvs2_rot_end']")[0].value = "linear";
                $("select[name='cvs2_rot_center']")[0].value = "object";
                $("input[name='random2']")[0].onclick = function(){randomize(2);};
                break;

                case 2:
                /*canvas3 initial selections*/
                $("select[name='cvs3_shape']")[0].value = "ellipse";
                $("input[name='cvs3_stroke']")[0].checked = false;
                $("input[name='cvs3_posX_start']")[0].value = 0;
                $("input[name='cvs3_posY_start']")[0].value = 0;
                $("input[name='cvs3_posX_main']")[0].value = 100;
                $("input[name='cvs3_posY_main']")[0].value = 0;
                $("input[name='cvs3_posX_end']")[0].value = 0;
                $("input[name='cvs3_posY_end']")[0].value = 0;
                $("input[name='cvs3_r_start']")[0].value = 0;
                $("input[name='cvs3_g_start']")[0].value = 0;
                $("input[name='cvs3_b_start']")[0].value = 255;
                $("input[name='cvs3_a_start']")[0].value = "0.5";
                $("input[name='cvs3_r_main']")[0].value = 0;
                $("input[name='cvs3_g_main']")[0].value = 0;
                $("input[name='cvs3_b_main']")[0].value = 255;
                $("input[name='cvs3_a_main']")[0].value = "1.0";
                $("input[name='cvs3_r_end']")[0].value = 0;
                $("input[name='cvs3_g_end']")[0].value = 0;
                $("input[name='cvs3_b_end']")[0].value = 255;
                $("input[name='cvs3_a_end']")[0].value = "0.0";
                $("input[name='cvs3_scale_start']")[0].value = 10;
                $("input[name='cvs3_scale']")[0].value = 80;
                $("input[name='cvs3_scale_end']")[0].value = 1;
                $("input[name='cvs3_rot_reverse']")[0].checked = false;
                $("select[name='cvs3_rot_start']")[0].value = "linear";
                $("select[name='cvs3_rot_end']")[0].value = "easeOut";
                $("select[name='cvs3_rot_center']")[0].value = "canvas";
                $("input[name='random3']")[0].onclick = function(){randomize(3);};
                break;

                case 3:
                /*canvas4 initial selections*/
                $("select[name='cvs4_shape']")[0].value = "triangle";
                $("input[name='cvs4_stroke']")[0].checked = true;
                $("input[name='cvs4_posX_start']")[0].value = 75;
                $("input[name='cvs4_posY_start']")[0].value =75;
                $("input[name='cvs4_posX_main']")[0].value = -75;
                $("input[name='cvs4_posY_main']")[0].value = -75;
                $("input[name='cvs4_posX_end']")[0].value = 130;
                $("input[name='cvs4_posY_end']")[0].value = 130;
                $("input[name='cvs4_r_start']")[0].value = 100;
                $("input[name='cvs4_g_start']")[0].value = 100;
                $("input[name='cvs4_b_start']")[0].value = 100;
                $("input[name='cvs4_a_start']")[0].value = "1.0";
                $("input[name='cvs4_r_main']")[0].value = 255;
                $("input[name='cvs4_g_main']")[0].value = 100;
                $("input[name='cvs4_b_main']")[0].value = 100;
                $("input[name='cvs4_a_main']")[0].value = "1.0";
                $("input[name='cvs4_r_end']")[0].value = 100;
                $("input[name='cvs4_g_end']")[0].value = 100;
                $("input[name='cvs4_b_end']")[0].value = 255;
                $("input[name='cvs4_a_end']")[0].value = "1.0";
                $("input[name='cvs4_scale_start']")[0].value = 100;
                $("input[name='cvs4_scale']")[0].value = 200;
                $("input[name='cvs4_scale_end']")[0].value = 2;
                $("input[name='cvs4_rot_reverse']")[0].checked = "false";
                $("select[name='cvs4_rot_start']")[0].value = "easeOut";
                $("select[name='cvs4_rot_end']")[0].value = "easeIn";
                $("select[name='cvs4_rot_center']")[0].value = "object";
                $("input[name='random4']")[0].onclick = function(){randomize(4);};
                break;
        }
    }
}

window.onload = function() {
    insertSelections();
    initSelections();
    create();
    loop();
};

function create() {
    for(var i=0; i<numOfCanvas; i++) {
        var cvs = new Render(initProps[i]);
        canvasList.push(cvs);
    }
}

function insertSelections() {
    for(var i=0; i<numOfCanvas; i++) {
        $(".wrapper").append(makeTag({tagName:"div",
                                      attribute:'class="cnv-wrapper cvs'+(i+1)+'"',
                                      innerText:makeTag({tagName:"h1", innerText:"canvas animation"+(i+1)}) +
                                      makeTag({tagName:"canvas",
                                               attribute:'id="canvas'+(i+1)+'" width="300" height="300"'})}));
    }
    $(".wrapper .cnv-wrapper").append(makeTag({tagName:"div", attribute:'class="prop"'}));
    var cvsprop = $(".wrapper .cnv-wrapper .prop");
    for(var i=0; i<numOfCanvas; i++) {
        var cvs = $(".cnv-wrapper.cvs" + (i+1));
        cvs.prepend(makeTag({tagName:"input", attribute:'type="button" name="random' + (i+1) + '" value="ランダム値を設定"'}));
    cvsprop[i].innerHTML =
        makeTag( //シェイプ用selection
        {tagName:"div",
         attribute:'class="prop-wrapper shape"',
         innerText:"シェイプ（形）：" +
         makeTag(                 //make select
             {tagName:"select",
              attribute:'name="cvs' + (i+1) + '_shape"',
              innerText:'<option value="rect">正方形</option><option value="triangle">三角形</option><option value="ellipse">円</option><option value="hexagon">六角形</option>'}) +
         "　線：" +
         makeTag(
             {tagName:"input",
              attribute:'name="cvs' + (i+1) + '_stroke" type="checkbox"'})}
    ) +
        makeTag( //座標（開始）用
        {tagName:"div",
         attribute:'class="prop-wrapper color"',
         innerText:"座標（開始）:" +
         " ( " +
         makeTag(
             {tagName:"input",
              attribute:'name="cvs' + (i+1) + '_posX_start" type="text" size="1"'}) +
         ", " +
         makeTag(
             {tagName:"input",
              attribute:'name="cvs' + (i+1) + '_posY_start" type="text" size="1"'}) +
         " )"
        }
    ) +
        makeTag( //座標（中間）用
        {tagName:"div",
         attribute:'class="prop-wrapper color"',
         innerText:"座標（中間）:" +
         " ( " +
         makeTag(
             {tagName:"input",
              attribute:'name="cvs' + (i+1) + '_posX_main" type="text" size="1"'}) +
         ", " +
         makeTag(
             {tagName:"input",
              attribute:'name="cvs' + (i+1) + '_posY_main" type="text" size="1"'}) +
         " )"
        }
    ) +
        makeTag( //座標（終了）用
        {tagName:"div",
         attribute:'class="prop-wrapper color"',
         innerText:"座標（終了）:" +
         " ( " +
         makeTag(
             {tagName:"input",
              attribute:'name="cvs' + (i+1) + '_posX_end" type="text" size="1"'}) +
         ", " +
         makeTag(
             {tagName:"input",
              attribute:'name="cvs' + (i+1) + '_posY_end" type="text" size="1"'}) +
         " )"
        }
    ) +
        makeTag( //色（開始）用selection
        {tagName:"div",
         attribute:'class="prop-wrapper color"',
         innerText:"色（開始）:" +
         " R:" +
         makeTag(
             {tagName:"input",
              attribute:'name="cvs' + (i+1) + '_r_start" type="text" size="1"'}) +
         " G:" +
         makeTag(
             {tagName:"input",
              attribute:'name="cvs' + (i+1) + '_g_start" type="text" size="1"'}) +
         " B:" +
         makeTag(
             {tagName:"input",
              attribute:'name="cvs' + (i+1) + '_b_start" type="text" size="1"'}) +
         " α:" +
         makeTag(
             {tagName:"input",
              attribute:'name="cvs' + (i+1) + '_a_start" type="text" size="1"'})
        }
    ) +
        makeTag( //色（中間）用selection
        {tagName:"div",
         attribute:'class="prop-wrapper color"',
         innerText:"色（中間）:" +
         " R:" +
         makeTag(
             {tagName:"input",
              attribute:'name="cvs' + (i+1) + '_r_main" type="text" size="1"'}) +
         " G:" +
         makeTag(
             {tagName:"input",
              attribute:'name="cvs' + (i+1) + '_g_main" type="text" size="1"'}) +
         " B:" +
         makeTag(
             {tagName:"input",
              attribute:'name="cvs' + (i+1) + '_b_main" type="text" size="1"'}) +
         " α:" +
         makeTag(
             {tagName:"input",
              attribute:'name="cvs' + (i+1) + '_a_main" type="text" size="1"'})
        }
    ) +
        makeTag( //色（終了）用selection
        {tagName:"div",
         attribute:'class="prop-wrapper color"',
         innerText:"色（終了）:" +
         " R:" +
         makeTag(
             {tagName:"input",
              attribute:'name="cvs' + (i+1) + '_r_end" type="text" size="1"'}) +
         " G:" +
         makeTag(
             {tagName:"input",
              attribute:'name="cvs' + (i+1) + '_g_end" type="text" size="1"'}) +
         " B:" +
         makeTag(
             {tagName:"input",
              attribute:'name="cvs' + (i+1) + '_b_end" type="text" size="1"'}) +
         " α:" +
         makeTag(
             {tagName:"input",
              attribute:'name="cvs' + (i+1) + '_a_end" type="text" size="1"'})
        }
    ) +

        makeTag( //スケール（開始）用selection
        {tagName:"div",
         attribute:'class="prop-wrapper scale_start"',
         innerText:"スケール（開始）：" +
         makeTag(
             {tagName:"input",
              attribute:'name="cvs' + (i+1) + '_scale_start" type="range" value="100" min="1" max="200" step="1"'})
        }
    ) +
        makeTag( //スケール（中間）用selection
        {tagName:"div",
         attribute:'class="prop-wrapper scale"',
         innerText:"スケール（中間）：" +
         makeTag(
             {tagName:"input",
              attribute:'name="cvs' + (i+1) + '_scale" type="range" value="100" min="1" max="200" step="1"'})
        }
    ) +
        makeTag( //スケール（終了）用selection
        {tagName:"div",
         attribute:'class="prop-wrapper scale_end"',
         innerText:"スケール（終了）：" +
         makeTag(
             {tagName:"input",
              attribute:'name="cvs' + (i+1) + '_scale_end" type="range" value="100" min="1" max="200" step="1"'})
        }
    ) +
        makeTag( //回転（開始）用selection
        {tagName:"div",
         attribute:'class="prop-wrapper rot_start"',
         innerText:"回転（開始）：" +
         makeTag(                 //make select
             {tagName:"select",
              attribute:'name="cvs' + (i+1) + '_rot_start"',
              innerText:'<option value="none">停止</option><option value="linear">等速</option><option value="easeIn">加速</option><option value="easeOut">減速</option>'})
        }
    ) +
        makeTag( //回転（終了）用selection
        {tagName:"div",
         attribute:'class="prop-wrapper rot_end"',
         innerText:"回転（終了）：" +
         makeTag(                 //make select
             {tagName:"select",
              attribute:'name="cvs' + (i+1) + '_rot_end"',
              innerText:'<option value="none">停止</option><option value="linear">等速</option><option value="easeIn">加速</option><option value="easeOut">減速</option>'})
        }
    ) +
        makeTag( //逆回転用selection
        {tagName:"div",
         attribute:'class="prop-wrapper rot_reverse"',
         innerText:"逆回転：" +
         makeTag(
             {tagName:"input",
              attribute:'name="cvs' + (i+1) + '_rot_reverse" type="checkbox"'}) +
         "　回転対象：" +
         makeTag(
             {tagName:"select",
              attribute:'name="cvs' + (i+1) + '_rot_center"',
              innerText:'<option value="canvas">座標系</option><option value="object">オブジェクト</option>'})
        }
    );
 }



}
function makeTag(obj) {
    var str = "<" + obj.tagName + CN(obj.attribute) + ">" + CN(obj.innerText) + "</" + obj.tagName + ">";
    return str;
}
function CN(data) { //function to check null or undefined and to return nothing or itself
    if (data == null) return "";
    return " " + data;
}

function loop() {
    drawAll();
    updateAll();
    setTimeout(loop, 1000 / 30);
}

function drawAll() {
    for (var i=0; i<canvasList.length; i++) {
        canvasList[i].draw();
    }
}

function updateAll() {
    if (stop == true) return;
    for (var i=0; i<canvasList.length; i++) {
        canvasList[i].update();
    }
    if (checkFinishAll() == true) {
        if (loopPlay == true) {
            for(var i=0; i<canvasList.length; i++) {
                canvasList[i].initialize(initProps[i]);
            }
        }
        else {
            stop = true;
        }
    }
}

function checkFinishAll() {
    var finishAll = true;
    for (var i=0; i<canvasList.length; i++) {
        if (canvasList[i].step !== "finish") finishAll = false;
    }
    return finishAll;
}

function randomize(val) {
    var rnd = parseInt(Math.random()*4);
    var choice = "";
    switch (rnd) {
        case 0:
        choice = "rect";
        break;
        case 1:
        choice = "triangle";
        break;
        case 2:
        choice = "ellipse";
        break;
        case 3:
        choice = "hexagon";
        break;
    }
    $("select[name='cvs" + val + "_shape']")[0].value = choice;
    $("input[name='cvs" + val + "_stroke']")[0].checked = (parseInt(Math.random()*2) == 0)? true: false;
    $("input[name='cvs" + val + "_posX_start']")[0].value = parseInt(Math.random()*301)-150;
    $("input[name='cvs" + val + "_posY_start']")[0].value = parseInt(Math.random()*301)-150;
    $("input[name='cvs" + val + "_posX_main']")[0].value = parseInt(Math.random()*301)-150;
    $("input[name='cvs" + val + "_posY_main']")[0].value = parseInt(Math.random()*301)-150;
    $("input[name='cvs" + val + "_posX_end']")[0].value = parseInt(Math.random()*301)-150;
    $("input[name='cvs" + val + "_posY_end']")[0].value = parseInt(Math.random()*301)-150;
    $("input[name='cvs" + val + "_r_start']")[0].value = parseInt(Math.random()*256);
    $("input[name='cvs" + val + "_g_start']")[0].value = parseInt(Math.random()*256);
    $("input[name='cvs" + val + "_b_start']")[0].value = parseInt(Math.random()*256);
    rnd = Math.random().toString();
    choice = rnd.substr(0, 4);
    $("input[name='cvs" + val + "_a_start']")[0].value = choice;
    $("input[name='cvs" + val + "_r_main']")[0].value = parseInt(Math.random()*256);
    $("input[name='cvs" + val + "_g_main']")[0].value = parseInt(Math.random()*256);
    $("input[name='cvs" + val + "_b_main']")[0].value = parseInt(Math.random()*256);
    rnd = Math.random().toString();
    choice = rnd.substr(0, 4);
    $("input[name='cvs" + val + "_a_main']")[0].value = choice;
    $("input[name='cvs" + val + "_r_end']")[0].value = parseInt(Math.random()*256);
    $("input[name='cvs" + val + "_g_end']")[0].value = parseInt(Math.random()*256);
    $("input[name='cvs" + val + "_b_end']")[0].value = parseInt(Math.random()*256);
    rnd = Math.random().toString();
    choice = rnd.substr(0, 4);
    $("input[name='cvs" + val + "_a_end']")[0].value = choice;
    $("input[name='cvs" + val + "_scale_start']")[0].value = parseInt(Math.random()*201);
    $("input[name='cvs" + val + "_scale']")[0].value = parseInt(Math.random()*201);
    $("input[name='cvs" + val + "_scale_end']")[0].value = parseInt(Math.random()*201);
    $("input[name='cvs" + val + "_rot_reverse']")[0].checked = (parseInt(Math.random()*2) == 0)? true: false;
    rnd = parseInt(Math.random()*4);
    choice = "";
    switch (rnd) {
        case 0:
        choice = "none";
        break;
        case 1:
        choice = "linear";
        break;
        case 2:
        choice = "easeIn";
        break;
        case 3:
        choice = "easeOut";
        break;
    }
    $("select[name='cvs" + val + "_rot_start']")[0].value = choice;
    rnd = parseInt(Math.random()*4);
    choice = "";
    switch (rnd) {
        case 0:
        choice = "none";
        break;
        case 1:
        choice = "linear";
        break;
        case 2:
        choice = "easeIn";
        break;
        case 3:
        choice = "easeOut";
        break;
    }
    $("select[name='cvs" + val + "_rot_end']")[0].value = choice;
    $("select[name='cvs" + val + "_rot_center']")[0].value = (parseInt(Math.random()*2) == 0)? "object": "canvas";
}

$("input[name='loop']")[0].onclick = function(){
    if (this.value === "ループ停止中") {
        this.value = "ループ中";
        loopPlay = true;
        stop = false;
    }
    else {
        this.value = "ループ停止中";
        loopPlay = false;
    }
};

$("input[name='reset']")[0].onclick = function(){
    for (var i=0; i<canvasList.length; i++) {
        canvasList[i].initialize(initProps[i]);
    }
};

Render = function(initProp) {
    if (initProp.canvas != null) {
        var canvas = document.getElementById(initProp.canvas);
        if (canvas.getContext == false) return false;
        this.ctx = canvas.getContext("2d");
        this.cvsIndex = initProp.canvas.substr(6);
        this.cvsW = canvas.width;
        this.cvsH = canvas.height;
        this.updatePropsFromInputs();
        this.steps = {rot:null, scale:null, color:null, pos:null, posX:null, posY:null};
        this.initialize(initProp);
        this.ctx.font = "18px 'ＭＳ Ｐゴシック'";
    }
},

Render.prototype = {
    cvsIndex: null,
    ctx: null,
    frame: null,
    pframe: null,
    colorframe: null,
    step: null,
    steps: {rot:null, scale:null, color:null, pos:null, posX:null, posY:null},
    cvsW: null,
    cvsH: null,
    deg: null,
    deg_v: null,
    deg_v_dest1:null,
    deg_v_dest2:null,
    x: null,
    y: null,
    x_v: null,
    y_v: null,
    xIn: null,
    yIn: null,
    xMain: null,
    yMain: null,
    xOut: null,
    yOut: null,
    shape: null,
    scale: null,
    scaleIn: null,
    scaleMain: null,
    scaleOut: null,
    rotateReverse: null,
    rotateInBehave: null,
    rotateInEase: null,
    rotateOutBehave: null,
    rotateOutEase: null,
    rotateOutEaseFirst: true,
    rotateOutEaseFrame: null,
    rotateDelay: null,
    rotateCenterX: null,
    rotateCenterY: null,
    rotateCenter: null,
    color: null,
    r: null,
    g: null,
    b: null,
    alpha: null,
    colorIn: null,
    rIn: null,
    gIn: null,
    bIn: null,
    alphaIn: null,
    colorMain: null,
    rMain: null,
    gMain: null,
    bMain: null,
    alphaMain: null,
    colorOut: null,
    rOut: null,
    gOut: null,
    bOut: null,
    alphaOut: null,
    isStroke: true,
    nextStepRot: null,
    nextStepScale: null,

    initialize: function(initProp) {
        this.frame = 0;
        this.pframe = -.1;
        this.colorframe = -.1;
        this.step = "start";
        this.steps.rot = "start";
        this.steps.scale = "start";
        this.steps.color = "start";
        this.steps.pos = "start";
        this.steps.posX = "start";
        this.steps.posY = "start";
        this.shape = initProp.shapeType;
        this.isStroke = initProp.isStroke;
        this.scale = parseFloat(initProp.startScale);
        this.scaleIn = parseFloat(initProp.startScale);
        this.scaleMain = parseFloat(initProp.mainScale);
        this.scaleOut = parseFloat(initProp.endScale);
        this.rotateInBehave = initProp.rotateInBehave;
        this.rotateInEase = initProp.rotateInEase;
        this.rotateOutBehave = initProp.rotateOutBehave;
        this.rotateOutEase = initProp.rotateOutEase;
        this.rotateCenter = initProp.rotateCenter;
        this.x = this.xIn = initProp.xIn;
        this.y = this.yIn = initProp.yIn;
        this.xMain = initProp.xMain;
        this.yMain = initProp.yMain;
        this.xOut = initProp.xOut;
        this.yOut = initProp.yOut;
        switch(this.rotateCenter) {
                case "canvas":
                this.rotateCenterX = this.cvsW/2;//動かさない
                this.rotateCenterY = this.cvsH/2;//動かさない
                break;

                case "object":
                this.rotateCenterX = this.cvsW/2 + this.x;//これを毎f更新
                this.rotateCenterY = this.cvsH/2 + this.y;//これを毎f更新
                break;
        }
        this.deg = 0;
        this.deg_v_dest1 = Math.PI*0.15;
        this.deg_v_dest2 = Math.PI*0.1;
        this.x_v = 0;
        this.y_v = 0;
        this.rotateDelay = -0.1;
        this.r = this.rIn = initProp.rIn;
        this.g = this.gIn = initProp.gIn;
        this.b = this.bIn = initProp.bIn;
        this.alpha = this.alphaIn = initProp.alphaIn;
        this.rMain = initProp.rMain;
        this.gMain = initProp.gMain;
        this.bMain = initProp.bMain;
        this.alphaMain = initProp.alphaMain;
        this.rOut = initProp.rOut;
        this.gOut = initProp.gOut;
        this.bOut = initProp.bOut;
        this.alphaOut = initProp.alphaOut;
        this.color = "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")";
        switch (this.rotateInBehave) {  //rotate in behave init
            case "none":
                this.deg_v = 0;
            break;
            case "linear":
                this.deg_v = initProps[this.cvsIndex-1].rotate_linear_v;
            break;
            case "easeIn":
                this.deg_v = 0;
            break;
            case "easeOut":
                this.deg_v = 0.47;
            break;
        }


    },
    update: function() {
        if (this.step !== "finish") this.frame += 1;

        this.updatePropsFromInputs();
        if (this.step === "start") {/********************************** step start ***************************************/

            /******************** step of rotate *******************/
            switch (this.rotateInBehave) {
                case "none":
                    this.steps.rot = "main";
                    this.deg_v_dest1 = 0;
                break;
                case "linear":
                    if (this.rotateDelay == -0.1 && this.steps.rot === "start") this.rotateDelay = this.frame;
                    if (this.frame - this.rotateDelay == 60) {
                        this.steps.rot = "main";
                        this.rotateDelay = -0.1;
                        this.deg_v_dest1 = this.deg_v;
                    }
                break;
                case "easeIn":
                    if (this.deg_v <= this.deg_v_dest1) this.deg_v += this.rotateInEase*.25;
                    if (this.deg_v > this.deg_v_dest1) this.deg_v = this.deg_v_dest1;
                    if (this.deg_v == this.deg_v_dest1) this.steps.rot = "main";
                break;
                case "easeOut":
                    if (this.deg_v > 0.05) {
                        this.deg_v *= (1-this.rotateInEase);
                    }
                    else {
                        this.steps.rot = "main";
                        this.deg_v_dest1 = this.deg_v;
                    }
                break;
            }
            if (this.steps.rot === "start") this.deg += this.deg_v;


            /******************** step of scale *******************/
            if (this.steps.scale === "start") this.scale += (this.scaleMain - this.scaleIn)/50;
            if (this.scaleMain > this.scaleIn) {
                if (this.scale >= this.scaleMain) this.steps.scale = "main";
            }
            else if (this.scaleMain < this.scaleIn) {
                if (this.scale <= this.scaleMain) this.steps.scale = "main";
            }
            else {
                this.steps.scale = "main";
            }
            if (this.scale < 0) this.scale = 0;

            /******************** step of color *******************/
            if (this.steps.color === "start") {
                if (this.colorframe == -.1) this.colorframe = this.frame;
                this.r += (this.rMain - this.rIn)/50;
                this.g += (this.gMain - this.gIn)/50;
                this.b += (this.bMain - this.bIn)/50;
                this.alpha += (this.alphaMain - this.alphaIn)/50;
                this.color = "rgba(" + parseInt(this.r) + ", " + parseInt(this.g) + ", " + parseInt(this.b) + ", " + this.alpha + ")";
                if (this.frame - this.colorframe == 50) {
                    this.steps.color = "main";
                    this.colorframe = -0.1;
                }
            }


            /******************** step of position *******************/

            if(this.steps.pos === "start") {


                if (this.steps.posX === "start") {
                    this.x_v = (this.xMain - this.x)*0.09;
                    this.x += this.x_v;
                    if (this.xMain - 1 < this.x && this.x < this.xMain + 1) this.steps.posX = "main";
                }
                if (this.steps.posY === "start") {
                    this.y += this.y_v;
                    this.y_v = (this.yMain - this.y)*0.09;
                    if (this.yMain - 1 < this.y && this.y < this.yMain + 1) this.steps.posY = "main";
                }
                if (this.steps.posX === "main" && this.steps.posY === "main") this.steps.pos = "main";
                if (this.rotateCenter === "object") {
                    this.rotateCenterX = this.cvsW/2 + this.x;
                    this.rotateCenterY = this.cvsH/2 + this.y;
                }
            }

            /******************** step final processing *******************/
            for(var key in this.steps) {
                if (this.steps[key] === "main") {
                    this.step = "main";
                }
                else {
                    this.step = "start";
                    break;
                }
            }
        }
        else if (this.step === "main") {/********************************** step main ***************************************/
            if (this.pframe == -0.1) this.pframe = this.frame;
            if (this.frame - this.pframe == 20) {
                this.steps.rot = "end";
                this.steps.scale = "end";
                this.steps.color = "end";
                this.steps.pos = "end";
                this.steps.posX = "end";
                this.steps.posY = "end";
                this.pframe = -0.1;
            }
            this.deg += this.deg_v;

            for (var key in this.steps) {
                if (this.steps[key] === "end") {
                    this.step = "end";
                }
                else {
                    this.step = "main";
                    break;
                }
            }
        }
        else if (this.step === "end") {/********************************** step end ***************************************/

            /******************** step of rotate *******************/
            switch (this.rotateOutBehave) {
                case "none":
                    this.steps.rot = "finish";
                break;
                case "linear":
                    if (this.rotateDelay == -0.1 && this.steps.rot === "end") this.rotateDelay = this.frame;
                    if (this.frame - this.rotateDelay == 60) {
                        this.steps.rot = "finish";
                        this.rotateDelay = -0.1;
                    }
                break;
                case "easeIn":
                    if (this.deg_v < this.deg_v_dest1 + this.deg_v_dest2 - Math.PI*0.005) {
                        this.deg_v += this.rotateInEase*0.25;
                    }
                    else if (this.deg_v > this.deg_v_dest1 + this.deg_v_dest2 + Math.PI*0.005) {
                        this.deg_v -= this.rotateInEase*0.25;
                    }
                    else {
                        if (this.rotateOutEaseFirst == true) {
                            this.rotateOutEaseFrame = this.frame;
                            this.rotateOutEaseFirst = false;
                        }
                        if (this.frame - this.rotateOutEaseFrame >= 30) this.steps.rot = "finish";
                    }
                    if (this.deg_v == this.deg_v_dest1 + this.deg_v_dest2) this.setDelay(30, "rotate", "finish");
                break;
                case "easeOut":
                    if (this.deg_v >= 0.15) {
                        this.deg_v -= this.rotateOutEase;

                    }
                    else if (this.deg_v >= 0.15) {
                        this.deg_v *= (1-this.rotateOutEase*1.5);
                    }
                    else if (this.deg_v > 0.05) {
                        this.deg_v *= (1-this.rotateOutEase);
                    }
                    else {
                        this.deg_v = 0;
                        this.steps.rot = "finish";
                    }
                break;
            }
            if(this.steps.rot === "end") this.deg += this.deg_v;

            /******************** step of scale *******************/
            if (this.scaleOut > this.scaleMain) {
                if(this.scale >= this.scaleOut) this.steps.scale = "finish";
            }
            else if (this.scaleOut < this.scaleMain) {
                if (this.scale <= this.scaleOut) this.steps.scale = "finish";
            }
            else {
                this.steps.scale = "finish";
            }
            if (this.steps.scale === "end") this.scale += (this.scaleOut - this.scaleMain)/50;
            if (this.scale < 0) this.scale = 0;

            /******************** step of color *******************/
            if (this.steps.color === "end") {
                if(this.colorframe == -0.1) this.colorframe = this.frame;
                this.r += (this.rOut - this.rMain)/60;
                this.g += (this.gOut - this.gMain)/60;
                this.b += (this.bOut - this.bMain)/60;
                this.alpha += (this.alphaOut - this.alphaMain)/60;
                this.color = "rgba(" + parseInt(this.r) + ", " + parseInt(this.g) + ", " + parseInt(this.b) + ", " + this.alpha + ")";
                if (this.frame - this.colorframe == 60) {
                    this.steps.color = "finish";
                    this.colorframe = -0.1;
                }
            }

            /******************** step of position *******************/
            if(this.steps.pos === "end") {

                if (this.steps.posX === "end") {
                    if (this.isInner(this.x, this.xMain, (this.xMain+this.xOut)/2) === true) {
                        this.x_v += (this.xOut - this.x)*0.0025;
                    } else if (this.isInner(this.x, (this.xMain+this.xOut)/2, this.xOut) === true) {
                        this.x_v = (this.xOut - this.x)*0.09;
                    }
                    this.x += this.x_v;
                    if (this.xOut - 1 < this.x && this.x < this.xOut + 1) this.steps.posX = "finish";
                }
                if (this.steps.posY === "end") {
                    if (this.isInner(this.y, this.yMain, (this.yMain+this.yOut)/2) === true) {
                        this.y_v += (this.yOut - this.y)*0.0025;
                    } else if (this.isInner(this.y, (this.yMain+this.yOut)/2, this.yOut) === true) {
                        this.y_v = (this.yOut - this.y)*0.09;
                    }
                    this.y += this.y_v;
                    if (this.yOut - 1 < this.y && this.y < this.yOut + 1) this.steps.posY = "finish";
                }
                if (this.steps.posX === "finish" && this.steps.posY === "finish") this.steps.pos = "finish";
                if (this.rotateCenter === "object") {
                    this.rotateCenterX = this.cvsW/2 + this.x;
                    this.rotateCenterY = this.cvsH/2 + this.y;
                }
            }

            /******************** step final processing *******************/
            for (var key in this.steps) {
                if (this.steps[key] === "finish") {
                    this.step = "finish";
                }
                else {
                    this.step = "end";
                    break;
                }
            }
        }
    },
    isInner: function(val, val1, val2) {
        if (val1 < val2) {
            if(val1 <= val && val <= val2) return true;
        }else if (val2 < val1) {
            if(val2 <= val && val <= val1) return true;
        }else {
            if (val === val1) return true;
        }
        return false;
    },
    setDelay: function(numOfFrame, type, next) {
        this.steps.rot = "delay";
        switch(type) {
                case "rotate":
                    this.rotateDelay = numOfFrame;
                    this.nextStepRot = next;
                break;
                case "scale":
                    this.scaleDelay = numOfFrame;
                    this.nextStepScale = next;
                break;
        }
    },
    updatePropsFromInputs: function(notWantToUpdateProp) {/****************************************arguments判定めんどいから省略************/
        this.shape = initProps[this.cvsIndex-1].shapeType = $("select[name='cvs" + this.cvsIndex + "_shape']")[0].value;
        initProps[this.cvsIndex-1].rotateInBehave = $("select[name='cvs" + this.cvsIndex + "_rot_start']")[0].value;
        initProps[this.cvsIndex-1].rotateOutBehave = $("select[name='cvs" + this.cvsIndex + "_rot_end']")[0].value;
        this.scaleMain = initProps[this.cvsIndex-1].mainScale = parseFloat($("input[name='cvs" + this.cvsIndex + "_scale']")[0].value);
        this.scaleIn = initProps[this.cvsIndex-1].startScale = parseFloat($("input[name='cvs" + this.cvsIndex + "_scale_start']")[0].value);
        this.scaleOut = initProps[this.cvsIndex-1].endScale = parseFloat($("input[name='cvs" + this.cvsIndex + "_scale_end']")[0].value);
        this.rotateReverse = initProps[this.cvsIndex-1].rotateReverse = $("input[name='cvs" + this.cvsIndex + "_rot_reverse']")[0].checked;
        initProps[this.cvsIndex-1].rIn = parseInt($("input[name='cvs" + this.cvsIndex + "_r_start']")[0].value);
        initProps[this.cvsIndex-1].gIn = parseInt($("input[name='cvs" + this.cvsIndex + "_g_start']")[0].value);
        initProps[this.cvsIndex-1].bIn = parseInt($("input[name='cvs" + this.cvsIndex + "_b_start']")[0].value);
        initProps[this.cvsIndex-1].alphaIn = parseFloat($("input[name='cvs" + this.cvsIndex + "_a_start']")[0].value);
        initProps[this.cvsIndex-1].rMain = parseInt($("input[name='cvs" + this.cvsIndex + "_r_main']")[0].value);
        initProps[this.cvsIndex-1].gMain = parseInt($("input[name='cvs" + this.cvsIndex + "_g_main']")[0].value);
        initProps[this.cvsIndex-1].bMain = parseInt($("input[name='cvs" + this.cvsIndex + "_b_main']")[0].value);
        initProps[this.cvsIndex-1].alphaMain = parseFloat($("input[name='cvs" + this.cvsIndex + "_a_main']")[0].value);
        initProps[this.cvsIndex-1].rOut = parseInt($("input[name='cvs" + this.cvsIndex + "_r_end']")[0].value);
        initProps[this.cvsIndex-1].gOut = parseInt($("input[name='cvs" + this.cvsIndex + "_g_end']")[0].value);
        initProps[this.cvsIndex-1].bOut = parseInt($("input[name='cvs" + this.cvsIndex + "_b_end']")[0].value);
        initProps[this.cvsIndex-1].alphaOut = parseFloat($("input[name='cvs" + this.cvsIndex + "_a_end']")[0].value);
        initProps[this.cvsIndex-1].rotateCenter = $("select[name='cvs" + this.cvsIndex + "_rot_center']")[0].value;
        this.xIn = initProps[this.cvsIndex-1].xIn = parseFloat($("input[name='cvs" + this.cvsIndex + "_posX_start']")[0].value);
        this.yIn = initProps[this.cvsIndex-1].yIn = parseFloat($("input[name='cvs" + this.cvsIndex + "_posY_start']")[0].value);
        this.xMain = initProps[this.cvsIndex-1].xMain = parseFloat($("input[name='cvs" + this.cvsIndex + "_posX_main']")[0].value);
        this.yMain = initProps[this.cvsIndex-1].yMain = parseFloat($("input[name='cvs" + this.cvsIndex + "_posY_main']")[0].value);
        this.xOut = initProps[this.cvsIndex-1].xOut = parseFloat($("input[name='cvs" + this.cvsIndex + "_posX_end']")[0].value);
        this.yOut = initProps[this.cvsIndex-1].yOut = parseFloat($("input[name='cvs" + this.cvsIndex + "_posY_end']")[0].value);
        this.isStroke = initProps[this.cvsIndex-1].isStroke = $("input[name='cvs" + this.cvsIndex + "_stroke']")[0].checked;
    },
    draw: function() {
        this.ctx.clearRect(0, 0, this.cvsW, this.cvsH);
        this.ctx.save();

        this.ctx.translate(this.rotateCenterX, this.rotateCenterY);
        if (this.rotateReverse == true) {
            this.ctx.rotate(-this.deg);
        }
        else {
            this.ctx.rotate(this.deg);
        }

        this.ctx.fillStyle = this.color;
        this.ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
        switch (this.shape) {  //draw flow
            case "rect":
                if (this.rotateCenter === "canvas") this.rectPath(this.x, this.y);
                if (this.rotateCenter === "object") this.rectPath(0, 0);
            break;
            case "ellipse":
                if (this.rotateCenter === "canvas") {
                    this.ctx.beginPath();
                    this.ctx.arc(this.x, this.y, this.scale/2, 0, Math.PI*2, false);
                }
                if (this.rotateCenter === "object") {
                    this.ctx.beginPath();
                    this.ctx.arc(0, 0, this.scale/2, 0, Math.PI*2, false);
                }
            break;
            case "triangle":
                if (this.rotateCenter === "canvas") this.trianglePath(this.x, this.y);
                if (this.rotateCenter === "object") this.trianglePath(0, 0);
            break;
            case "hexagon":
                if (this.rotateCenter === "canvas") this.hexagonPath(this.x, this.y);
                if (this.rotateCenter === "object") this.hexagonPath(0, 0);
            break;
            default:
            break;
        }
        this.ctx.fill();
        if (this.isStroke == true) this.ctx.stroke();

        this.ctx.restore();
        this.ctx.fillStyle = "black";
        this.ctx.fillText("frame : " + this.frame, 5, 20);
        this.ctx.fillText("step : " + this.step, 5, 40);
    },
    hexagonPath: function(x, y) {
        this.ctx.beginPath();
        this.ctx.moveTo(x + this.scale/2*Math.cos(0), y + this.scale/2*Math.sin(0));
        this.ctx.lineTo(x + this.scale/2*Math.cos(Math.PI/3), y + this.scale/2*Math.sin(Math.PI/3));
        this.ctx.lineTo(x + this.scale/2*Math.cos(Math.PI*2/3), y + this.scale/2*Math.sin(Math.PI*2/3));
        this.ctx.lineTo(x + this.scale/2*Math.cos(Math.PI*3/3), y + this.scale/2*Math.sin(Math.PI*3/3));
        this.ctx.lineTo(x + this.scale/2*Math.cos(Math.PI*4/3), y + this.scale/2*Math.sin(Math.PI*4/3));
        this.ctx.lineTo(x + this.scale/2*Math.cos(Math.PI*5/3), y + this.scale/2*Math.sin(Math.PI*5/3));
        this.ctx.closePath();
    },
    trianglePath: function(x, y) {
        this.ctx.beginPath();
        this.ctx.moveTo(x + this.scale/2*Math.cos(0), y + this.scale/2*Math.sin(0));
        this.ctx.lineTo(x + this.scale/2*Math.cos(Math.PI*2/3), y + this.scale/2*Math.sin(Math.PI*2/3));
        this.ctx.lineTo(x + this.scale/2*Math.cos(Math.PI*4/3), y + this.scale/2*Math.sin(Math.PI*4/3));
        this.ctx.closePath();
    },
    rectPath: function(x, y){
        this.ctx.beginPath();
        this.ctx.moveTo(x + this.scale/2*Math.cos(Math.PI/4), y + this.scale/2*Math.sin(Math.PI/4));
        this.ctx.lineTo(x + this.scale/2*Math.cos(Math.PI*3/4), y + this.scale/2*Math.sin(Math.PI*3/4));
        this.ctx.lineTo(x + this.scale/2*Math.cos(Math.PI*5/4), y + this.scale/2*Math.sin(Math.PI*5/4));
        this.ctx.lineTo(x + this.scale/2*Math.cos(Math.PI*7/4), y + this.scale/2*Math.sin(Math.PI*7/4));
        this.ctx.closePath();
    }
};
});
