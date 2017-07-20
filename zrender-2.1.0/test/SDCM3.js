
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>将xy的坐标步进制设为统一</title>
    <script src="https://cdn.bootcss.com/jquery/1.10.2/jquery.js"></script>
    <style>
        #main {
            margin: 200px auto;
        }
    </style>
    <script src="~/Scripts/zrender/esl.js"></script>
    <script src="~/Scripts/everfinecharts/SDCM.js"></script>
</head>
<body>
    <!-- 建议按照这个尺寸给！！！ -->
    <div id="main" style="width:700px;height:600px;"></div>
    <script type="text/javascript">
        arrDataAll = [{
            "type": "Ellipse",
            "dataId": "Ellipse1",
            "data": {
                "g11": 39,
                "g12": -19.5,
                "g22": 27.5,
                "x0": 0.44,
                "y0": 0.403,
                "r1": 5,
                "r2": 6,
            },
            "name": "C78.376_3000K"
        }, {
            "type": "polygon",
            "dataId": "polygon1",
            "data": [[0.48106, 0.43149], [0.45614, 0.42586], [0.43725, 0.38922], [0.45906, 0.39406]],
            "name": "C78.377_2700K"
        }];
        //6500k
        var addData1 = {
            "type": "Ellipse",
            "dataId": "Ellipse2",
            "data": {
                "g11": 86,
                "g12": -40,
                "g22": 45,
                "x0": 0.313,//椭圆中心点坐标
                "y0": 0.337,
                "r1": 5,
                "r2": 6,//必须是大的！
            },
            "name": "C78.376_6500K"
        };
        var addData2 = {
            "type": "polygon",
            "dataId": "polygon2",
            "data": [[0.456, 0.434], [0.456, 0.452], [0.465, 0.452], [0.465, 0.443], [0.460, 0.438]],
            "name": "C78.377_2700K"
        };
        //6500k
        var arrDataAll1 = [{
            "type": "Ellipse",
            "dataId": "Ellipse2",
            "data": {
                "g11": 86,
                "g12": -40,
                "g22": 45,
                "x0": 0.313,//椭圆中心点坐标
                "y0": 0.337,
                "r1": 5,
                "r2": 6,//必须是大的！
            },
            "name": "C78.376_6500K"
        }];

        var arrDataAll2 = [{
            "type": "polygon",
            "dataId": "polygon2",
            "data": [[0.456, 0.434], [0.456, 0.452], [0.465, 0.452], [0.465, 0.443], [0.460, 0.435]],
            "name": "C78.377_2700K"
        }];
            var aa = new myEllipse();
            aa.drawMain("main",arrDataAll1, 0);//第一个是容器，第二个是数据，如果没有就填null或者空数组，第三个是是否显示坐标轴坐标(0:不显示,1:显示)
            //aa.removeData('polygon1');//用来实现移除某点
            //aa.addData(addData1);//用来实现增加某点,addData必须是{}对象，不能是数组
            //aa.removeData('Ellipse1');
            //aa.addData(addData2);
            aa.peopleXY([0.42, 0.3]);//用来设置用户输入的点,输入点需为数组，并且只有单个椭圆的时候才会绘制SDCM
            //aa.removeData('polygon1');
            //aa.removeData('Ellipse2')
    </script>
</body>
</html>