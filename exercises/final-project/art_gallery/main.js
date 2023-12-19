console.log('this works');

const pieces = [
    {
        name: "Untitled 1969",
        medium: "pigment_on_board",
        image: "https://github.com/xaz2000/fluffy-carnival/assets/144857487/f9bab999-6252-4486-9f2d-48537d8487b4"
    },
    {
        name: "Pray for America 1969",
        medium: "screenprint_and_pigmenton_paper",
        image: "https://github.com/xaz2000/fluffy-carnival/assets/144857487/311aad85-c8e4-4314-ac12-56d204e7c83a"
    },
    {
        name: "Untitled/Green Power(1975)",
        medium: "pigment_on_paper",
        image: "https://github.com/xaz2000/fluffy-carnival/assets/144857487/8952c429-82d8-4e69-a7aa-6ba435accea5"
    },
    {
        name: "Body Print 1975",
        medium: "pigment_on_paper",
        image: "https://github.com/xaz2000/fluffy-carnival/assets/144857487/4d0dc275-26c3-422c-98d5-16d04216e451"
    },
    {
        name: "Untitled 1976",
        medium: "Mud_metal_hair_wire_black-eyed_peas_and_rubber_bands_on_metal_base",
        image: "https://github.com/xaz2000/fluffy-carnival/assets/144857487/df0875e0-8e49-484b-a065-ef3764301b5c"
    }
];

// [1] grab the unordered list
const ul = document.querySelector('ul')
// [2] write a function that renders each object to the page
const renderPieces = (items) => {
    console.log(items)
    for(let i = 0; i < items.length; i++){
        // create list item element
        let listItem = document.createElement('li');
        // add pieces name
        let name = document.createElement('h3');
        name.textContent = items[i].name;
        // add pieces medium
        let medium = document.createElement('p');
        medium.classList.add(pieces[i].medium)
        console.log(pieces[i].medium)
        medium.textContent = pieces[i].medium;

        // add the image
        let image = document.createElement('img')
        image.setAttribute('src', pieces[i].image)



        ul.appendChild(listItem)
        listItem.appendChild(name)
        listItem.appendChild(medium)
        listItem.appendChild(image)
    }

}

// [3] invoke function and pass in object
renderPieces(pieces)