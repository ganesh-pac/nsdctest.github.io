console.log("Hey this is a log");


const containerDiv = document.getElementById("vizContainer");
const url = "https://public.tableau.com/views/NSDCDASHBOARD/HomePage";

const options = {
    hideTabs: true,
    onFirstInteractive: function() {
        console.log("Looking at NSDC Dashboard test");
    }
};

function initViz() {
    let viz = new tableau.Viz(containerDiv, url, options)
}

document.addEventListener('DOMContentLoaded', initViz)



