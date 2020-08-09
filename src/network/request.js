import axios from 'axios'

export function request(config) {
  //1.创建axios实例,整个request返回的本来就是一个Promise
  const instance = axios.create({
    baseURL:'http://152.136.185.210:8000/api/z8',
    timeout:5000
  })

  //2.axios拦截器
  //2.1请求拦截
  instance.interceptors.request.use(config=>{
    //console.log(config);
    //①比如config中的一些信息不符合服务器要求
    //②比如每次发送网络请求时，都希望在界面中显示一个请求中的图标
    //③某些网络请求(比如登录(token))，必须携带一些特殊信息
    return config
  },err=>{
    //console.log(err);
  })

  //2.2响应拦截
  instance.interceptors.response.use(res=>{
    //console.log(res);
    //一定要return出去res，不然别的地方拿不到结果
    return res.data
  },err => {
    console.log(err);
  });

  //3.发送真正的网络请求
  return instance(config)
}


