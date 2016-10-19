/**
 * Created by Administrator on 2016/10/14.
 * 系统参数  统一配置
 */
var baseUrl = '//localhost:8082';



/**
 * 系统资源访问路径  统一配置
 * resUrl.sys.toLogin
 * */
    // 1.数据请求接口地址
var resUrl = {
    //系统：登录页，登录提交
    sys: {
        comLogin:"/sys/commitLogin.do",
        main:"/sys/main.do",
        out:"/sys/logOut.do"
    },
    //用户管理：
    users:{

    },
    //资源管理：
    resources:{
        query:"/resManage/resQuery.do",
        add:"/resManage/resAdd.do",
        find:"/resManage/resFind.do",
        edit:"/resManage/resEdit.do",
        resSelect:"/resManage/letGo/resSelect.do"},
    //角色管理
    role:{
        query:"/role/query.do",
        getResList:"/role/letGo/bindRoleRes.do",//角色关联权限获取
        bindRes:"/role/bindRoleRes.do"
    }
}
   // 2.页面导航布局地址
var viewPath = {
    base:"/pages",
    //系统：登录页，登录提交
    sys:{
        login:"/sys/login.html",
        main:"/sys/main.html",
        index:"/sys/index.html"
    },
    //用户管理：
    users:{

    },
    //资源管理：
    resources:{
        list:"/resource/list.html",
        add:"/resource/add.html"
    },
    //角色管理
    role:{
        list:"/role/list.html",
        bindRes:"role/bind.html"
    }
}