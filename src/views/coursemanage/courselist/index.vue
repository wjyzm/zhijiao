<template>
  <div>
    <!--搜索框-->
    <!--表格组件-->
    <!--
        data 数组类型数据
    -->
    <el-table style="width: 100%" border>
      <el-table-column prop="prop" label="序号" width="50px" align="center">
      </el-table-column>
      <el-table-column
        prop="prop"
        label=" 课程名称 "
        width="110px"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="prop"
        label="报名证书 "
        width="width"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="prop"
        label="展示状态 "
        width="width"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="prop" label="分类 " width="width" align="center">
      </el-table-column>
      <el-table-column prop="prop" label="封面图 " width="width" align="center">
      </el-table-column>
      <el-table-column
        prop="prop"
        label="必修/选修 "
        width="width"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="prop" label="创建人 " width="width" align="center">
      </el-table-column>
      <el-table-column prop="prop" label="学分 " width="width" align="center">
      </el-table-column>
      <el-table-column
        prop="prop"
        label="创建时间"
        width="110px"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="prop" label="操作" width="width" align="center">
      </el-table-column>
    </el-table>

    <!--分页器-->
    <el-pagination
      style="margin-top: 20px; textalign: center"
      :current-page="6"
      :total="99"
      :page-size="3"
      :page-sizes="[3, 5, 10]"
      :pager-count="7"
      layout="prev,pager,next,jumper,->,sizes,total"
    >
    </el-pagination>
  </div>
</template>

<script>
//使用辅助函数mapState获取仓库数据
import { mapState } from "vuex";
export default {
  name: "courselist",
  data() {
    return {
      listMsg: {
        //第几页
        page: 1,
        //当前页展示数据条数
        limit: 3,
        //总数据条数
        total: 0,
      },
    };
  },
  mounted() {
    //this.getPageList();
    this.$store.dispatch("courseList",this.listMsg);
  },
  methods: {
    getPageList() {
      
    },
  },
};
</script>

<style scoped>
</style>