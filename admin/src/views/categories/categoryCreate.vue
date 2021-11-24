<template>
  <div id="create">
    <el-card>
      <el-form label-width="100px" @submit.prevent="save">
        <el-form-item label="上级分类">
          <el-select v-model="formModel.form.parent" placeholder="Select">
            <el-option
              v-for="item in parents"
              :key="item._id"
              :label="item.name"
              :value="item._id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="formModel.form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { reactive, getCurrentInstance, onBeforeMount, toRefs } from 'vue'
import { useRouter } from "vue-router";
export default {
  props: {
    id: String
  },
  setup(props) {
    const state = reactive({
      parents: []
    })
    const formModel = reactive({
      form: {
        name: '',
        parent: null
      }
    })
    const { proxy } = getCurrentInstance()
    // 页面路由
    const router = useRouter();

    // 提交
    const save = async () => {
      let res;
      if (props.id) {
        res = await proxy.$http.put(`categories/${props.id}`, formModel.form)
      } else {
        res = await proxy.$http.post('categories', formModel.form)
      }
      console.log(res)
      if (res) router.push('/categories/list')
    }

    const fetch = async () => {
      const res = await proxy.$http.get(`categories/${props.id}`)
      console.log(res)
      formModel.form = res.data
    }
    const fetchParents = async () => {
      const res = await proxy.$http.get(`categories/`)
      console.log(res)
      state.parents = res.data
    }

    onBeforeMount(() => {
      fetchParents()
      props.id && fetch()
    })

    return {
      ...toRefs(state),
      router,
      formModel,
      save
    }
  }
}
</script>