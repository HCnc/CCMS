/**
 * Created by 许东 on 2017/9/27.
 */

$(function () {
    var voltData = []        //电压数据
    var currentData = []   //电流数据
    var tempData = []     //温度数据
    var VoltChart = echarts.init(document.getElementById('oneVPhoto'));//电压图
    // tian chong shu ju
    for (var ii = 0; ii < 15; ii++) {
        voltData.push({
            name: new Date().toString(),
            value: [
                [0, 0, 0].join('/')+" "+[0,0,0].join(':'),
                0
            ]
        });//先在其中放15个数据,占位
        currentData.push({
            name: new Date().toString(),
            value: [
                [0, 0, 0].join('/')+" "+[0,0,0].join(':'),
                0
            ]
        })
        tempData.push({
            name: new Date().toString(),
            value: [
                [0, 0, 0].join('/')+" "+[0,0,0].join(':'),
                0
            ]
        })
    }



    deal = function(data){
        console.log("...onePowerNow is working...");
        //console.log(data6);
        dealMsg(data);
    }

    dealMsg = function(evt) {
        var d = new Date()      //TTTTTTTTTTTTTTTTTTT
        var minute = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
        var second = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
        // console.log("接收到消息" + evt.data)
        // var str = evt.data
        var msgJson = evt//JSON.parse(str)

        console.log("...msgJson...");
        console.log(msgJson);

        if (true/*msgJson.RealTime_PowerState_PowerID1*/){

            // var timeStr = msgJson.RealTime_PowerState_PowerID1.time
            // var timeBox = []
            // timeBox = timeStr.split(" ")
            // timeBoxopop = timeBox[0].split("-")
            voltData.shift();
            console.log("dataSSS是************" + voltData[3].value.toString())

            var dto = [d.getFullYear(), d.getMonth(), d.getDate()].join('/') + " " + [d.getHours(), minute, second].join(':');
            voltData.push({
                name: "test_name",//new Date().toString(),//msgJson.RealTime_PowerState_PowerID1.time.toString(),
                value: [
                    [d.getFullYear(), d.getMonth(), d.getDate()].join('/') + " " + [d.getHours(), minute, second].join(':'),
                    // timeBoxopop[2], timeBoxopop[0], timeBoxopop[1]].join('/')+" "+[timeBox[1]],
                    //msgJson.RealTime_PowerState_PowerID1.CMSVolt
                    msgJson.Module_Voltage
                ]
            });
            voltOption.series.data = voltData
            // console.log("...voltData...");
            // console.log(voltData);
            // console.log("...data...");
            // console.log(voltOption.series.data);
            currentData.shift()
            currentData.push({
                name: "secend_name",//msgJson.RealTime_PowerState_PowerID1.time.toString(),
                value: [
                    [d.getFullYear(), d.getMonth(), d.getDate()].join('/') + " " + [d.getHours(), minute, second].join(':'),
                    // timeBoxopop[2], timeBoxopop[0], timeBoxopop[1]].join('/')+" "+[timeBox[1]],
                    //msgJson.RealTime_PowerState_PowerID1.CMSCur
                    msgJson.Module_Capacitance_Temperature
                ]
            })
            voltOption.series[1].data = currentData
            tempData.shift()
            tempData.push({
                name: "third_name",//msgJson.RealTime_PowerState_PowerID1.time.toString(),
                value: [
                    [d.getFullYear(), d.getMonth(), d.getDate()].join('/') + " " + [d.getHours(), minute, second].join(':'),
                    // timeBoxopop[2], timeBoxopop[0], timeBoxopop[1]].join('/')+" "+[timeBox[1]],
                    //msgJson.RealTime_PowerState_PowerID1.CMSTemp
                    msgJson.Module_Board_Temperature
                ]
            })
            voltOption.series[2].data = tempData
             VoltChart.setOption(voltOption);
        }
    }

    voltOption = {

		backgroundColor:'#000000',

        tooltip: {
            trigger: 'axis'
        },

        legend: {
            data:['电压','电流','温度'],
            //data:['电压'],
            itemWidth:10,//图例的宽度
            itemHeight:10,//图例的高度
            textStyle:{//图例文字的样式
                fontSize:16,
                color:['#00FF00']
            }
        },

        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },

        xAxis: {
            type: 'time',
            axisLabel:{
                rotate:0
            },
            axisLine:{
                lineStyle:{
                    show:true,
                    color:'#00FF00',
                    width:1,//这里是为了突出显示加上的
                }
            },

            interval: 1000*2

        },

        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
            axisLine:{
                lineStyle:{
                    show:true,
                    color:'#00FF00',
                    width:1,//这里是为了突出显示加上的
                }
            },
        },

        series: [
            {
                name: '电压',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: voltData,
                smooth:true,
                itemStyle : {
                    normal : {
                        lineStyle:{
                            color:'#00FF00'
                        }
                    }
                },
            },
            
            {
                name: '电流',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: currentData,
                smooth:true,
                itemStyle : {
                    normal : {
                        lineStyle:{
                            color:'#FF0000'
                        }
                    }
                },
            },

            {
                name: '温度',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: tempData,
                smooth:true,
                itemStyle : {
                    normal : {
                        lineStyle:{
                            color:'#00FFFF'
                        }
                    }
                },
            }
        ]
                  
    };
    VoltChart.setOption(voltOption);

})