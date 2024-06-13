// write a function executeSequentially that execute two functions fetchData and processData sequentally using promises and logs the result in the order they are called
//Honestly it needs more detail, question isnt clear.

let executeSequentially = async () => {
    return await fetchData().then((res) => {
        console.log(res);
        return processData(res)
    }).then(res => {
        console.log(res);
    }).catch(err=>{
        console.log(err);        
    })
}

const fetchData = () =>{
    return new Promise(res =>{
        setTimeout(()=>{res("Hey there its Shayan")},1000)
    })
}

const processData = (res: string) => {
    return `${res}, Welcome bro, let's proceed`
}

executeSequentially()