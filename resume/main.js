fetch('data.json')
    .then(resp => {
    return resp.json()
    })
    .then(data => {
        for (let item in data) {
            document.getElementById(item).innerHTML = data[item]
        }
    })
