

fetch('data.json')
    .then(response => response.json())
        .then(data =>{ console.log(data)
            const App = document.getElementById('App')
            const chart = document.getElementById('chart')

                data.map((item)=>{                
                    let splitted = item.day
                    let joined = splitted.split(' ')
                    let amountsplit = (item.amount).toFixed(2)
                    let amountjoined = amountsplit.split(' ')

                    console.log(amountjoined)

                for(j=0; j<item.amount; j++){
                    console.log(amountjoined[j])
                }
                
                for(i=0; i<joined.length; i++){
                    let p = document.createElement("p")
                        p.textContent = joined
                            App.appendChild(p)
                }
            })
})
