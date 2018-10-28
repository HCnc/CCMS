/**
 * Created by 许东 on 2017/9/27.
 */

$(function () {
    var voltData = []        //电压数据
    var odMuMinModVolt = []   //最低模组电压
    var odMuHigherNbr = []     //高于阈值电压的个数
    var VoltChart = echarts.init(document.getElementById('oneModVoltPhoto'));//电压图
    for (var ii = 0; ii < 15; ii++) {
        voltData.push({
            name: new Date().toString(),
            value: [
                [0, 0, 0].join('/')+" "+[0,0,0].join(':'),
                0
            ]
        });//先在其中放15个数据,占位
        odMuMinModVolt.push({
            name: new Date().toString(),
            value: [
                [0, 0, 0].join('/')+" "+[0,0,0].join(':'),
                0
            ]
        })
        odMuHigherNbr.push({
            name: new Date().toString(),
            value: [
                [0, 0, 0].join('/')+" "+[0,0,0].join(':'),
                0
            ]
        })
    }



    // var socket = new WebSocket(config.ipAdress)

    // var a =  "getRealData"

    // socket.onopen = function(){
    //     console.log('连接成功')

    //     socket.send(
    //         a

    //     )
    // }
    // socket.onclose = function(){
    //     console.log('连接关闭')
    // }

    // socket.onmessage = function(evt){
    //     dealMsg(evt)
    // }
    // socket.onerr = function(){
    //     console.log('连接发生错误')
    // }

    deal = function(data){
        console.log("...onePowerModNow is working...");
        //console.log(data6);
        dealMsg(data);
    }

    dealMsg = function(evt){

        var d=new Date()      //TTTTTTTTTTTTTTTTTTT
        var minute=d.getMinutes()<10?'0'+d.getMinutes():d.getMinutes();
        var second=d.getSeconds()<10?'0'+d.getSeconds():d.getSeconds();


        //console.log("接收到消息"+evt.data)
        //var str = evt.data
        var msgJson = evt;//JSON.parse(str)
        if (true/*msgJson.RealTime_AllModuleState_PowerID1*/) {
            // var timeStr = msgJson.RealTime_AllModuleState_PowerID1.time
            // var timeBox = []
            // timeBox = timeStr.split(" ")
            // timeBoxopop = timeBox[0].split("-")

            voltData.shift();
            console.log("dataSSS是************" + voltData[3].value.toString())
            voltData.push({
                name: "Moduel_Average_Voltage",//msgJson.RealTime_AllModuleState_PowerID1.time.toString(),
                value: [
                    [d.getFullYear(), d.getMonth(), d.getDate()].join('/') + " " + [d.getHours(), minute, second].join(':'),
                    // timeBoxopop[2], timeBoxopop[0], timeBoxopop[1]].join('/')+" "+[timeBox[1]],
                    msgJson.Moduel_Average_Voltage//RealTime_AllModuleState_PowerID1.averageModVolt
                ]
            });
            voltOption.series[0].data = voltData

            odMuMinModVolt.shift()
            odMuMinModVolt.push({
                name: "Minimum_Module_Voltage",//msgJson.RealTime_AllModuleState_PowerID1.time.toString(),
                value: [
                    [d.getFullYear(), d.getMonth(), d.getDate()].join('/') + " " + [d.getHours(), minute, second].join(':'),
                    // timeBoxopop[2], timeBoxopop[0], timeBoxopop[1]].join('/')+" "+[timeBox[1]],
                    msgJson.Minimum_Module_Voltage//RealTime_AllModuleState_PowerID1.odMuMinModVolt
                ]
            })
            voltOption.series[1].data = odMuMinModVolt

            odMuHigherNbr.shift()
            odMuHigherNbr.push({
                name: "Modules_Above_Threshold_Voltage",//msgJson.RealTime_AllModuleState_PowerID1.time.toString(),
                value: [
                    [d.getFullYear(), d.getMonth(), d.getDate()].join('/') + " " + [d.getHours(), minute, second].join(':'),
                    // timeBoxopop[2], timeBoxopop[0], timeBoxopop[1]].join('/')+" "+[timeBox[1]],
                    msgJson.Modules_Above_Threshold_Voltage//RealTime_AllModuleState_PowerID1.odMuHigherNbr
                ]
            })
            voltOption.series[2].data = odMuHigherNbr
            VoltChart.setOption(voltOption)
        }
    }



    voltOption = {
        backgroundColor:'#000000',
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['平均电压','最低电压','高于阈值电压模组的个数'],
            itemWidth:10,//图例的宽度
            itemHeight:10,//图例的高度
            textStyle:{//图例文字的样式
                fontSize:16,
                color:['#00FF00','#FF0000','#00FFFF']
            }
        },
        xAxis: {
            type: 'time',
            axisLabel:{
                rotate:-30
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
        series: [{
            name: '平均电压',
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
                name: '最低电压',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: odMuMinModVolt,
                smooth:true,
                itemStyle : {
                    normal : {
                        lineStyle:{
                            color:'#38b0de'
                        }
                    }
                },
            },
            {
                name: '高于阈值电压模组的个数',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: odMuHigherNbr,
                smooth:true,
                itemStyle : {
                    normal : {
                        lineStyle:{
                            color:'#ff0000'
                        }
                    }
                },
            }
            ]
    };
    VoltChart.setOption(voltOption);

})