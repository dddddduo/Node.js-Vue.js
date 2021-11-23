<template>
  <div id="create">
    <el-card>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="_id" label="ID" width="250" />
        <el-table-column prop="name" label="分类名称" />
        <el-table-column label="操作" width="200">
          <template #default="scope">
            <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, getCurrentInstance } from 'vue';
import { useRouter } from "vue-router";
import { ElMessageBox, ElMessage } from 'element-plus'
export default {
  setup() {
    // 页面路由
    const router = useRouter();
    const state = reactive({
      tableData: []
    })
    const { proxy } = getCurrentInstance()
    onBeforeMount(() => {
      init();
    })
    const init = async () => {
      const res = await proxy.$http.get('categories')
      state.tableData = res.data
    }
    // 编辑
    const handleEdit = (row) => {
      router.push(`/categories/edit/${row._id}`)
    }
    // 删除
    const handleDelete = async (row) => {
      console.log(row)
      ElMessageBox.confirm(`是否要删除分类"${row.name}"`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(async () => {
        await proxy.$http.delete(`categories/${row._id}`)
        ElMessage({
          type: 'success',
          message: '删除成功',
        })
        init();
      }).catch(() => {
      })
    }

    return {
      ...toRefs(state),
      router,
      handleEdit,
      handleDelete
    }
  }
}
</script>