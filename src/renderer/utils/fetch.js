import axios from 'axios'
//因为axios默认发的是json格式数据，我们要做表单提交，需要更改axios配置
// 引入 Qs是为了把json格式，转为formdata 的数据格式
import Qs from 'Qs'
const service = axios.create({
    baseURL: 'api',
 timeout: 1000,
 headers: {'Content-Type': 'application/x-www-form-urlencoded'},
transformRequest: [
   function(data){
            // 对data进行任意转换处理
      return Qs.stringify(data);
        }
    ]
});


// 登录接口
export function loginReq(user, pwd){
    return axios.post('/login.json', {
        loginName: user,
        loginPwd: pwd
    })
}
// 注册接口
export function registerReq(user, pwd){
    return axios.post('/register.json', {
        username: user,
        password: pwd
    })
}
// ...接口