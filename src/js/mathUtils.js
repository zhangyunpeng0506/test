//数组求和
export function sum(...args){
  if(args.every(val=>val&&!isNaN(val))){
    return args.reduce((prev,current)=>prev+current)
  }else{
    console.log('包含非数字');
  }
}

//数组去重
export function unique(args){
  if(Array.isArray(args)){
    return Array.from(new Set(args));
  }else{
    console.log('不是数组');
  }
}

//数字数组最大值
export function arrMax(args){
  if(Array.isArray(args)){
    return Math.max.apply(this,args);
  }else{
    console.log('不是数组');
  }
}