// Globals - No Window !!!!
// __dirname - Path to current directory
// __filename - file name
// require - function to ue modules (CommonJS)
// module - info about current module (file)
// process - info about environ. where the Program is being excuted

console.log(__dirname)
console.log(__filename)
console.log(require)
console.log(module)
console.log(process)

setInterval(()=>{
    console.log("Hello World.")
},1000)