const gallerySection = document.getElementById("gallerySection");
const galleryMenu = document.getElementById("galleryMenu");
const gallerySelector = gallerySection.querySelector(".selector");
//Individual Gallery Menu Items
const galleryMenuItems = galleryMenu.querySelectorAll('.menuItem');
//Gallery Container
const galleryContainer = document.getElementById("galleryContainer");
const galleryContainerItems = galleryContainer.querySelectorAll(".galleryItem");

//Gallery will be set to 'all' on document load
let currentGalleryMenuSelection = "all";

//When a gellry option is chosen: add the necessary transitions
//and then move the gallery to the new location
galleryMenuItems.forEach(galleryMenuItem => {
    galleryMenuItem.onclick = () => {
        gallerySelector.style.transition = "left 1s, width 1s";
        galleryMenuChange(galleryMenuItem.id);
        addTransition('let 1s, top 1s, transform 1s, opacity 1s');
        gallerySection.style.transition = "height 1s";
        setGalleryContainer(galleryMenuItem.id);
        currentGalleryMenuSelection = galleryMenuItem.id;
    }
});

//Set gallery selector pos on inital document load
galleryMenuChange(currentGalleryMenuSelection);

//Set pos for gallery selector
function galleryMenuChange(id){
    if (window.matchMedia('min-width: 956px)').matches){
        switch(id){
            case 'all':
                changeGallerySelector("0px", "95px", "all");
                break;
            case 'davidHammons':
                changeGallerySelector("270", "145", "davidHammons");
                break;
            case 'ruthAsawa':
                changeGallerySelector("440", "145", "ruthAsawa");
                break;
            case 'donaldJudd':
                changeGallerySelector("600", "145", "donaldJudd");
                break;
            case 'arthurJafa':
                changeGallerySelector("770", "145", "arthurJafa");
                break;
            case 'agnesMartin':
                changeGallerySelector("910", "145", "agnesMartin");
                break;
            case 'robertMapplethorpe':
                changeGallerySelector("2100", "145", "robertMapplethorpe");
        }
    }else if(window.matchMedia('(max-width: 955px) and (min-width: 601px)').matches){
        switch(id){
            case 'all':
                changeGallerySelector("0px", "95px", "all");
                break;
            case 'davidHammons':
                changeGallerySelector("134", "150", "davidHammons");
                break;
            case 'ruthAsawa':
                changeGallerySelector("300", "150", "ruthAsawa");
                break;
            case 'donaldJudd':
                changeGallerySelector("450", "150", "donaldJudd");
                break;
            case 'arthurJafa':
                changeGallerySelector("610", "150", "arthurJafa");
                break;
            case 'agnesMartin':
                changeGallerySelector("770", "150", "agnesMartin");
                break;
            case 'robertMapplethorpe':
                changeGallerySelector("950", "220", "robertMapplethorpe");
        }
    }else if(window.matchMedia('(max-width: 955px) and (min-width: 601px)').matches){
        switch(id){
            case 'all':
                changeGallerySelector("0px", "76px", "all");
                break;
            case 'davidHammons':
                changeGallerySelector("104", "76", "davidHammons");
                break;
            case 'ruthAsawa':
                changeGallerySelector("300", "76", "ruthAsawa");
                break;
            case 'donaldJudd':
                changeGallerySelector("450", "76", "donaldJudd");
                break;
            case 'arthurJafa':
                changeGallerySelector("620", "76", "arthurJafa");
                break;
            case 'agnesMartin':
                changeGallerySelector("780", "76", "agnesMartin");
                break;
            case 'robertMapplethorpe':
                changeGallerySelector("950", "76", "robertMapplethorpe");
        }
    }
}

//Change pos for gallery selector
function changeGallerySelector(left, width, id){
    gallerySelector.style.left = left;
    gallerySelector.style.width = width;
    for(let i = 0; i <galleryMenuItems.length; i++){
        const galleryMenuItem = galleryMenuItems [i];
        if(galleryMenuItem.id === id){
            galleryMenuItem.style.color = "white";
            continue;
        }
        galleryMenuItem.style.color = "black";
    }
}

//On Initial document load
setGalleryContainer(currentGalleryMenuSelection);


//Set pos for gallery items
function setGalleryContainer(choice){
    if(window.matchMedia('(min-width:1201px)').matches){
        switch(choice){
            case 'all':
                moveGalleryContainer([{left: '0', top: '0', num: 0}, {left: '10%', top: '0', num: 1},
                {left: '20%', top: '0', num: 2},{left: '30%', top: '0%', num: 3},{left: '40%', top: '0%', num: 4},
                {left: '50%', top: '0%', num: 5},{left: '60%', top: '0%', num: 6},{left: '70%', top: '0%', num: 7},
                {left: '80%', top: '0%', num: 8},{left: '90%', top:'0%', num: 9},{left:'0%', top:'10%', num:10},{left:'10%', top:'10%', num: 11},{left:'20%', top:'10%', num:12},{left:'30%', top:'10%', num:13},
                {left:'40%', top:'10%', num:14},{left:'50%', top:'10%', num:15},{left:'60%', top:'10%', num:16},{left:'70%', top:'10%', num:17},{left:'80%', top:'10%', num:18},{left:'90%', top:'10%', num:19},
                {left:'0%', top:'20%', num:20},{left:'10%', top:'20%', num:21},{left:'20%', top:'20%', num:22},{left:'30%', top:'20%', num:23},{left:'40%', top:'20%', num:24},{left:'50%', top:'20%', num:25},
                {left:'60%', top:'20%', num:26},{left:'70%', top:'20%', num:27},{left:'80%', top:'20%', num:28},{left:'90%', top:'20%', num:29},
                {left:'0%', top:'30%', num:30},{left:'10%', top:'30%', num:31},{left:'20%', top:'30%', num:32},{left:'30%', top:'30%', num:33},{left:'40%', top:'30%', num:34},{left:'50%', top:'30%', num:35},
                {left:'60%', top:'30%', num:36},{left:'70%', top:'30%', num:37},{left:'80%', top:'30%', num:38},{left:'90%', top:'30%', num:39},
                {left:'0%', top:'40%', num:40},{left:'10%', top:'40%', num:41},{left:'20%', top:'40%', num:42},{left:'30%', top:'40%', num:43},{left:'40%', top:'40%', num:44},{left:'50%', top:'40%', num:45},
                {left:'60%', top:'40%', num:46},{left:'70%', top:'40%', num:47},{left:'80%', top:'40%', num:48},{left:'90%', top:'40%', num:49},
                {left:'0%', top:'50%', num:50},{left:'10%', top:'50%', num:51},{left:'20%', top:'50%', num:52},{left:'30%', top:'50%', num:53},{left:'40%', top:'50%', num:54},{left:'50%', top:'50%', num:55},
                {left:'60%', top:'50%', num:56},{left:'70%', top:'50%', num:57},{left:'80%', top:'50%', num:58},{left:'90%', top:'50%', num:59},
                {left:'0%', top:'60%', num:60},{left:'10%', top:'60%', num:61},{left:'20%', top:'60%', num:62},{left:'30%', top:'60%', num:63},{left:'40%', top:'60%', num:64},{left:'50%', top:'60%', num:65},
                {left:'60%', top:'60%', num:66},{left:'70%', top:'60%', num:67},{left:'80%', top:'60%', num:68},{left:'90%', top:'60%', num:69}]);
                gallerySection.style.height = 'calc(2000px + 400px)';
                break;
            case 'davidHammons':
                moveGalleryContainer([{left: '0', top: '0', num: 0},{left: '20%', top: '0', num: 1},{left: '40%', top: '0', num: 2},{left: '60%', top: '0', num: 3},{left: '80%', top: '0', num: 4},
                {left: '0%', top: '20%', num: 5},{left: '20%', top: '20%', num: 6},{left: '40%', top: '20%', num: 7},{left: '60%', top: '20%', num: 8},{left: '80%', top: '20%', num: 9}]);
                gallerySection.style.height = 'calc(300px + 400px)';
                break;
            case 'ruthAsawa':
                moveGalleryContainer([{left: '0', top: '0', num: 10},{left: '20%', top: '0', num: 11},{left: '40%', top: '0', num: 12},{left: '60%', top: '0', num: 13},{left: '80%', top: '0', num: 14},
                {left: '0%', top: '20%', num: 15},{left: '20%', top: '20%', num: 16},{left: '40%', top: '20%', num: 17},{left: '60%', top: '20%', num: 18},{left: '80%', top: '20%', num: 19}]);
                gallerySection.style.height = 'calc(300px + 400px)';
                break;
            case 'donaldJudd':
                moveGalleryContainer([{left: '0', top: '0', num: 20},{left: '20%', top: '0', num: 21},{left: '40%', top: '0', num: 22},{left: '60%', top: '0', num: 23},{left: '80%', top: '0', num: 24},
                {left: '0%', top: '20%', num: 25},{left: '20%', top: '20%', num: 26},{left: '40%', top: '20%', num: 27},{left: '60%', top: '20%', num: 28},{left: '80%', top: '20%', num: 29}]);
                gallerySection.style.height = 'calc(300px + 400px)';
                break;
            case 'arthurJafa':
                moveGalleryContainer([{left: '0', top: '0', num: 30},{left: '20%', top: '0', num: 31},{left: '40%', top: '0', num: 32},{left: '60%', top: '0', num: 33},{left: '80%', top: '0', num: 34},
                {left: '0%', top: '20%', num: 35},{left: '20%', top: '20%', num: 36},{left: '40%', top: '20%', num: 37},{left: '60%', top: '20%', num: 38},{left: '80%', top: '20%', num: 39},
                {left: '0%', top: '40%', num: 40},{left: '20%', top: '40%', num: 41},{left: '40%', top: '40%', num: 42},{left: '60%', top: '40%', num: 43},{left: '80%', top: '40%', num: 44},
                {left: '0%', top: '60%', num: 45},{left: '20%', top: '60%', num: 46},{left: '40%', top: '60%', num: 47},{left: '60%', top: '60%', num: 48},{left: '80%', top: '60%', num: 49}]);
                gallerySection.style.height = 'calc(300px + 400px)';
                break;
            case 'agnesMartin':
                moveGalleryContainer([{left: '0', top: '0', num: 50},{left: '20%', top: '0', num: 51},{left: '40%', top: '0', num: 52},{left: '60%', top: '0', num: 53},{left: '80%', top: '0', num: 54},
                {left: '0%', top: '20%', num: 55},{left: '20%', top: '20%', num: 56},{left: '40%', top: '20%', num: 57},{left: '60%', top: '20%', num: 58},{left: '80%', top: '20%', num: 59}]);
                gallerySection.style.height = 'calc(300px + 400px)';
                break;
            case 'robertMapplethorpe':
                moveGalleryContainer([{left: '0', top: '0', num: 60},{left: '20%', top: '0', num: 61},{left: '40%', top: '0', num: 62},{left: '60%', top: '0', num: 63},{left: '80%', top: '0', num: 64},
                {left: '0%', top: '20%', num: 65},{left: '20%', top: '20%', num: 66},{left: '40%', top: '20%', num: 67},{left: '60%', top: '20%', num: 68},{left: '80%', top: '20%', num: 69}]);
                gallerySection.style.height = 'calc(300px + 400px)';
                break;
        }
    }else if(window.matchMedia('(max-width: 900px) and (min-width: 400px)').matches){
        switch(choice){
            case 'all':
                moveGalleryContainer([{left: '0%', top: '0%', num: 0},{left: '50%', top: '0%', num: 1},{left: '0%', top: '2.8%', num: 2},{left: '50%', top: '2.8%', num: 3},{left: '0%', top: '5.6%', num: 4},
                {left: '50%', top: '5.6%', num: 5},{left: '0%', top: '8.4%', num: 6},{left: '50%', top: '8.4%', num: 7},{left: '0%', top: '11.2%', num: 8},{left: '50%', top: '11.2%', num: 9},
                {left: '0%', top: '14%', num: 10},{left: '50%', top: '14%', num: 11},{left: '0%', top: '16.8%', num: 12},{left: '50%', top: '16.8%', num: 13},{left: '0%', top: '19.6%', num: 14},{left: '50%', top: '19.6%', num: 15},
                {left: '0%', top: '22.4%', num: 16},{left: '50%', top: '22.4%', num: 17},{left: '0%', top: '25.2%', num: 18},{left: '50%', top: '25.2%', num: 19},{left: '0%', top: '28%', num: 20},{left: '50%', top: '28%', num: 21},{left: '0%', top: '30.8%', num: 22},
                {left: '50%', top: '30.8%', num: 23},{left: '0%', top: '33.6%', num: 24},{left: '50%', top: '33.6%', num: 25},{left: '0%', top: '36.4%', num: 26},{left: '50%', top: '36.4%', num: 27},{left: '0%', top: '39.2%', num: 28},{left: '50%', top: '39.2%', num: 29},
                {left: '0%', top: '42%', num: 30},{left: '50%', top: '42%', num: 31},{left: '0%', top: '44.8%', num: 32},{left: '50%', top: '44.8%', num: 33},{left: '0%', top: '47.6%', num: 34},{left: '50%', top: '47.6%', num: 35},
                {left: '0%', top: '50.4%', num: 36},{left: '50%', top: '50.4%', num: 37},
                {left: '0%', top: '53.2%', num: 38},{left: '50%', top: '53.2%', num: 39},
                {left: '0%', top: '56%', num: 40},{left: '50%', top: '56%', num: 41},
                {left: '0%', top: '58.8%', num: 42},{left: '50%', top: '58.8%', num: 43},
                {left: '0%', top: '61.6%', num: 44},{left: '50%', top: '61.6%', num: 45},
                {left: '0%', top: '64.4%', num: 46},{left: '50%', top: '64.4%', num: 47},
                {left: '0%', top: '67.2%', num: 48},{left: '50%', top: '67.2%', num: 49},
                {left: '0%', top: '70%', num: 50},{left: '50%', top: '70%', num: 51},
                {left: '0%', top: '72.8%', num: 52},{left: '50%', top: '72.8%', num: 53},
                {left: '0%', top: '75.6%', num: 54},{left: '50%', top: '75.6%', num: 55},
                {left: '0%', top: '78.4%', num: 56},{left: '50%', top: '78.4%', num: 57},
                {left: '0%', top: '81.2%', num: 58},{left: '50%', top: '81.2%', num: 59},
                {left: '0%', top: '84%', num: 60},{left: '50%', top: '84%', num: 61},
                {left: '0%', top: '86.8%', num: 62},{left: '50%', top: '86.8%', num: 63},
                {left: '0%', top: '89.6%', num: 64},{left: '50%', top: '89.6%', num: 65},
                {left: '0%', top: '92.4%', num: 66},{left: '50%', top: '92.4%', num: 67},
                {left: '0%', top: '95.2%', num: 68},{left: '50%', top: '95.2%', num: 69}]);
                gallerySection.style.height = 'calc(900px + 400px)';
                break;
            case 'davidHammons':
                moveGalleryContainer([{left: '0', top: '0', num: 0},{left: '50%', top: '0', num: 1},{left: '0%', top: '20%', num: 2},{left: '50%', top: '20%', num: 3},{left: '0%', top: '40%', num: 4},
                {left: '50%', top: '40%', num: 5},{left: '0%', top: '60%', num: 6},{left: '50%', top: '60%', num: 7},{left: '0%', top: '80%', num: 8},{left: '50%', top: '80%', num: 9}]);
                gallerySection.style.height = 'calc(600px + 400px)';
                break;
            case 'ruthAsawa':
                moveGalleryContainer([{left: '0%', top: '0%', num: 10},{left: '50%', top: '0%', num: 11},{left: '0%', top: '20%', num: 12},{left: '50%', top: '20%', num: 13},{left: '0%', top: '40%', num: 14},{left: '50%', top: '40%', num: 15},
                {left: '0%', top: '60%', num: 16},{left: '50%', top: '60%', num: 17},{left: '0%', top: '80%', num: 18},{left: '50%', top: '80%', num: 19}]);
                gallerySection.style.height = 'calc(1500px + 400px)';
                break;
        }
    }
}


//Change pos for gallery Items
function moveGalleryContainer(items){
    let nums = items.map(item => item.num);
    for(let i = 0; i < galleryContainerItems.length; i++){
        let ele = galleryContainerItems[i];
        if(nums.indexOf(i) !== -1){
            const item = items.find(item => item.num === i);
            //Needs to animate back in because it is being positioned
            if(ele.style.transform === 'scale(0)'){
                ele.style.transform = 'scale(1)';
                ele.style.opacity = '1';
            }
            ele.style.top = item.top;
            ele.style.left = item.left;
            continue;
        }
        //Animate out because it is not being positioned
        ele.style.transform = 'scale(0)';
        ele.style.opacity = '0';
    }
}

//Add the same transition to all item in the gallery
function addTransition(transition){
    galleryContainerItems.forEach(gCI =>{
        gCI.style.transition = transition
    });
}

//Change Pos on window resize
window.addEventListener("resize", e => {
    gallerySelector.style.transition = "none";
    galleryMenuChange(currentGalleryMenuSelection);
    addTransition("none");
    gallerySection.style.transition = "none";
    setGalleryContainer(currentGalleryMenuSelection);
});
