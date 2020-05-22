//格式化时间
export function formatDate(time){
  let date=new Date(time);
  let y=date.getFullYear();
  let m=date.getMonth()+1;
  let d=date.getDate();
  let hh=date.getHours();
  let mm=date.getMinutes();
  let ss=date.getSeconds();
  m=m>10?m:"0"+m;
  d=d>10?d:"0"+d;
  hh=hh>10?hh:"0"+hh;
  mm=mm>10?mm:"0"+mm;
  ss=ss>10?ss:"0"+ss;
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
}

//generator函数执行器
export function runner(gen){
  let it = gen(); //调用函数
  return next(it.next()); //启动函数

  function next({done,value}){
    Promise.all([value]).then(
      res=>{
        if(done){
          return res; //函数全部执行结束则返回值
        }else{
          next(it.next(res));
        }
      },
      e=>{ return e }
    )
  }
}