/*
* key 键名
* value 值
* data 过期时间单位秒
* */
function addCookie(key, value, data) {
    if (data) {
        let oData = new Date();
        oData.setDate(oData.getDate() + data)
        document.cookie = `${key}=${value};PATH:/;expires=${oData}`;
    } else {
        document.cookie = `${key}=${value};`;
    }
}

/*
*查看cookie
* name  cookie的名字
* 查询结束返回查到的对象
* */
// function getCookie(name) {
//     let json = {};
//     let arr = document.cookie.split(';');
//     console.log(arr)
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].indexOf(name)!==-1) {
//             let arr1 = arr[i].split('=');
//             let str = arr1[1].substring(1, arr1[1].length - 1);
//             let arr2 = str.split(',');
//             for (let i = 0; i < arr2.length; i++) {
//                 let arr3 = arr2[i].split(':');
//                 json[arr3[0]] = arr3[1];
//                 return json;
//             }
//         }
//
//     }
//     return '您查找的cookie不存在或已过期';
// }
let getCookie=(name)=>{
    let arr=document.cookie.split("; ");
    for(let i=0;i<arr.length;i++){
        let arr1=arr[i].split("=");
        if(arr1[0]==name){
            return arr1[1];
        }
    }
}
    function removeCookie(name) {
        addCookie(name, 1, -1)
    }
