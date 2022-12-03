import Vue from 'vue';
import {Icon,Table,TableColumn,Button,Carousel,CarouselItem,
    Dialog,Card,Select,Option,Tooltip,Calendar,Badge,Popover,Tag,
    Tabs,TabPane,Switch,Input,Row,FormItem,Col,Form,Loading,MessageBox,Message,
    DatePicker,Pagination,TimePicker
} from 'element-ui';

Vue.use(Icon)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Dialog)
Vue.use(Card)
Vue.use(Select)
Vue.use(Option)
Vue.use(Tooltip)
Vue.use(Calendar)
Vue.use(Badge)
Vue.use(Popover)
Vue.use(Tag)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Switch)
Vue.use(Input)
Vue.use(Row)
Vue.use(FormItem)
Vue.use(Col)
Vue.use(Form)
Vue.use(DatePicker)
Vue.use(Pagination)
Vue.use(TimePicker)

Vue.use(Loading)
Vue.component(MessageBox.name,MessageBox)
Vue.prototype.$message=Message
Vue.prototype.$confirm=MessageBox.confirm

//顺便引入echarts的水球图插件
import 'echarts-liquidfill'

