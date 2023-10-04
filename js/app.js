const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
function countdown() {
    const loop = async _ =>{
        for (let i = 10; i > 0; i--) {
            await sleep(1000)
            document.getElementById("mynum").innerHTML = i;
            console.log(i);
        }
        document.getElementById("mynum").innerHTML = '<img src="media/blastoff.gif" width="305" height="312" id="myPicture"></img>'
    }
    loop();
}