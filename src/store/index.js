import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        //气体数据
        gasInfo: [],
        //机器人相关信息
        robotInfo: {},
        //传感器相关信息
        sensorInfo: [
            {
              //名称
              name: '烟雾传感器',
              //时间
              date: '2022-11-18',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `50`,
              //是否异常
              isDanger: true,
              //是否确认
              isConfirm: false,
              //详细情况
              detail: {
                imgSrx:require('@/assets/img/wrong.jpeg')
              }
            },
            {
              name: '红外传感器',
               //时间
               date: '2022-11-16',
              //根据不同传感器添加不同单位，value同理
              position: `168米`,
              value: `160`,
              //是否异常
              isDanger: false,
              //是否确认
              isConfirm: true,
              //详细情况
              detail: {}
            },
            {
              name: '湿度传感器',
               //时间
               date: '2022-11-16',
              //根据不同传感器添加不同单位，value同理
              position: `98米`,
              value: `42`,
              //是否异常
              isDanger: true,
              //是否确认
              isConfirm: false,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
               //时间
               date: '2022-11-16',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: true,
              //是否确认
              isConfirm: true,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
               //时间
               date: '2022-11-16',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: true,
              //是否确认
              isConfirm: true,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
               //时间
               date: '2022-11-16',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: true,
              //是否确认
              isConfirm: false,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
               //时间
               date: '2022-11-16',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: false,
              //是否确认
              isConfirm: true,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
               //时间
               date: '2022-11-16',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: false,
              //是否确认
              isConfirm: true,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
               //时间
               date: '2022-11-16',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: true,
              //是否确认
              isConfirm: false,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
               //时间
               date: '2022-11-16',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: false,
              //是否确认
              isConfirm: true,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
               //时间
               date: '2022-11-16',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: true,
              //是否确认
              isConfirm: false,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
               //时间
               date: '2022-11-16',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: true,
              //是否确认
              isConfirm: true,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
               //时间
               date: '2022-11-16',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: true,
              //是否确认
              isConfirm: true,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
               //时间
               date: '2022-11-16',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: true,
              //是否确认
              isConfirm: false,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
               //时间
               date: '2022-11-16',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: false,
              //是否确认
              isConfirm: true,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
               //时间
               date: '2022-11-16',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: false,
              //是否确认
              isConfirm: true,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
               //时间
               date: '2022-11-16',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: true,
              //是否确认
              isConfirm: true,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
               //时间
               date: '2022-11-16',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: true,
              //是否确认
              isConfirm: true,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
               //时间
               date: '2022-11-16',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: true,
              //是否确认
              isConfirm: false,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
               //时间
               date: '2022-11-16',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: false,
              //是否确认
              isConfirm: true,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
               //时间
               date: '2022-11-16',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: false,
              //是否确认
              isConfirm: true,
              //详细情况
              detail: {}
            },
          ],
        //用户的相关信息
        userInfo:[{
          user:'张明敏',
          password:'123'
        },{
          user:'赵家辉',
          password:'123'
        },{
          user:'陈国栋',
          password:'123'
        },{
          user:'李欣',
          password:'123'
        }]
    },

    mutations: {
        //上报气体信息
        changeGasInfo(state, gasinfo) {
           // console.log('收到了更改气体信息的信息');
            state.gasinfo = gasinfo
        },
        //上报机器人信息
        changeRobotInfo(state, robotInfo) {
          //console.log('提交机器人数据');
          state.robotInfo = robotInfo
        },
        //上报传感器信息
        changeSensorInfo(state, sensorInfo) {
           // console.log('收到了更改传感器的信息');
            state.sensorInfo = sensorInfo
        },
    }
})

export default store



