import './index.less'

console.log(1111)
const query = () => new Promise(resolve => {
  setTimeout(() => {
    resolve('Hi')
  }, 1000)
})
