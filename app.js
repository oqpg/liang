let employee={
  name:'henry',
  age:32,
  salary:1000
}
let handlerHet={
  get:function (target,property) {
    return property in target?target[property]:'没有该属性'
  }
}
let proxyGet=new Proxy(employee,handlerHet)
console.log(proxyGet.name)