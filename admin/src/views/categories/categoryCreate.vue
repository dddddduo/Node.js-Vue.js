<template>
  <div id="create">
    <el-card>
      <el-form label-width="100px" @submit.prevent="save">
        <el-form-item label="名称">
          <el-input v-model="formModel.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { reactive, getCurrentInstance, onBeforeMount } from 'vue'
import { useRouter } from "vue-router";
export default {
  props: {
    id: String
  },
  setup(props) {
    const formModel = reactive({
      name: ''
    })
    const { proxy } = getCurrentInstance()
    // 页面路由
    const router = useRouter();

    // 提交
    const save = async () => {
      let res;
      if (props.id) {
        res = await proxy.$http.put(`categories/${props.id}`, formModel)
      } else {
        res = await proxy.$http.post('categories', formModel)
      }
      console.log(res)
      if (res) router.push('/categories/list')
    }

    const fetch = async () => {
      const res = await proxy.$http.get(`categories/${props.id}`)
      console.log(res)
      formModel.name = res.data.name
    }

    onBeforeMount(() => {
      props.id && fetch()
    })

    return {
      router,
      formModel,
      save
    }
  }
}
</script>