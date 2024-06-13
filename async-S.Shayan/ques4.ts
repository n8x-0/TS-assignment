let fetchWithErr = () => {
    let rnd = Math.floor(Math.random() * 10)
    return new Promise((res, rej) =>{
        setTimeout(()=>{
            if(rnd % 2 === 0){
                res("Data Fetched Succesfully")
            }else{
                rej("Data Fetched Failed")
            }
        },1000)
    })
}
let main = async () => {
    try{
        let msg = await fetchWithErr()
        console.log(msg);
    }catch(err){
        console.log("ERROR:",err);
    }
}
main()