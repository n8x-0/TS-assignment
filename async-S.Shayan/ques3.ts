let fetchData = () => {
    return new Promise(res =>{
        setTimeout(()=>{
            res("Fetched Data Sucesfully")
        },1000)
    })
}
let main = async () => {
    let msg = await fetchData()
    console.log(msg);
}
main()