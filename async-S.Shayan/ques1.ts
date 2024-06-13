let fetchGreeting = () => {
    return new Promise(res => {
        setTimeout(() => {
            res("Hey there")
        }, 2000)
    })
}

let main = async () => {
    let msg = await fetchGreeting()
    console.log(msg);
}
main()