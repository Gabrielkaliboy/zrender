function myEllipse() {

};
myEllipse.prototype = {
    //new完毕以后必须首先调用这个函数进行初始化
    drawMain: function (divid, arrData, showOrNot) {
        //new出来对象以后，调用这个函数初始化画图，再往里面增减图像的时候
        //再调用addData或者removeData
        this.Mainclass(divid, arrData, showOrNot);
    },
    Setting: {
        //初始值
        frameX: 0,//起点x
        frameY: 0,//起点y
        frameX_end: 200,//终点x
        frameY_end: 200,//终点y
        contain_width: 200,//容器宽
        contain_height: 200,//容器高
        //arrData:arrData,//传入的数据(启用arrDataAll,这个暂停使用)
        xMin: 0.1,//最大最小值
        xMax: null,
        yMax: null,
        yMin: 0.1,
        sectionX: null,//xy轴最大最小值之差
        sectionY: null,
        sectionXStep: null,//xy轴按照8份分割，每份的步数值
        sectionYStep: null,
        sectionXYStep: 0.1,//统一xy坐标轴的步数值，取上面两个的最大值
        kX: null,//每个格多少像素
        kY: null,
        mX: null,//1比例的输入值对应的网页中的像素
        mY: null,
        xt: null,//用户输入的已转化坐标与SDCM相关
        yt: null,
        xtUn: null,//用户输入未转化的原xy坐标
        ytUn: null,
        ellipseOne: null,//用来存放单个椭圆的所有数据，与SDCM有关
        SDCM: null,

        arrDataAll: [],//所有数据存储位置
        divid: null,//存储容器的id值
        showOrNot: 1,//存储showOrNot值
    },
    //如果是加入数据
    addData: function (arrData) {
        //直接将加入的数据塞进总数据接口进行保存
        this.Setting.arrDataAll.push(arrData);
        var divid = this.Setting.divid,
            showOrNot = this.Setting.showOrNot,
            arrData = this.Setting.arrDataAll;
        //调用Mainclass函数重绘
        this.Mainclass(divid, arrData, showOrNot);
    },
    //如果是删除数据,需要调用这个方法，并且传入数据的id进来
    removeData: function (dataId) {
        var arrDataAll = this.Setting.arrDataAll;
        for (var i = 0; i < arrDataAll.length; i++) {
            if (arrDataAll[i].dataId == dataId) {
                //根据索引将当前与传进来的ID相同的对象在数组里面删除
                this.Setting.arrDataAll.splice(i, 1);
            }
        }
        var divid = this.Setting.divid,
            showOrNot = this.Setting.showOrNot,
            arrData = this.Setting.arrDataAll;
        //调用Mainclass函数重绘
        this.Mainclass(divid, arrData, showOrNot);
    },
    Mainclass: function (divid, arrData, showOrNot) {
        //存储一下showOrNot值
        this.Setting.showOrNot = showOrNot;
        //将当前的容器ID值存起来
        this.Setting.divid = divid;
        //获取容器的高度
        this.Setting.contain_height = $("#" + divid).height() - 100;
        //获取容器的高度
        this.Setting.contain_width = $("#" + divid).width() - 200;
        //设置边框线条
        //$("#" + divid).css({ "border": "2px solid #000" });
        //根据获取的容器宽高来设置真实坐标系中每格代表多少像素
        this.Setting.kX = this.Setting.contain_width / 10;
        this.Setting.kY = this.Setting.contain_height / 10;
        //将第一次传输的数据存一份到arrDataAll
        this.Setting.arrDataAll = arrData;
        //重置xmin,ymin,xystep
        this.Setting.xMin = 0.1;
        this.Setting.yMin = 0.1;
        this.Setting.sectionXYStep = 0.1;
        //重置ellipseOne
        this.Setting.ellipseOne = null;
        //如果arrDataAll里面只有一个对象，且是椭圆类型，将其中心点坐标存在setting里面，方便后面计算SDCM
        if (this.Setting.arrDataAll !== null && this.Setting.arrDataAll.length == 1 && this.Setting.arrDataAll[0].type == "Ellipse") {
            this.Setting.ellipseOne = this.Setting.arrDataAll[0].data;
        }
        //初始化设置一下最大最小以及步长,将用户输入的xt,yt顺便存一份，还有计算出来的SDCM
        if (arrData !== undefined && arrData !== null && arrData.length != 0) {
            this.XYAxis();
        }
        //顺序不能变，必须先初始XYAxis函数，否则sectionXYStep是null
        //不用管sectionXStep小数点好几位，因为后面用的时候被我处理掉了
        //mX和mY还是比例尺
        this.Setting.mX = this.Setting.kX / this.Setting.sectionXYStep;
        this.Setting.mY = this.Setting.kY / this.Setting.sectionXYStep;
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
                myEllipse.prototype.DrawTrend = function (arrData) {
                    //画与y轴平行
                    var sectionXYStep = this.Setting.sectionXYStep;
                    var lineXLabelName = this.Setting.xMin - 2 * sectionXYStep;
                    //均分10格，每格多少px
                    var kX = this.Setting.kX;
                    for (var i = 0; i <= 10; i++) {
                        //每个格sectionXStep对应kX像素!!
                        var stepX = 50 + i * kX;
                        //画与y轴平行的辅助线
                        var lineX = new LineShape({
                            style: {
                                stroke: '#BFBFBF',   // == color
                                lineWidth: 2,
                                lineCap: 'butt',
                                lineDash: [3, 3],//新版本里面的虚线
                            },
                            shape: {
                                x1: stepX,
                                y1: 50,
                                x2: stepX,
                                y2: this.Setting.contain_height + 50,
                            }
                        });
                        zr.add(lineX);

                        if (showOrNot) {
                            //画与y轴平行的辅助线的脚标
                            lineXLabelName = lineXLabelName + sectionXYStep;
                            var lineXName = lineXLabelName.toFixed(3);
                            var lineXLabel = new ZText({
                                style: {
                                    x: stepX,//+30让他往右一点,加的越多越往右
                                    y: this.Setting.contain_height + 50 + 15,//-8让他往上移点
                                    brushType: 'both',
                                    color: '#000',
                                    strokeColor: '#000',
                                    lineWidth: 1,
                                    text: lineXName,
                                    textPosition: "top",
                                    textAlign: "center"
                                },
                            });
                            zr.add(lineXLabel);
                        }
                    };

                    //画与x轴平行
                    var lineYLabelName = this.Setting.yMin - 2 * sectionXYStep;
                    //均分10格，每格多少px
                    var kY = this.Setting.kY;
                    for (m = 0; m <= 10; m++) {
                        var stepY = m * kY;
                        var lineY = new LineShape({
                            style: {
                                stroke: '#BFBFBF',   // == color
                                lineWidth: 2,
                                lineCap: 'butt',
                                lineDash: [3, 3],//新版本里面的虚线
                            },
                            shape: {
                                x1: 50,
                                y1: stepY + 50,
                                x2: this.Setting.contain_width + 50,
                                y2: stepY + 50,
                            }
                        });
                        zr.add(lineY);

                        if (showOrNot) {
                            //画与x轴平行的辅助线的脚标
                            lineYLabelName = lineYLabelName + sectionXYStep;
                            var lineYName = lineYLabelName.toFixed(3);
                            var lineYLabel = new ZText({
                                style: {
                                    x: 50 - 20,//50位预留padding，-20为了让脚标在y轴左侧
                                    y: this.Setting.contain_height + 50 - stepY,//整体向上移动40px
                                    brushType: 'both',
                                    color: '#000',
                                    strokeColor: '#000',
                                    lineWidth: 1,
                                    text: lineYName,
                                    textPosition: "top",
                                    textAlign: "center"
                                },
                            });
                            zr.add(lineYLabel);
                        }
                    };

                    //画SDCM以及X,Y坐标说明
                    if (this.Setting.SDCM !== null) {
                        //画提示信息
                        var tips = "x = " + this.Setting.xtUn + "  y = " + this.Setting.ytUn;
                        var tipsLabel = new ZText({
                            style: {
                                x: this.Setting.contain_width + 125,
                                y: (this.Setting.contain_height + 100) / 2 - 60,//
                                brushType: 'both',
                                color: '#000',
                                textFont: 'normal 15px Arial',
                                strokeColor: '#000',
                                lineWidth: 1,
                                text: tips,
                                textPosition: "top",
                                textAlign: "center"
                            }
                        });
                        zr.add(tipsLabel);

                        //画SDCM
                        var SCDMLabelName = "SDCM = " + this.Setting.SDCM;
                        var SCDMLabel = new ZText({
                            style: {
                                x: this.Setting.contain_width + 120,
                                y: (this.Setting.contain_height + 100) / 2 - 30,//
                                brushType: 'both',
                                color: '#000',
                                textFont: 'normal 15px Arial',
                                strokeColor: '#000',
                                lineWidth: 1,
                                text: SCDMLabelName,
                                textPosition: "top",
                                textAlign: "center"
                            },
                        });
                        zr.add(SCDMLabel);
                    }
                    //画椭圆和多边形 arrData传进来的参数就是数据
                    var arrDataAll = this.Setting.arrDataAll;
                    if (arrDataAll !== null && arrDataAll.length !== 0) {
                        //用来做文本偏移的
                        var seriesNameY = 0;
                        for (var j = 0; j < arrDataAll.length; j++) {
                            //筛选椭圆的数据
                            //seriesNameY让他每次下移20px
                            seriesNameY = seriesNameY + 15;
                            //颜色做随机处理
                            var randomColor = '#' + Math.floor(Math.random() * 0xffffff).toString(16);
                            if (arrDataAll[j].type == "Ellipse") {
                                var ellipseData = arrDataAll[j].data,
                                    seriesName = arrDataAll[j].name;
                                for (var angle = 0; angle < 360; angle++) {
                                    var result = this.XYTransition(ellipseData, angle);
                                    //小圆
                                    var EllipseDotLittle = new LineShape({
                                        style: {
                                            stroke: randomColor,   // == color
                                            lineWidth: 2,
                                            lineCap: 'butt',
                                            lineType: 'solid',
                                        },
                                        shape: {
                                            x1: result[0],
                                            y1: result[1],
                                            x2: result[0] + 1,
                                            y2: result[1] + 1,
                                        }
                                    });
                                    zr.add(EllipseDotLittle);

                                    //大圆
                                    var EllipseDotBig = new LineShape({
                                        style: {
                                            brushType: "stroke",
                                            stroke: randomColor,   // == color
                                            lineWidth: 2,
                                            lineCap: 'butt',
                                            lineType: 'solid',
                                        },
                                        shape: {
                                            x1: result[2],
                                            y1: result[3],
                                            x2: result[2] + 1,
                                            y2: result[3] + 1,
                                        }
                                    });
                                    zr.add(EllipseDotBig);

                                    //画中心点
                                    var EllipseX0Y0 = new LineShape({
                                        style: {
                                            stroke: randomColor,   // == color
                                            lineWidth: 4,
                                            lineCap: 'butt',
                                            lineType: 'solid',
                                        },
                                        shape: {
                                            x1: result[4] - 1,
                                            y1: result[5] + 1,
                                            x2: result[4] + 1,
                                            y2: result[5] - 1,
                                        }
                                    });
                                    zr.add(EllipseX0Y0);

                                    //画中心点
                                    var EllipseX1Y1 = new LineShape({
                                        style: {
                                            stroke: randomColor,   // == color
                                            lineWidth: 4,
                                            lineCap: 'butt',
                                            lineType: 'solid',
                                        },
                                        shape: {
                                            x1: result[4] - 1,
                                            y1: result[5] - 1,
                                            x2: result[4] + 1,
                                            y2: result[5] + 1,
                                        }
                                    });
                                    zr.add(EllipseX1Y1);
                                };

                                //仅有一个图像的时候，我让他的标题在中间位置
                                if (arrDataAll.length == 1) {
                                    //加文本
                                    var seriesNameShape = new ZText({
                                        style: {
                                            x: this.Setting.contain_width + 120,
                                            y: (this.Setting.contain_height + 100) / 2,////如果就一个图像，我让他显示在中间位置
                                            brushType: 'both',
                                            color: randomColor,
                                            textFont: 'normal 12px Arial',
                                            stroke: randomColor,
                                            lineWidth: 1,
                                            text: seriesName,
                                            textPosition: "top",
                                            textAlign: "center"
                                        },
                                    });
                                    zr.add(seriesNameShape);
                                } else {
                                    //加文本
                                    var seriesNameShape = new ZText({
                                        style: {
                                            x: this.Setting.contain_width + 120,
                                            y: seriesNameY,//整体向上移动40px
                                            brushType: 'both',
                                            color: randomColor,
                                            textFont: 'normal 12px Arial',
                                            stroke: randomColor,
                                            lineWidth: 1,
                                            text: seriesName,
                                            textPosition: "top",
                                            textAlign: "center"
                                        },
                                    });
                                    zr.add(seriesNameShape);
                                }
                            } else {
                                var polygonData = arrDataAll[j].data,
                                    seriesName = arrDataAll[j].name;
                                //坐标还未转换
                                for (n = 0; n <= polygonData.length - 2; n++) {
                                    //因为有前后坐标的，这样处理不行的。7.17
                                    var xyData1 = polygonData[n],
                                        xyData2 = polygonData[n + 1];
                                    //调用坐标转换函数，得到转换后的xy值
                                    var polygonResult1 = this.importXY(xyData1),
                                        polygonResult2 = this.importXY(xyData2);
                                    //画多边形
                                    var polygon = new LineShape({
                                        style: {
                                            stroke: randomColor,   // == color
                                            lineWidth: 2,
                                            lineCap: 'butt',
                                            lineType: 'solid',
                                        },
                                        shape: {
                                            x1: polygonResult1[0],
                                            y1: polygonResult1[1],
                                            x2: polygonResult2[0],
                                            y2: polygonResult2[1],
                                        }
                                    });
                                    zr.add(polygon);

                                    //处理一下末尾到首位
                                    var xyDataStart = polygonData[0],
                                    xyDataEnd = polygonData[polygonData.length - 1],
                                    StartResult = this.importXY(xyDataStart),
                                    xyDataEnd = this.importXY(xyDataEnd);

                                    var StartEnd = new LineShape({
                                        style: {
                                            stroke: randomColor,   // == color
                                            lineWidth: 2,
                                            lineCap: 'butt',
                                            lineType: 'solid',
                                        },
                                        shape: {
                                            x1: xyDataEnd[0],
                                            y1: xyDataEnd[1],
                                            x2: StartResult[0],
                                            y2: StartResult[1],
                                        }
                                    });
                                    zr.add(StartEnd);
                                }
                                //加文本
                                if (arrDataAll.length == 1) {
                                    var polygonName = new ZText({
                                        style: {
                                            x: this.Setting.contain_width + 120,
                                            y: (this.Setting.contain_height + 100) / 2,//如果就一个图像，我让他显示在中间位置
                                            brushType: 'both',
                                            color: randomColor,
                                            textFont: 'normal 12px Arial',
                                            stroke: randomColor,
                                            lineWidth: 1,
                                            text: seriesName,
                                            textPosition: "top",
                                            textAlign: "center"
                                        },
                                    });
                                    zr.add(polygonName);
                                } else {
                                    var polygonName = new ZText({
                                        style: {
                                            x: this.Setting.contain_width + 120,
                                            y: seriesNameY,//整体向上移动40px
                                            brushType: 'both',
                                            color: randomColor,
                                            textFont: 'normal 12px Arial',
                                            stroke: randomColor,
                                            lineWidth: 1,
                                            text: seriesName,
                                            textPosition: "top",
                                            textAlign: "center"
                                        },
                                    });
                                    zr.add(polygonName);
                                }
                            }
                        };
                    }


                    //画用户传进来的那个点
                    var xt = myEllipse.prototype.Setting.xt;
                    var yt = myEllipse.prototype.Setting.yt;
                    if (xt !== null) {
                        var xtyt11 = new LineShape({
                            style: {
                                stroke: '#FF0000',   // == color
                                lineWidth: 9,
                                lineCap: 'butt',
                                lineType: 'solid',
                            },
                            shape: {
                                x1: xt - 1,
                                y1: yt + 1,
                                x2: xt + 1,
                                y2: yt - 1,
                            }
                        });
                        zr.add(xtyt11);

                        //画用户传进来的那个点
                        var xtyt22 = new LineShape({
                            style: {
                                stroke: '#FF0000',   // == color
                                lineWidth: 9,
                                lineCap: 'butt',
                                lineType: 'solid',
                            },
                            shape: {
                                x1: xt - 1,
                                y1: yt - 1,
                                x2: xt + 1,
                                y2: yt + 1,
                            }
                        });
                        zr.add(xtyt22);
                    }
                };
                myEllipse.prototype.DrawTrend();

            })
    },
    EllipseXY: function (arrData, angle) {
        //核心算法,计算正常坐标系中的椭圆上的xy值
        var g11 = arrData.g11,
            g12 = arrData.g12,
            g22 = arrData.g22,
            x0 = arrData.x0,//中心点
            y0 = arrData.y0,
            r1 = arrData.r1,
            r2 = arrData.r2,
            xt = arrData.xt,
            yt = arrData.yt;

        var angle = angle,//anle=1度,1度为π/180
            cosAngle,
            cosAngle2,
            sinAngle,
            sinAngle2,
            rr,
            r0,
            r11,
            r12,
            EllipseX0,
            EllipseY0,
            EllipseX1,
            EllipseY1,
            EllipseX00,
            EllipseY00,
            EllipseX11,
            EllipseY11,
            SDCM;


        angle = (Math.PI / 180) * angle;//转为与π对应的值
        cosAngle = Math.cos(angle);
        cosAngle2 = Math.pow(cosAngle, 2);
        sinAngle = Math.sin(angle);
        sinAngle2 = Math.pow(sinAngle, 2);
        rr = g11 * cosAngle2 + 2 * g12 * cosAngle * sinAngle + g22 * sinAngle2;
        r0 = Math.sqrt(rr);
        r11 = (0.01 * r1) / r0;
        r12 = (0.01 * r2) / r0;

        //EllipseX0,EllipseY0为第一个小圆上的坐标
        EllipseX0 = x0 + r11 * cosAngle;
        EllipseY0 = y0 + r11 * sinAngle;

        //EllipseX1,EllipseY1为第二个大圆上的坐标
        EllipseX1 = x0 + r12 * cosAngle;
        EllipseY1 = y0 + r12 * sinAngle;

        var result = [EllipseX0, EllipseY0, EllipseX1, EllipseY1, x0, y0];
        return result;

    },
    //XYAxis处理数据，得到最大，最小x,y值,方便在画坐标轴系的时候调用
    XYAxis: function () {
        //用来存储所有椭圆上点和多边形的点的x坐标和y坐标
        var resultXTotal = [],
            resultYTotal = [],
            arrDataAll = myEllipse.prototype.Setting.arrDataAll;
        for (var i = 0; i < arrDataAll.length; i++) {
            //根据数据的type属性写两种算法
            if (arrDataAll[i].type == "Ellipse") {
                for (var XYAxisAngle = 0; XYAxisAngle < 360; XYAxisAngle++) {

                    var ellipseData = arrDataAll[i].data;
                    //将0-360度对应的点的坐标画出来
                    var result = myEllipse.prototype.EllipseXY(ellipseData, XYAxisAngle),
                        resultX = result[2],
                        resultY = result[3];

                    //所有X压入一个数组
                    resultXTotal.push(resultX);
                    //所有Y压入一个数组
                    resultYTotal.push(resultY);
                };

            } else {
                //lineData就是多边形数据
                var lineData = arrDataAll[i].data;
                for (var k = 0; k < lineData.length; k++) {
                    var polygonX = lineData[k][0],
                        polygonY = lineData[k][1];
                    resultXTotal.push(polygonX);
                    resultYTotal.push(polygonY);
                }
            }
        };
        //对所有的点从小到大排列
        resultXTotal.sort(function (a, b) {
            return a - b;
        });
        resultYTotal.sort(function (a, b) {
            return a - b;
        });
        var xMax,
            xMin,
            yMax,
            yMin,
            sectionX,
            sectionY,
            sectionXStep,
            sectionYStep,
            sectionXYStep,
            sortResult = [];

        xMax = resultXTotal[resultXTotal.length - 1];
        xMin = resultXTotal[0];

        yMax = resultYTotal[resultYTotal.length - 1];
        yMin = resultYTotal[0];

        //为了保证一定在这个区间，我又往外扩了0.01
        xMin = parseFloat((xMin - 0.01).toFixed(2)),
        xMax = parseFloat((xMax + 0.01).toFixed(2)),
        yMin = parseFloat((yMin - 0.01).toFixed(2)),
        yMax = parseFloat((yMax + 0.01).toFixed(2));

        //最大值和最小值之间的差值,sectionX,sectionY偏大行，偏小不行，可能溢出
        //section按8分，网页按10份分，八份点是9，不会超出，如果section是10就吵了，因为点数是11
        sectionX = xMax - xMin;
        sectionY = yMax - yMin;

        //均分八份
        sectionXStep = sectionX / 8;
        sectionYStep = sectionY / 8;
        sectionXYStep = Math.max(sectionXStep, sectionYStep);
        sectionXYStep = (Math.ceil((sectionXYStep.toFixed(5)) * 1000)) / 1000;

        this.Setting.xMin = xMin;
        this.Setting.xMax = xMax;
        this.Setting.yMin = yMin;
        this.Setting.yMax = yMax;
        this.Setting.sectionX = sectionX;
        this.Setting.sectionY = sectionY;
        this.Setting.sectionXStep = sectionXStep;
        this.Setting.sectionYStep = sectionYStep;
        this.Setting.sectionXYStep = sectionXYStep;


        sortResult[xMin, xMax, yMin, yMax, sectionX, sectionY, sectionXStep, sectionYStep];
        return sortResult;
    },
    XYTransition: function (arrData, angle) {
        //处理一下将EllipseXY中的坐标转换为我们可以直接用的
        var result = myEllipse.prototype.EllipseXY(arrData, angle),
            EllipseX0 = result[0],
            EllipseY0 = result[1],
            EllipseX1 = result[2],
            EllipseY1 = result[3],
            x0 = result[4],
            y0 = result[5],
            EllipseX00,
            EllipseY00,
            EllipseX11,
            EllipseY11,
            x00,
            y00,
            xMin,
            yMin,
            mX,
            mY,
            kX,
            kY,
            xt,
            yt,
            sectionXYStep,
            contain_height;

        xMin = this.Setting.xMin;
        yMin = this.Setting.yMin;
        mX = this.Setting.mX;
        mY = this.Setting.mY;
        kX = this.Setting.kX;
        kY = this.Setting.kY;
        xt = this.Setting.xt;
        yt = this.Setting.yt;
        sectionXYStep = this.Setting.sectionXYStep;

        contain_height = this.Setting.contain_height;
        contain_width = this.Setting.contain_width;
        //圆上所有的点进行转换
        //1对应mX,mY
        EllipseX00 = (EllipseX0 - (xMin - sectionXYStep)) * mX + 50;
        EllipseY00 = contain_height + 50 - (EllipseY0 - (yMin - sectionXYStep)) * mY;

        Ellipsex11 = (EllipseX1 - (xMin - sectionXYStep)) * mX + 50;
        EllipseY11 = contain_height + 50 - (EllipseY1 - (yMin - sectionXYStep)) * mY;

        x00 = (x0 - (xMin - sectionXYStep)) * mX + 50;
        y00 = contain_height + 50 - (y0 - (yMin - sectionXYStep)) * mY;

        //与上面算法不一样，因为可能不在xMin,yMin,xMax,yMax里面
        // xt=(xt-(xMin-sectionXStep))*mX;
        // yt=contain_height-((yt-(yMin-sectionYStep))*mY);
        // myEllipse.prototype.Setting.xt=xt;
        // myEllipse.prototype.Setting.yt=yt;
        result = [EllipseX00, EllipseY00, Ellipsex11, EllipseY11, x00, y00];
        return result;
    },
    //单独的xy坐标转换，不依赖任何其他函数
    importXY: function (xyData) {
        var importX,
            importY,
            xMin,
            yMin,
            mX,
            mY,
            x,//输入点
            y,
            x0,//中心点
            y0,
            g11,
            g12,
            g22,
            SDCM,
            sectionXYStep,
            contain_height,
            importData;

        xMin = this.Setting.xMin;
        yMin = this.Setting.yMin;
        mX = this.Setting.mX;
        mY = this.Setting.mY;
        sectionXYStep = this.Setting.sectionXYStep;
        contain_height = this.Setting.contain_height;

        x = xyData[0];
        y = xyData[1];

        //在更改xy的值之前，先把当前的xy所对应的SDCM值计算出来
        var ellipseOne = this.Setting.ellipseOne;
        if (ellipseOne !== null) {
            x0 = ellipseOne.x0;
            y0 = ellipseOne.y0;
            g11 = ellipseOne.g11;
            g12 = ellipseOne.g12;
            g22 = ellipseOne.g22;
            this.Setting.xtUn = x;//我想在显示SDCM的时候告诉用户他输入的xy坐标值
            this.Setting.ytUn = y;
            SDCM = 100 * Math.sqrt(g11 * Math.pow((x - x0), 2) + 2 * g12 * (x - x0) * (y - y0) + g22 * Math.pow((y - y0), 2));

            //保留四位小数，后期根据需求再改，我要把它写在每个椭圆的圆心周围
            SDCM = SDCM.toFixed(1);
            this.Setting.SDCM = SDCM;
        }

        //处理一下，超出坐标系区域让他在对应的边角线上面待着
        // x<xMin-sectionXYStep ? x=xMin-sectionXYStep : x=x;
        // x>xMin+9*sectionXYStep ? x=xMin+9*sectionXYStep : x=x;

        // y<yMin-sectionXYStep ? y=yMin-sectionXYStep : y=y;
        // y>yMin+9*sectionXYStep ? y=yMin+9*sectionXYStep : y=y;

        x = x < xMin - sectionXYStep ? xMin - sectionXYStep : x;
        x = x > xMin + 9 * sectionXYStep ? xMin + 9 * sectionXYStep : x;
        y = y < yMin - sectionXYStep ? yMin - sectionXYStep : y;
        y = y > yMin + 9 * sectionXYStep ? yMin + 9 * sectionXYStep : y;
        //标准坐标值
        importX = (x - (xMin - sectionXYStep)) * mX + 50;
        importY = contain_height + 50 - (y - (yMin - sectionXYStep)) * mY;
        importData = [importX, importY];
        return importData;
    },
    peopleXY: function (xyData) {
        var xyData = this.importXY(xyData),
            arrDataAll = this.Setting.arrDataAll,
            divid = this.Setting.divid,
            showOrNot = this.Setting.showOrNot;
        this.Setting.xt = xyData[0];
        this.Setting.yt = xyData[1];
        this.Mainclass(divid, arrDataAll, showOrNot);
    },
};