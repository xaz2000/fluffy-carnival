console.log('this works');

const flowers = [
    {
        name: "Tulip",
        color: "yellow",
        image:
        "https://cdn.britannica.com/37/227037-050-CA792866/Broken-tulip-flower.jpg"
    },
    {
        name: "Daffodil",
        color: "yellow",
        image: "https://h2.commercev3.net/cdn.brecks.com/images/800/67248A.jpg"
    },
    {
        name: "Sunflower",
        color: "yellow",
        image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sunflower_sky_backdrop.jpg/800px-Sunflower_sky_backdrop.jpg"
    },
    {
        name: "Bluebell",
        color: "blue",
        image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a8/Hyacinthoides_non-scripta_%28Common_Bluebell%29.jpg"
    },
    {
        name: "Rose",
        color: "red",
        image: "https://www.jacksonandperkins.com/images/xxl/v1780.jpg"
    }
];

// [1] grab the unordered list
const ul = document.querySelector('ul')
// [2] write a function that renders each object to the page
const renderFlowers = (items) => {
    console.log(items)
    for(let i = 0; i < items.length; i++){
        // create list item element
        let listItem = document.createElement('li');
        listItem.classList.add("card", flowers[i].color);
        // add flower name
        let name = document.createElement('h3');
        name.textContent = items[i].name;
        // add flower color
        let color = document.createElement('p');
        color.classList.add(flowers[i].color)
        console.log(flowers[i].color)
        color.textContent = flowers[i].color;

        // add the image
        let image = document.createElement('img')
        image.setAttribute('src', flowers[i].image)



        ul.appendChild(listItem)
        listItem.appendChild(name)
        listItem.appendChild(color)
        listItem.appendChild(image)
    }

}

// [3] invoke function and pass in object
renderFlowers(flowers)