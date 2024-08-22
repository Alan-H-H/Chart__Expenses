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
                containerDiv.classList.add("chartscontainer");

                let div = document.createElement("div");
                div.style.height = `${parseFloat(amount)}px`; 
                div.style.margin = '10px'; 
                div.style.marginBottom = '10px';  
                div.style.textAlign = 'center';
                div.classList.add("charts"); 
                div.id = `${parseFloat(amount)}`;

                let p = document.createElement("p");
                p.textContent = index < joined.length ? joined[index] : '';
                p.style.margin = '0';
                p.style.textAlign = 'center';
                p.classList.add("element");

                containerDiv.appendChild(div);
                containerDiv.appendChild(p);
                App.appendChild(containerDiv);
                

                let ptwo = document.createElement("p");
                ptwo.classList.add("hover-info");
                ptwo.style.display = 'none'; 
                div.appendChild(ptwo); 

                div.addEventListener('mouseover', () => {
                    div.style.opacity = "0.8";
                    div.classList.add("idInfo")
                    ptwo.textContent = '$' + div.id; 
                    ptwo.style.transform = 'rotateX(180deg)';
                    ptwo.style.display = 'flex';
                    if (div.id === '52.36') {
                        div.style.backgroundColor = "hsl(186, 34%, 60%)";
                    }
                });

                div.addEventListener('mouseout', () => {
                    div.style.opacity = "1";
                    ptwo.style.display = 'none';
                    div.style.backgroundColor = 'hsl(10, 79%, 65%)';
                });
            });
        });
    })
    


        
