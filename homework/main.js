let divList=dom.find('#test1>div',test1)
dom.each(divList,(n)=>console.log(n))  
dom.style(divList[0], 'color', 'red')