<template>
  <div class="flex">
    <div class="aside">
      <div class="icon-add-50"></div>
    </div>
    <div class="main">
      <div class="items-list">
        <ul>
          <li v-for="(item, index) in items" :key="index">
            <p>
              <span>{{item.time}}</span>
              <span>{{item.place}}</span>
            </p>
            <p>{{item.thing}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          time: 'aaa',
          thing: 'ddd',
          place: 'sss'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .flex {
    // position: relative;
    // background: rgb(161, 61, 61);
    display: flex;
    flex-flow: row;
    // align-items: flex-start;
    width: 100vw;
    height: 100vh;
  }
  .aside {
    height: 100%;
    width: 48px;
    background: rgb(15, 23, 141);
    border-right: 1px solid grey;
    .icon-add-50{
      position: relative;
      box-sizing: border-box;
      width: 48px;
      height: 48px;
      cursor: pointer;
      &:hover {
        background: rgb(85, 85, 85);
      }
      // border: 2px dashed #9a9ba3;
      // border-radius: 50%;
    }
    .icon-add-50:before{
      content: '';
      position: absolute;
      width: 30px;
      height: 2px;
      left: 50%;
      top: 50%;
      margin-left: -15px;
      margin-top: -1px;
      background-color: #aaabb2;
    }
    .icon-add-50:after{
      content: '';
      position: absolute;
      width: 2px;
      height: 30px;
      left: 50%;
      top: 50%;
      margin-left: -1px;
      margin-top: -15px;
      background-color: #aaabb2;
    }
  }
  .main {
    flex: 1;
    // width: 100%;
    // height: 100%;
    // background: #000;
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
