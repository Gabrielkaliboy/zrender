var arrData = [0.00017835938, 0.00018598455, 0.00019448395, 0.00020536596, 0.00022055407, 0.0002349479, 0.0002532425, 0.00027536473, 0.00030367306, 0.00032765622, 0.00034450422, 0.00035538507, 0.00037031018, 0.0003857359, 0.0004016072, 0.00042429593, 0.0004610809, 0.0005127108, 0.0005718492, 0.00063273375, 0.0006945578, 0.00074424036, 0.0007898994, 0.0008209396, 0.0008375426, 0.0008334019, 0.000819502, 0.0008122713, 0.00079171616, 0.0007807274, 0.00076220406, 0.00076943595, 0.00076523103, 0.0007676215, 0.0007714375, 0.0007627266, 0.00075780915, 0.0007557385, 0.00074271276, 0.0007390372, 0.000731059, 0.0007282898, 0.0007185027, 0.0007134634, 0.00070785463, 0.00069968903, 0.0006917905, 0.0006821572, 0.00066337653, 0.00064916303, 0.0006484979, 0.0006604627, 0.00069784466, 0.00078016287, 0.0008785731, 0.00093005924, 0.00093718845, 0.00091561076, 0.00087616633, 0.0008344596, 0.0007911816, 0.0007583099, 0.0007400235, 0.00073463743, 0.0007349876, 0.0007355088, 0.0007426614, 0.00074840925, 0.0007550183, 0.0007615703, 0.0007662369, 0.00076944055, 0.000765547, 0.00076245866, 0.0007652826, 0.0007654711, 0.0007653238, 0.00076675066, 0.0007630466, 0.0007660205, 0.00076456566, 0.00076674594, 0.0007644566, 0.0007583318, 0.00075593, 0.00074840744, 0.00074445724, 0.00074092875, 0.00073576113, 0.0007342035, 0.00072950515, 0.0007314861, 0.00072868296, 0.0007295356, 0.0007270612, 0.00072673144, 0.0007244011, 0.000725652, 0.00072608184, 0.00073011284, 0.0007354099, 0.0007438218, 0.0007550473, 0.0007628108, 0.00076477055, 0.0007765406, 0.00078183046, 0.000788762, 0.0007940994, 0.0007885412, 0.0007876782, 0.00078214187, 0.0007724099, 0.00076197763, 0.00075395516, 0.00074466894, 0.0007378328, 0.00072479283, 0.0007149028, 0.00070266967, 0.0006934874, 0.0006841542, 0.00067902124, 0.0006740019, 0.0006717838, 0.00067084865, 0.0006711386, 0.00067149015, 0.00067357556, 0.0006754809, 0.0006726867, 0.000670761, 0.00067130255, 0.0006662678, 0.0006581943, 0.0006541535, 0.0006432571, 0.0006389844, 0.0006347367, 0.00063705153, 0.0006413679, 0.00064665807, 0.0006531224, 0.00065640715, 0.000655194, 0.00065381266, 0.00065336155, 0.00065446796, 0.0006606115, 0.0006623891, 0.00066698104, 0.00067399576, 0.00067880703, 0.0006883389, 0.00069922634, 0.0007180426, 0.00074682455, 0.0007977067, 0.00087740214, 0.0009862012, 0.001108169, 0.0012302039, 0.0013404656, 0.0014450921, 0.0015287114, 0.0015595745, 0.0015465042, 0.0014838803, 0.0013957161, 0.0012976169, 0.0011937362, 0.0011015697, 0.0010231646, 0.00096530287, 0.0009199937, 0.0008922578, 0.000872303, 0.0008581823, 0.0008493, 0.0008477408, 0.0008481288, 0.00085349806, 0.0008574827, 0.0008650597, 0.0008727633, 0.0008764784, 0.00087990606, 0.000884561, 0.0008869973, 0.00089050346, 0.0008948264, 0.0008988603, 0.0009037435, 0.0009173701, 0.0009357494, 0.00095683837, 0.0009838458, 0.0010105221, 0.0010326935, 0.0010519294, 0.0010803659, 0.0011012303, 0.0011230035, 0.0011407016, 0.001152779, 0.0011635718, 0.0011566593, 0.0011396746, 0.0011161915, 0.0010985472, 0.0010813348, 0.0010714596, 0.0010618338, 0.0010525889, 0.0010379276, 0.0010284826, 0.0010192725, 0.0010127969, 0.0010056326, 0.0009974891, 0.0009876619, 0.000980652, 0.0009756195, 0.0009681228, 0.0009712006, 0.0009893273, 0.0010394813, 0.0011344918, 0.0013141343, 0.0015518819, 0.0017556126, 0.001889623, 0.0019304215, 0.0018831666, 0.001765461, 0.0016115425, 0.0014390178, 0.0012937064, 0.0011960785, 0.0011381551, 0.0011065173, 0.0010991717, 0.0010945736, 0.0010968788, 0.001097097, 0.0010892052, 0.0010824025, 0.0010701674, 0.0010654278, 0.0010573604, 0.0010433493, 0.0010233644, 0.0009953317, 0.00096632174, 0.0009371899, 0.0009137135, 0.0008924105, 0.0008783935, 0.0008729891, 0.0008690094, 0.0008709373, 0.00086933514, 0.0008703572, 0.0008732196, 0.000873245, 0.0008768818, 0.00087933993, 0.0008865133, 0.0008978135, 0.0009138067, 0.00092144083, 0.0009301112, 0.00093260105, 0.00092907273, 0.00091886503, 0.0009114828, 0.0009121638, 0.00091451535, 0.0009276729, 0.0009425835, 0.0009634776, 0.0009874065, 0.0010019076, 0.0010182373, 0.0010253657, 0.0010369024, 0.0010393434, 0.0010479657, 0.0010573393, 0.0010630004, 0.0010722299, 0.0010824754, 0.0010913624, 0.0010989506, 0.0011120638, 0.0011248395, 0.0011342056, 0.0011494817, 0.0011634168, 0.0011730214, 0.0011826915, 0.001194522, 0.0012003975, 0.0011964554, 0.0011827688, 0.0011538268, 0.0011290957, 0.001103928, 0.0010891595, 0.0010854595, 0.0010991662, 0.0011244874, 0.0011586085, 0.001183522, 0.0012058909, 0.0012220519, 0.001234905, 0.001242043, 0.0012470668, 0.0012491213, 0.001250625, 0.0012594091, 0.0012773813, 0.0012958169, 0.001326766, 0.0013663947, 0.0014057879, 0.0014392743, 0.0014589943, 0.0014637563, 0.001463604, 0.0014485426, 0.0014248032, 0.0013838906, 0.0013377654, 0.0012822341, 0.0012241027, 0.0011691115, 0.001123745, 0.0011049601, 0.0010971837, 0.001094018, 0.0011011652, 0.0010982356, 0.0010986121, 0.0010999287, 0.0010955043, 0.0010928856, 0.0010897643, 0.0010977319, 0.0011101823, 0.0011252639, 0.0011402759, 0.0011590167, 0.0011674544, 0.001177173, 0.0011837338, 0.0011858025, 0.0011841467, 0.0011853732, 0.0011839344, 0.0011836138, 0.0011830232, 0.0011827216, 0.0011872351, 0.0011866501, 0.0011832552, 0.0011770827, 0.0011733634, 0.0011657735, 0.001161572, 0.0011584036, 0.001152678, 0.0011438526, 0.0011371389, 0.001118806, 0.0010817841, 0.0010187236, 0.0009079923, 0.0007825178, 0.0006681985, 0.00057512725, 0.0005164156, 0.0005006165, 0.0005328423, 0.00060356985, 0.0006932928, 0.0007807725, 0.0008660858, 0.00092726795, 0.0009733343, 0.0009986766, 0.0010200206, 0.0010261076, 0.0010305003, 0.0010228076, 0.0010191853, 0.0010203215, 0.0010114713, 0.0010097742, 0.0010097636];

function Shapeclass() {

}

Shapeclass.prototype = {
    drawMain: function (canid, divid) {          
        this.Mainclass(canid, divid);
    },
    Setting: {
        paddingWidth: 20,
        paddingheight: 40,
        everyholex: 100,
        everyholey: 0.25000,//值
        Teveryholex: 150,
        Teveryholey: 100,//间隔
        csspadding: "10px 10px",
        seamWidth: 5,
        seamHeight: 5,
        frameX: 0,
        frameY: 0
    },
    Ready:false,
    Mainclass: function (canid, divid) {
        var time1 = new Date();        
        var spanX, spanY;        
        var slope, intercept;        
        var itext;
        this.Setting.frameX = $("#" + divid).width();
        this.Setting.frameY = $("#" + divid).height();        
        this.Setting.Teveryholex = spanX = (this.Setting.frameX - this.Setting.paddingWidth * 2) / 4;
        this.Setting.Teveryholey = spanY = (this.Setting.frameY - this.Setting.paddingheight * 2) / 4;
        if (canid == 0) {
            itext = "绝对光谱曲线图";
        }
        else {           
            itext = "相对光谱曲线图";
        }
        require.config({
            packages: [
                {
                    name: 'zrender',
                    location: '../Scripts/zrender/src',
                    main: 'zrender'
                }
            ]
        });
        require(
                   [
                       "zrender",
                       'zrender/graphic/shape/Line',
                       'zrender/graphic/shape/Rect',
                       'zrender/graphic/shape/Circle',
                       'zrender/graphic/shape/Arc',
                       'zrender/tool/path',
                       'zrender/graphic/Text',
                       'zrender/core/util'
                   ],
        function (zrender, LineShape, RectShape, CircleShape, Arc, pathTool, ZText, util) {
            // 初始化zrender
            var zr = zrender.init(document.getElementById(divid));
            Shapeclass.prototype.Ready = true;
            //定义波形图绘制函数
            Shapeclass.prototype.DrawTrend = function (arrData) {
                var arrMax = Math.max.apply(null, arrData);
                //比例
                var scaley = 1 / arrMax;
                var pointxy = [];
                var lineTag = "tline_";
                for (var j = 0; j < arrData.length-1; j++) {
                    zr.remove(lineTag + j);
                    var ccolor = Shapeclass.prototype.CSpectGetRGB(380 + j);
                    var pint = Shapeclass.prototype.RtoM(j, arrData[j],
                        Shapeclass.prototype.Setting.frameX,
                        Shapeclass.prototype.Setting.frameY,
                        Shapeclass.prototype.Setting.seamWidth,
                        Shapeclass.prototype.Setting.seamHeight,
                        Shapeclass.prototype.Setting.paddingWidth,
                        Shapeclass.prototype.Setting.paddingheight, arrMax);
                    var pintNext = Shapeclass.prototype.RtoM(j+1, arrData[j+1],
                        Shapeclass.prototype.Setting.frameX,
                        Shapeclass.prototype.Setting.frameY,
                        Shapeclass.prototype.Setting.seamWidth,
                        Shapeclass.prototype.Setting.seamHeight,
                        Shapeclass.prototype.Setting.paddingWidth,
                        Shapeclass.prototype.Setting.paddingheight, arrMax);
                  
                    var linex = new LineShape({
                        style: {
                            lineWidth: pintNext.x - pint.x+1,
                            stroke: "rgba(" + ccolor.R + ", " + ccolor.G + ", " + ccolor.B + ", 1)"
                        },
                        id:lineTag + j,
                        shape: {
                            x1: pint.x,
                            y1: Shapeclass.prototype.Setting.frameY - Shapeclass.prototype.Setting.paddingheight,
                            x2: pint.x,
                            y2: pint.y
                        }
                    });
                    zr.add(linex);
                    pointxy.push(pint);
                }
                var linexTag = "xline_";
                for (var i = 1; i < pointxy.length; i++) {
                    zr.remove(linexTag + i);
                    var index = i - 1;
                    var ccolor = Shapeclass.prototype.CSpectGetRGB(380 + index);
                    var linexx = new LineShape({
                        style: {
                            lineWidth:pointxy[i].x - pointxy[index].x,
                            stroke: "rgba(" + ccolor.R + ", " + ccolor.G + ", " + ccolor.B + ", 1)"
                        },
                        id:linexTag+i,
                        shape: {
                            x1: pointxy[index].x,
                            y1: pointxy[index].y,
                            x2: pointxy[i].x,
                            y2: pointxy[i].y
                        }
                    });
                    zr.add(linexx);
                }
            };

            var path = null;
            var lz = new ZText({
                style: {
                    color: "rgba(0, 0, 0, 1)",
                    text: itext,
                    textFont: 'bold 20px Arial',
                    x: (Shapeclass.prototype.Setting.frameX - Shapeclass.prototype.Setting.paddingWidth) / 2 - 60,
                    y: Shapeclass.prototype.Setting.paddingheight
                }
            });
            zr.add(lz);
            var lzWave = new ZText({
                style: {
                    color: "rgba(0, 0, 0, 1)",
                    text: "波长(nm)",
                    textFont: '13px Arial',
                    x: (Shapeclass.prototype.Setting.frameX - Shapeclass.prototype.Setting.paddingWidth) / 2,
                    y: Shapeclass.prototype.Setting.frameY-5
                }
            });
            zr.add(lzWave);

            Shapeclass.prototype.drawFrame(zr, LineShape, ZText, Shapeclass.prototype.Setting.frameX, Shapeclass.prototype.Setting.frameY,
                Shapeclass.prototype.Setting.paddingWidth,
                Shapeclass.prototype.Setting.paddingheight,
                Shapeclass.prototype.Setting.seamWidth,
                Shapeclass.prototype.Setting.seamHeight,
                Shapeclass.prototype.Setting.everyholex,
                Shapeclass.prototype.Setting.everyholey,
                Shapeclass.prototype.Setting.Teveryholex,
                Shapeclass.prototype.Setting.Teveryholey);

        });
    },
    
    DrawTrend: null,
    
    drawFrame: function (zr, LineShape, ZText, width_px, height_px, paddingWidth, paddingheight, seamWidth, seamHeight, everyholex, everyholey, Teveryholex, Teveryholey) {
        var points = [
    { x: paddingWidth, y: height_px - paddingheight },//原点
    { x: width_px - paddingWidth, y: height_px - paddingheight },
    { x: paddingWidth, y: paddingheight }];
        var linex = new LineShape({
            style: {
                stroke: "rgba(0, 0, 0, 1)"
            },
            shape: {
                x1: points[0].x,
                y1: points[0].y,
                x2: points[1].x,
                y2: points[1].y
            }
        });
        zr.add(linex);
        var liney = new LineShape({
            style: {
                stroke: "rgba(0, 0, 0, 1)"
            },
            shape: {
                x1: points[0].x,
                y1: points[0].y,
                x2: points[2].x,
                y2: points[2].y
            }
        });
        zr.add(liney);
        //draw x
        for (var i = 0; i < seamHeight; i++) {
            var lz = new ZText({
                style: {
                    color: "rgba(0, 0, 0, 1)",
                    text: i * everyholex + 380,
                    x: paddingWidth + Teveryholex * i - 10,
                    y: height_px - paddingheight + 15
                }
            });
            zr.add(lz);
            var linex = new LineShape({
                style: {
                    stroke: "rgba(0, 0, 0, 1)"
                },
                shape: {
                    x1: paddingWidth + Teveryholex * i,
                    y1: height_px - paddingheight + 1,
                    x2: paddingWidth + Teveryholex * i,
                    y2: height_px - paddingheight - 5
                }
            });
            zr.add(linex);
        }
        //draw y
        for (var i = 0; i < seamWidth; i++) {
            var lz = new ZText({
                style: {
                    color: "rgba(0, 0, 0, 1)",
                    text: (i * everyholey).toString(),
                    rotatetext: true,
                    x: height_px - paddingWidth - Teveryholey * i - 10,
                    y: 0
                }
            });
            zr.add(lz);
            var linex = new LineShape({
                style: {
                    stroke: "rgba(0, 0, 0, 1)"
                },
                shape: {
                    x1: paddingWidth,
                    y1: height_px - paddingheight - Teveryholey * i,
                    x2: paddingWidth + 5,
                    y2: height_px - paddingheight - Teveryholey * i
                }
            });
            zr.add(linex);
        }
    },
    arrAsc: function (everyho) {
        var everet = "";
        var arr = everyho.toString().split('');
        for (var j = 0; j < arr.length; j++) {
            everet = everet + arr[j] + '\n';
        }
        everet = everet.substring(0, everet.length - 1);
        return everet;
    },
    RtoM: function (index, y, width_px, height_px, seamWidth, seamHeight, paddingWidth, paddingheight, arrMax) {//转高宽坐标
        var frameX = width_px;
        var frameY = height_px;
        var x = parseInt((frameX - paddingWidth * 2) * index / 400 + paddingWidth + 0.5);
        var spanY = (frameY - paddingheight * 2) / arrMax;
        return { x: x, y: frameY - (y * spanY) - paddingheight };
    },
    MtoR: function (x, y, width_px, height_px, seamWidth, seamHeight, paddingWidth, paddingheight, scaley) {
        var frameX = width_px;
        var frameY = height_px;
        var spanX = (frameX - paddingWidth * 2) / (seamWidth - 1);
        var spanY = (frameY - paddingheight * 2) * scaley;
        return { x: (780 - 380) / (frameX - paddingWidth * 2) * (x - paddingWidth) + 380, y: spanY / y };
    },
    CSpectGetRGB: function (fSpect) {
        var R, G, B;
        if (fSpect < 380) fSpect = 380;
        if (fSpect > 780) fSpect = 780;
        var iSPE1 = 450;
        var iSPE2 = 520;
        var iSPE3 = 620;
        if (fSpect <= iSPE1) {
            R = 0;
            G = 0;
            B = (parseInt)(255 * (fSpect - 380) / (iSPE1 - 380));
        }
        else if (fSpect < iSPE2) {

            var k1 = 255 * 2.0 / (iSPE2 - iSPE1);
            var b1 = -iSPE1 * k1;
            var m1 = (parseInt)(k1 * fSpect + b1);
            var k2 = 255 * 2.0 / (iSPE1 - iSPE2);
            var b2 = -iSPE2 * k2;
            var m2 = (parseInt)(k2 * fSpect + b2);


            if (m1 >= 255) m1 = 255;
            if (m1 <= 0) m1 = 0;
            if (m2 >= 255) m2 = 255;
            if (m2 <= 0) m2 = 0;
            R = 0;
            G = m1;
            B = m2;
        }
        else if (fSpect < iSPE3) {

            var k1 = 255 * 2.0 / (iSPE3 - iSPE2);
            var b1 = -iSPE2 * k1;
            var m1 = (parseInt)(k1 * fSpect + b1);
            var k2 = 255 * 2.0 / (iSPE2 - iSPE3);
            var b2 = -iSPE3 * k2;
            var m2 = (parseInt)(k2 * fSpect + b2);


            if (m1 >= 255) m1 = 255;
            if (m1 <= 0) m1 = 0;
            if (m2 >= 255) m2 = 255;
            if (m2 <= 0) m2 = 0;
            R = m1;
            G = m2;
            B = 0;
        }
        else {
            R = (parseInt)((780 - fSpect) * 255 / (780 - iSPE3));
            G = 0;
            B = 0;
        }
        return {
            R: R,
            G: G,
            B: B
        };
    }
}

