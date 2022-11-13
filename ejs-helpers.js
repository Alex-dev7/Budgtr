
function generateTable(obj) {
        const table = []
        for(let key in obj) {
            if (key === 'name'){
                table.push(`<td><a href="/budgets/${obj[key]}">${obj[key]}</a></td>`) 
            } else if (key === 'date' || key === 'amount') {
                table.push(`<td>${obj[key]}</td>`) 
            }
            
        }
        return table.join(' ')
     
}



module.exports = {
    generateTable
}