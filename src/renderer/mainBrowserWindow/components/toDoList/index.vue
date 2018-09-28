<template>
<div>
  <el-row class="tac flex">
    <el-col style="width: 180px">
      <el-menu
        default-active="0"
        @select="select"
        class="el-menu-vertical-demo left">
        <el-menu-item v-for="(item, index) in items" :key="index" :index="index.toString()">
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
        <el-button style="margin-left: 20px;" type="text" @click="dialogFormVisible = true">新建事项</el-button>
      </el-menu>
    </el-col>
    <el-col class="main left">
      <mycard :todo="items[index]"></mycard>
    </el-col>

    <el-dialog style="text-align:left" title="事项信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </el-row>
</div>
</template>

<script>
  import mycard from './my-card'
  export default {
    data () {
      return {
        items: [],
        index: 0,
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      }
    },
    components: {
      mycard
    },
    mounted () {
      let config = {
        method: 'GET'
      }
      let self = this
      this.$http('/getToDoList', config).then((res) => {
        self.items = res.data
      })
    },
    methods: {
      select (index, indexPath) {
        this.index = index
      }
    }
  }
</script>

<style lang="scss" scoped>
  .left {
    text-align: left;
  }
  .flex {
    // position: relative;
    // background: rgb(161, 61, 61);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100vw;
    height: auto;
  }
  .main {
    flex: 1;
    font-size: 18px;
    height: 100%;
    overflow-y: scroll;
    // background: #000;
    &::-webkit-scrollbar {
      width: 8px;
      padding-right: 10px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: #e1e1e2;
    }
  }
  .items-list {
    text-align: left;
    width: auto;
    // background: #000;
    // height: 49px;
    ul {
      padding: 8px;
      li {
        background: #d6d6d6;
        list-style: none;
        padding: 2px 10px;
      }
    }
  }



</style>
