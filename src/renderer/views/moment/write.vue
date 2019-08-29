<template>
    <div>
        <div class="vChat-container flex1 flexbox flex__direction-column">
            <div class="vChat__header">
                <div class="inner flexbox">
                    <a class="lk ml-10" href="javascript:;" @click="$router.back"><i class="iconfont icon-back"></i></a> <div class="flex1 align-c pt-15">
                        <el-button-group>
                            <el-button type="info" icon="el-icon-close" size="mini" v-popover:popover_del>取消</el-button> <el-button type="primary" icon="el-icon-check" size="mini" @click="submitForm('ruleForm')">发表</el-button>
                        </el-button-group>
                        <el-popover ref="popover_del" placement="bottom" width="160" trigger="click" v-model="popoverVisible_del">
                            <p class="pad10">确定要取消吗？</p> <div style="text-align: right; margin: 0">
                                <el-button size="mini" type="text" @click="popoverVisible_del = false">取消</el-button> <el-button type="primary" size="mini" @click="popoverVisible_del = false">确定</el-button> </div>
                        </el-popover> </div>
                </div>
            </div>
            <div class="vChat__main flex1 flexbox flex__direction-column">
                <geminiScrollbar autoshow class="geminiScrollbar flex1">
                    <div class="pad20">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm"> <el-form-item prop="content"> <el-input type="textarea" :rows="5" placeholder="这一刻的想法..." v-model="ruleForm.content"></el-input>
                            </el-form-item>
                            <el-form-item> <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-exceed="handleExceed" multiple :limit="ruleForm.limit">  <i class="el-icon-plus"></i>
                                </el-upload>
                            </el-form-item>
                            <el-form-item> <div style="cursor:pointer;float:left;margin:-5px 0 -20px;" @click="dialogVisible_map = true"><i class="el-icon-location-outline mr-10"></i> 所在位置</div>
                            </el-form-item>
                            <el-form-item prop="whosee"> <el-radio-group v-model="ruleForm.whosee">
                                <el-radio label="1">公开</el-radio> <el-radio label="2">私密</el-radio>
                                <el-radio label="3">部分可见</el-radio> <el-radio label="4">不给谁看</el-radio>
                                </el-radio-group> </el-form-item>
                        </el-form>
                    </div>
                </geminiScrollbar>
            </div>
        </div>
        <el-dialog :visible.sync="dialogVisible_map" width="640px" center>
            <p slot="title" class="fs-18 ff-st">选择所在位置</p>  <div class="amap-page-container" style="margin-top:-20px;">   <el-amap vid="amap" :plugin="plugin" style="height:450px;"></el-amap>
            </div> </el-dialog>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                popoverVisible_del: false, dialogVisible_map: false, 
                ruleForm: {
                    content: '', whosee: '1', limit: 6, //最大允许上传个数
                },
                rules: { content: [ { required: true, message: '说点什么吧！', trigger: 'blur' },
                        { min: 3, max: 5, message: '内容长度在 3 到 100 个字符', trigger: 'blur' } ],
                },

                plugin: [{ pName: 'ToolBar', events: {
                    init(instance) {
                    }
                    }
                }]
            }
        },
        methods: {
            // 超过上传数量提示
            handleExceed(){this.$message({ type: 'error', center: true, message: '最大允许上传 ' + this.ruleForm.limit + ' 张!' });
            },
            // 保存
            submitForm(formName){ this.$refs[formName].validate((valid) => {
                    if (valid) { this.$message({ type: 'success', center: true, message: '提交成功!' });
                    } else {
                        return false;
                    }
                });
            }
        },
    }
</script>

<style>

</style>
