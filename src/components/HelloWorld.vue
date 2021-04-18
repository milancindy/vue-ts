<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener">typescript</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    <el-button @click="testAxios">测试axios</el-button>

    <div >
      <span >默认 click 触发子菜单</span>
      <el-cascader
              v-model="propValue"
              :options="options"
              @change="handleChange"></el-cascader>
    </div>
    <div >
      <span >hover 触发子菜单</span>
      <el-cascader
              v-model="propValue"
              :options="options"
              :props="{ expandTrigger: 'hover' }"
              @change="handleChange"></el-cascader>
    </div>

  </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';

class myoption {

    label: string;
    value: string;
    children?: Array<myoption>;

    // 构造函数
    constructor(label:string,value:string,children:Array<myoption>) {
        this.label = label;
        this.value = value;
        this.children = children;
    }

}

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

    @Prop({
        required: false,
        type: Array,
        default:function(){
            return [];
        }
    }) protected value? : Array<string> ;//only used for 外部参数传入


    protected propValue? : Array<string> ;

    private options?:Array<myoption>;

    public handleChange(value:Array<string>):void {
     //   console.log("value "+this.value);
        console.log("interValue "+value);
     //   console.log("propValue "+this.propValue);
    }

    @Watch("value", {immediate: true})//监听外部传入的值并同步给内部使用的propValue
    public watchValue():void {
        this.propValue = this.value;
      //  console.log("propValue2 "+this.propValue);
    }

     constructor() {
        super();
        this.propValue = this.value;
    }

    public  mounted():void{
      //
       // console.log("console");
    }

    public created(): void {
        this.options = [{
            label: '指南',
            value: 'zhinan',
            children: [{
                value: 'shejiyuanze',
                label: '设计原则',
                children: [{
                    value: 'yizhi',
                    label: '一致'
                }, {
                    value: 'fankui',
                    label: '反馈'
                }, {
                    value: 'xiaolv',
                    label: '效率'
                }, {
                    value: 'kekong',
                    label: '可控'
                }]
            }, {
                value: 'daohang',
                label: '导航',
                children: [{
                    value: 'cexiangdaohang',
                    label: '侧向导航'
                }, {
                    value: 'dingbudaohang',
                    label: '顶部导航'
                }]
            }]
        }, {
            value: 'zujian',
            label: '组件',
            children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                    value: 'layout',
                    label: 'Layout 布局'
                }, {
                    value: 'color',
                    label: 'Color 色彩'
                }, {
                    value: 'typography',
                    label: 'Typography 字体'
                }, {
                    value: 'icon',
                    label: 'Icon 图标'
                }, {
                    value: 'button',
                    label: 'Button 按钮'
                }]
            }, {
                value: 'form',
                label: 'Form',
                children: [{
                    value: 'radio',
                    label: 'Radio 单选框'
                }, {
                    value: 'checkbox',
                    label: 'Checkbox 多选框'
                }, {
                    value: 'input',
                    label: 'Input 输入框'
                }, {
                    value: 'input-number',
                    label: 'InputNumber 计数器'
                }, {
                    value: 'select',
                    label: 'Select 选择器'
                }, {
                    value: 'cascader',
                    label: 'Cascader 级联选择器'
                }, {
                    value: 'switch',
                    label: 'Switch 开关'
                }, {
                    value: 'slider',
                    label: 'Slider 滑块'
                }, {
                    value: 'time-picker',
                    label: 'TimePicker 时间选择器'
                }, {
                    value: 'date-picker',
                    label: 'DatePicker 日期选择器'
                }, {
                    value: 'datetime-picker',
                    label: 'DateTimePicker 日期时间选择器'
                }, {
                    value: 'upload',
                    label: 'Upload 上传'
                }, {
                    value: 'rate',
                    label: 'Rate 评分'
                }, {
                    value: 'form',
                    label: 'Form 表单'
                }]
            }, {
                value: 'data',
                label: 'Data',
                children: [{
                    value: 'table',
                    label: 'Table 表格'
                }, {
                    value: 'tag',
                    label: 'Tag 标签'
                }, {
                    value: 'progress',
                    label: 'Progress 进度条'
                }, {
                    value: 'tree',
                    label: 'Tree 树形控件'
                }, {
                    value: 'pagination',
                    label: 'Pagination 分页'
                }, {
                    value: 'badge',
                    label: 'Badge 标记'
                }]
            }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                    value: 'alert',
                    label: 'Alert 警告'
                }, {
                    value: 'loading',
                    label: 'Loading 加载'
                }, {
                    value: 'message',
                    label: 'Message 消息提示'
                }, {
                    value: 'message-box',
                    label: 'MessageBox 弹框'
                }, {
                    value: 'notification',
                    label: 'Notification 通知'
                }]
            }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                    value: 'menu',
                    label: 'NavMenu 导航菜单'
                }, {
                    value: 'tabs',
                    label: 'Tabs 标签页'
                }, {
                    value: 'breadcrumb',
                    label: 'Breadcrumb 面包屑'
                }, {
                    value: 'dropdown',
                    label: 'Dropdown 下拉菜单'
                }, {
                    value: 'steps',
                    label: 'Steps 步骤条'
                }]
            }, {
                value: 'others',
                label: 'Others',
                children: [{
                    value: 'dialog',
                    label: 'Dialog 对话框'
                }, {
                    value: 'tooltip',
                    label: 'Tooltip 文字提示'
                }, {
                    value: 'popover',
                    label: 'Popover 弹出框'
                }, {
                    value: 'card',
                    label: 'Card 卡片'
                }, {
                    value: 'carousel',
                    label: 'Carousel 走马灯'
                }, {
                    value: 'collapse',
                    label: 'Collapse 折叠面板'
                }]
            }]
        }, {
            value: 'ziyuan',
            label: '资源',
            children: [{
                value: 'axure',
                label: 'Axure Components'
            }, {
                value: 'sketch',
                label: 'Sketch Templates'
            }, {
                value: 'jiaohu',
                label: '组件交互文档'
            }]
        }];
    }

  public testAxios(): void {
      this.$store.commit("increment")
      window.parent.postMessage(JSON.stringify('hello'+this.$store.state.count), '*');//跨域传对象
      this.$http.get("/ako/",{}).then((response) => {
          console.log(response.data)
          this.$message("测试 elui"+this.$store.state.count)
         // debugger
      })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
