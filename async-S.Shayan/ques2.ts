let fetchData = () => {
    console.log("Task Started");
    return new Promise(res =>{
        setTimeout(()=>{
            res("Task Completed")
        },1000)
    })
}
let main = async () => {
    let msg = await fetchData()
    console.log(msg);
}
main()