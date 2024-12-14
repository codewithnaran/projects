let count = 0;

function increment() {
    try {
        console.log("Incrementing count. Current value:", count);
        count++;
        const countElement = document.getElementById("count");
        if (countElement) {
            countElement.innerText = count;
            console.log("Count updated to:", count);
        } else {
            throw new Error("Element with id 'count' not found");
        }
    } catch (error) {
        console.error("Error in increment function:", error.message);
    }
}