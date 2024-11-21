

function circleMouseFollower() {


    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;

        console.log(dets);

    })
}

circleMouseFollower()