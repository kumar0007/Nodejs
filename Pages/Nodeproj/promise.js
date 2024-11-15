
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "suresh", age: 40 }
            console.log("Data Received:", data)
            resolve(data)
        }, 1000)
    })
}
function processData(data) {
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        const processedData = { ...data, isAdult: data.age >= 20 }
        console.log("Data Processed:", processedData)
        resolve(processData)
    }, 1000)
})
}
function saveData(processedData) {
    return new Promise((resolve, reject) => {


        setTimeout(() => {
            const result = { ...processedData, status: "saved" }
            console.log("Data saved:", result)
           resolve(result)
        }, 1000)
    })
}

getData()
    .then(data=>processData(data))
    .then(processData=>saveData(processData))
    .then(result=>console.log(result))
    .catch(console.error());



