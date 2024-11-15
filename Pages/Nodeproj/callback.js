
function getData(callback) {
    setTimeout(() => {
        const data = { name: "suresh", age: 40 }
        console.log("Data Received:", data)
        callback(null, data)
    }, 1000)
}
function processData(data, callback) {
    setTimeout(() => {
        const processedData = { ...data, isAdult: data.age >= 20 }
        console.log("Data Processed:", processedData)
        callback(null, processedData)
    }, 1000)
}
function saveData(processedData, callback) {
    setTimeout(() => {
        const result = { ...processedData, status: "saved" }
        console.log("Data saved:", result)
        callback(null, result)
    }, 1000)
}


getData((err, data) => {
    if (err) {
        console.error("Error getting data")
    }
    else {
        processData(data, (err, processedData) => {
            if (err) {
                console.error("Error processing data")
            }
            else {
                saveData(processedData, (err, result) => {
                    if (err) {
                        console.error("Error processing data")
                    }
                    else {
                        console.log("All functions done", result)
                    }
                })
            }
        })
    }
})
