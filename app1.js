// Q1)make a rectangle and when we move mouse on that rectangle on the left side we want to gradually change the color of that rectangle to red and when we move mouse to the right side we want to change the color to blue

// -->1)sabse pehle yeh pta karo ki mouse rectangle par aya and move hua ya nhi

// -->2)ab yeh calculate kro ki hum center se left par hai yah center se right par hai

// -->3)ab ye calculate karo hum center se kitna left par hai , jitna left par hai utni intensity  se color red lagao

// -->3)ab ye calculate karo hum center se kitna right par hai , jitna right par hai utni intensity  se color red lagao
let rect = document.querySelector(".rect");

rect.addEventListener("mousemove", function (details) {
    // console.log("you entered");
    let rectLocation = (rect.getBoundingClientRect());
    var insideRect = details.clientX - rectLocation.left;

    if (insideRect < rectLocation.width / 2) {
        // console.log("Left");
        var redColor = gsap.utils.mapRange(0, rectLocation.width / 2, 255, 0, insideRect);
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor},0,0)`,
            ease: Power4,
        });
    } else {
        // console.log("Right");
        var blueColor = gsap.utils.mapRange(rectLocation.width / 2, rectLocation.width, 0, 255, insideRect);
        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${blueColor})`,
            ease: Power4,
        });
    }
});

rect.addEventListener("mouseleave", function () {
    gsap.to(rect, {
        backgroundColor: "white",
    })
})

