<template>
  <div class="upload-container">
    <el-upload
      :action="action"
      :headers="headers" 
      :multiple="false"
      :limit="1"
      :before-upload="beforeUpload"
      :on-success="onSuccess"
      :on-error="onError"
      :on-remove="onRemove"
      :file-list="fileList"
      :on-exceed="onExceed"
      :disabled="disabled"
      drag
      show-file-list
      accept="application/epub+zip"
      class="image-upload"
    >
      <i class="el-icon-upload" />
      <div v-if="fileList.length === 0" class="el-upload__text">
        请将电子书拖入或 <em>点击上传</em>
      </div>
      <div v-else class="el-upload__text">图书已上传</div>
    </el-upload>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'

export default {
  props: {
    fileList: {
      type: Array,
      default() {
        return []
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      action: `http://localhost:5000/book/upload`
    }
  },
  computed: {
    headers() {//token认证
      return {
        Authorization: `Bearer ${getToken()}`
      }
    }
  },
  methods: {
    beforeUpload(file) {
      this.$emit('beforeUpload', file)
    },
    //上传成功事件
    onSuccess(response, file) {
      const { code, msg, data } = response
      console.log(data);
      if (code === 0) {
        this.$message({
          message: msg,
          type: 'success'
        })
        this.$emit('onSuccess', data)
      } else {
        this.$message({
          message: (msg && `上传失败，失败原因：${msg}`) || '上传失败',
          type: 'error'
        })
        this.$emit('onError', file)
      }
    },
    //上传失败事件
    onError(err) {
      const errMsg = err.message && JSON.parse(err.message)
      this.$message({
        message: (errMsg && errMsg.msg && `上传失败，失败原因：${errMsg.msg}`) || '上传失败',
        type: 'error'
      })
      this.$emit('onError', err)
    },
    //移除事件
    onRemove() {
      this.$message({
        message: '电子书删除成功',
        type: 'success'
      })
      this.$emit('onRemove')
    },
    //提示
    onExceed() {
      this.$message({
        message: '每次只能上传一本电子书',
        type: 'warning'
      })
    }
  }
}
</script>

<style lang="less">
  .upload-container{
    .el-upload{
      width: 100%;
      .el-upload-dragger{
        width: 100%;
        height: 200px;
      }
    }
  }
</style>