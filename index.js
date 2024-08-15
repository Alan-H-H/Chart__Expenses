

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const App = document.getElementById('App');

        App.innerHTML = '';

        data.forEach(item => {
            
            let splitted = item.day;
            let joined = splitted.split(' ');
            
            let amountsplit = item.amount.toFixed(2);
            let amountjoined = amountsplit.split(' ');
            
            amountjoined.forEach((amount, index) => {
                let containerDiv = document.createElement("div");
                containerDiv.style.margin = '10px';
                containerDiv.style.display = 'flex';
                containerDiv.style.flexDirection = 'column';
                containerDiv.style.alignItems = 'center';

                let div = document.createElement("div");
                div.style.height = `${parseFloat(amount)}px`; 
                div.style.margin = '10px'; 
                div.style.marginBottom = '10px'; 
                div.style.width = '50px'; 
                div.style.textAlign = 'center'
                div.classList = "charts"
                div.id = `${parseFloat(amount)}`;
                
                let p = document.createElement("p")
                p.textContent = index < joined.length ? joined[index] : '';
                p.style.margin = '0';
                p.style.textAlign = 'center';
                p.classList = "element"
                containerDiv.appendChild(div);
                containerDiv.appendChild(p);

                App.appendChild(containerDiv)
            });
            let ids = ['17.45', '34.91', '52.36', '31.07', '23.39', '43.28', '25.48']
            ids.forEach((id, index)=>{
                if (id.length > 6){
                    return true
                }
                console.log(index)
                let idsid= document.getElementById(`${id}`)
                console.log(id)

                if (idsid != null ){
                    let ptwo = document.createElement("p")
              
              idsid.addEventListener('mouseover', ()=>{
                    idsid.style.opacity = "0.8"
                    ptwo.textContent = `${id}`
                    ptwo.style.transform = 'rotateX(180deg)'
                    ptwo.style.display = 'flex'
                    idsid.appendChild(ptwo)
                    if (id === '52.36'){
                        idsid.style.backgroundColor = "hsl(186, 34%, 60%)"
                    }
            })
            idsid.addEventListener('mouseout', ()=>{
                idsid.style.opacity = "1"
                ptwo.style.display = 'none'
                idsid.style.backgroundColor = 'hsl(10, 79%, 65%)'
        }) 
            }
           })
        })
                    
})

    


        
