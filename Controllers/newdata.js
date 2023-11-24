function setMaxDate(){
    let date = document.querySelector('#date');
    date.max =  new Date().toISOString().split("T")[0];
}

function getToday(){
    setTimeout(()=>{setMaxDate()}, 500);
}

function addItems(){ 

    let date = document.querySelector('#date');
    let type = document.querySelector('input[name = "inlineRadioOptions"]:checked');
    let items = document.querySelector('#items');
    let tipusok = document.querySelector('#tipusok');
    
    if (date.value == "" || type == null){
        showMessage("Nem adtál meg minden adatot!");
    }
    else{
        let vane = false;
        let upID = -1;
        axios.get(`${serverURL}/items/userID/eq/${loggedUser.ID}`).then(res=>{
            res.data.forEach(item => {
            if (item.user == loggedUser.ID && item.date.split('T')[0] == date.value && item.type == type.value){
                axios.get(`${serverURL}/catgs/`).then(catDATA => {
                    catDATA.data.forEach(thing => {
                        if (thing.ID == item.tag){
                            upID = item.ID
                            vane = true
                            return;
                        }
                    })
                })
            }
            })
        })
        setTimeout(()=>{
            if (vane){
                let data = {
                    amount : items.value
                }
                axios.patch(`${serverURL}/items/ID/eq/${upID}`, data).then(req =>{
                    date.value = null;
                    items.value = 0;
                    custom_tipusok.value = "";
                })
                alert("Adat sikeresen frissítve!");
            }
            else if (!vane){
                let newData = {
                    userID : loggedUser.ID,
                    date : date.value,
                    type : type.value,
                    amount : items.value,
                    tag : tipusok.value
                }
                axios.post(`${serverURL}/items/`, newData).then(req =>{
                    date.value = null;
                    items.value = 0;
                })
                alert("Adat sikeresen rögzítve!");
            }
        }, 100)
        
    }
}
getToday();
