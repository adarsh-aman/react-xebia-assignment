export function getStateLists(){
    return fetch("http://localhost:7070/api/states")
    .then (response => {
        return response.json();
    })
}


export function updateItem(item,id){
    console.log("update service called with id" + id);
    const url = `http://localhost:7070/api/states/${id}`
    return fetch(url,{
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(item)
    }).then (response=>{
        console.log("got response in service"+response)
        return response.json();
    });
}