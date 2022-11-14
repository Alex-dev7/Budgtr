//function that iterates over an object and creates <td></td> for each key value
function createTableData(obj, index) {
        const table = []
        for(let key in obj) {
            //'name' key will display as <a> tag with the href of its own index which will be used in SHOW route
            if (key === 'name'){
                table.push(`<td><a href="/budgets/${index}">${obj[key]}</a></td>`) 
            } else if (key === 'date' || key === 'amount') {
                table.push(`<td>${obj[key]}</td>`) 
            }
            
        }
    
        return table.join(' ')
     
}

// function that iterates over an object and injects key&value pairs into html tags
function createShowData(obj) {
    const data= []
    for(let key in obj) {
        data.push( `
        <th>${key}:</th>
        <td><br>${obj[key]}</td>
        `)
        // console.log(key + " : " + obj[key])
    }
    return data.join(' ')
}

//function that calculates the total amount
function calculateTotal(arr) {
    let total = 0
    for(let item of arr) {
        total += item.amount
    }
    // console.log(total)
    return total
}



module.exports = {
    createTableData,
    createShowData,
    calculateTotal
}