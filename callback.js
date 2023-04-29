function steps(){
    setTimeout(()=>{
        console.log("Step 1");
        setTimeout(()=>{
            console.log("Step 2");
            setTimeout(()=>{
                console.log("Step 3");
            })
        })
    })
}

steps();











