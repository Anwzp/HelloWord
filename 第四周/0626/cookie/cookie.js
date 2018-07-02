
/**
 * addCookie 是设置cookie的
 *  name 名字
 *  value 值
 *  day  过期时间
 */
let addCookie=(name,value,day)=>{
    if(day){
        let oDate=new Date();
        oDate.setDate(oDate.getDate()+day);
        document.cookie=`${name}=${value}; PATH=/; expires=${oDate}`;
    }else{
        document.cookie=`${name}=${value}; PATH=/;`;
    }
}
/**
 * getCookie 通过cookie的名字返回cookie的值
 * name 名字
 */
let getCookie=(name)=>{
    let arr=document.cookie.split("; ");
    for(let i=0;i<arr.length;i++){
        let arr1=arr[i].split("=");
        if(arr1[0]==name){
            return arr1[1];
        }
    }
}
/**
 * 
 * name  通过该名字删除cookie
 */
let removeCookie=(name)=>{
    addCookie(name,1,-1);
}