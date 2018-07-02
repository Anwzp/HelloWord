function $(fn){
    if(document.addEventListener){
        document.addEventListener('DOMContentLoaded',function(){
            fn&&fn();
        })
    }else{
        document.attachEvent('onreadyStatechange',function(){
            if(document.readyState=='complete'){
                console.log(document.readyState)
                fn&&fn();
            }
        })
    } 
}