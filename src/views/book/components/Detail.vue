<template>
  <el-form ref="postForm" :model="postForm" :rules="rules" class="detail">
    <sticky :class-name="'sub-navbar'">
      <!-- <el-button v-if="!isEdit" @click="showGuide">显示帮助</el-button> -->
      <el-button
        :loading="loading"
        type="success"
        style="margin-left: 10px"
        @click="submitForm"
      >
        {{ isEdit ? '编辑电子书' : '新增电子书' }}
      </el-button>
    </sticky>
    <div class="detail-container">
      <el-row>
        <el-col :span="24">
          <ebook-upload
            :file-list="fileList"
            :disabled="isEdit"
            @onSuccess="onUploadSuccess"
            @onRemove="onUploadRemove"
          />
        </el-col>
        <el-col :span="24">
          <el-form-item prop="title">
            <MdInput v-model="postForm.title" :maxlength="100" name="name" required>
              书名
            </MdInput>
          </el-form-item>
          <el-row>
            <el-col :span="12">
              <el-form-item prop="author" label="作者：" :label-width="labelWidth">
                <el-input
                  v-model="postForm.author"
                  placeholder="作者"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="publisher" label="出版社：" :label-width="labelWidth">
                <el-input
                  v-model="postForm.publisher"
                  placeholder="出版社"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item prop="coverPath" label="分类：" :label-width="labelWidth">
                <el-input
                  v-model="postForm.categoryText"
                  placeholder="分类"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="coverPath" label="分类编号" :label-width="labelWidth">
                <el-input
                  v-model="postForm.category"
                  placeholder="分类编号"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item prop="language" label="语言：" :label-width="labelWidth">
                <el-input
                  v-model="postForm.language"
                  placeholder="语言"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="rootFile" label="根文件：" :label-width="labelWidth">
                <el-input
                  v-model="postForm.rootFile"
                  placeholder="根文件"
                  disabled
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item prop="filePath" label="文件路径：" :label-width="labelWidth">
                <el-input
                  v-model="postForm.filePath"
                  placeholder="文件路径"
                  disabled
                />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="unzipPath" label="解压路径：" :label-width="labelWidth">
                <el-input
                  v-model="postForm.unzipPath"
                  placeholder="解压路径"
                  disabled
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item prop="coverPath" label="封面路径：" :label-width="labelWidth">
                <el-input
                  v-model="postForm.coverPath"
                  placeholder="封面路径"
                  disabled
                />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="originalName" label="文件名称：" :label-width="labelWidth">
                <el-input
                  v-model="postForm.originalName"
                  placeholder="文件名称"
                  disabled
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item prop="cover" label="封面：" :label-width="labelWidth">
                <a v-if="postForm.cover" :href="postForm.cover" target="_blank">
                  <img :src="postForm.cover" class="preview-img">
                </a>
                <span v-else>无</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="目录：" :label-width="labelWidth">
                <div v-if="contentsTree && contentsTree.length > 0" class="contents-wrapper">
                  <el-tree :data="contentsTree" @node-click="onContentClick" />
                </div>
                <span v-else>无</span>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </el-form>
</template>

<script>
import Sticky from '@/components/Sticky';
import EbookUpload from '@/components/EbookUpload'
import MdInput from '@/components/MDinput'
import {createBook,getBook,updateBook,removeBook} from '@/api/book';

const defaultForm = {
  title: '',
  author: '',
  publisher: '',
  language: '',
  rootFile: '',
  cover: '',
  url: '',
  originalName: '',
  contents: '',
  contentsTree: '',
  fileName: '',
  coverPath: '',
  filePath: '',
  unzipPath: ''
}
const fields = {
  title: '书名',
  author: '作者',
  pulisher: '出版社',
  language: '语言'
}
  export default {
    name:'',
    components:{
      Sticky,
      EbookUpload,
      MdInput
    },
    props: {
      isEdit: Boolean
    },
    data() {
      const validateRequire = (rule, value, callback) => {
        if(!value || value.length === 0){
          callback(new Error(fields[rule.field] + '必须填写'))
        }else{
          callback()
        }
      }
      return {
        loading: false,
        postForm: {},
        fileList: [],
        labelWidth: '120px',
        contentsTree: [],
        rules:{
          title: [{validator: validateRequire}],
          author: [{validator: validateRequire}],
          language: [{validator: validateRequire}],
          pulisher: [{validator: validateRequire}]
        }
      };
    },
    created(){
      if(this.isEdit){
        const fileName = this.$route.params.fileName
        this.getBookData(fileName)
      }
    },
    methods: {
      showGuide(){
        //console.log('show guide');
      },
      //新增电子书，提交表单
      submitForm() {
        if(!this.loading){
          this.loading = true
          this.$refs.postForm.validate((valid, fields) => {
            if(valid){
              const book = {...this.postForm}
              //delete book.contents
              delete book.contentsTree
              if(!this.isEdit){
                createBook(book).then(res => {
                  const {msg} = res
                  this.$message({
                    type: 'success',
                    message: msg,
                  })
                  this.loading = false
                  this.setDefault()
                }).catch(()=> {
                  this.loading = false
                })
                
              }else{
                updateBook(book).then(res => {
                  const {msg} = res
                  this.$message({
                    type: 'success',
                    message: msg,
                  })
                  this.loading = false
                }).catch(()=> {
                  this.loading = false
                })
              }
            }else{
              const message = fields[Object.keys(fields)[0]][0].message
              this.$message({ message,type: 'error'})
              this.loading = false
            }
          })
        }
      },
      //上传成功回调
      onUploadSuccess(data) {
        console.log('onUploadSuccess',data);
        this.setData(data)
      },
      //移除电子书回调
      onUploadRemove() {
        console.log('onUploadRemove',this.postForm);
        //removeBook(this.postForm)
        this.setDefault()
      },
      setDefault(){
        //this.postForm = Object.assign({}, defaultForm)
        this.contentsTree = []
        this.fileList = []
        this.$refs.postForm.resetFields()
      },

      //章节节点点击事件
      onContentClick(data) {
        if(data.text){
          window.open(data.text)
        }
      },
      setData(data){
        const {
          title,
          author,
          publisher,
          language,
          rootFile,
          cover,
          url,
          originalName,
          contents,
          contentsTree,
          fileName,
          coverPath,
          filePath,
          unzipPath,
          category,
          categoryText
        } = data
        this.postForm = {
          ...this.postForm,
          title,
          author,
          publisher,
          language,
          rootFile,
          cover,
          url,
          originalName,
          contents,
          contentsTree,
          fileName,
          coverPath,
          filePath,
          unzipPath,
          category: category || 99,
          categoryText: categoryText || '自定义'
        }
        this.contentsTree = contentsTree
        this.fileList = [{ name: originalName || fileName, url}]
        console.log(this.postForm);
      },
      //编辑电子书：获取电子书数据
      getBookData(fileName){
        getBook(fileName).then(res => {
          this.setData(res.data)
        })
      }
      
    },
    watch:{

    }
};
</script>

<style lang="less" scoped>
  .detail{
    margin-top: 50px;
    .detail-container {
      padding: 40px 50px 20px;

      .preview-img {
        width: 200px;
        height: 270px;
      }
    }
  }
</style>
