window.dom={
    find(selector,scope){
        return (scope || document).querySelectorAll(selector)
    },
    style(node,name,value){
        if(arguments.length===3){
           return node.style[name]=value}
        else if(arguments.length===2){
          if(typeof name==='string')
             return node.syele[name]}
          else if(name instanceof Object){
            for(let key in name){
             return node.style[key]=name[key]}
          }
      },
    each(divList,fn){
        for(let i =0;i<divList.length;i++){
          fn.call(null,divList[i])
        }
      },
}
