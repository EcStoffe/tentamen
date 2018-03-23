// JavaScript för att implementera kraven A-E.
let myProductList = $("#myProductList");


function getMyProducts (url) {
    $.get(url, (data) => {
        for (let product of data) {
            displayProducts(product);
        }
    });
}

function displayProducts(product) {
    let theseProducts = $("<article></article>");
    let header = $("<h4></h4>");
    let description = $("<p></p>");
    let randomNumber = Math.floor((Math.random() * 10) + 1);
    let price = $("<footer></footer>");
    let image = $("<img>");
    let button = $("<button></button>");

    header.text(product.Name);
    image.attr("src", product.Image);
    description.text(product.Description);
    price.text(`${product.Price} SEK`);
    button.text("Place in cart");
    button.attr("id", "place-in-cart");
    button.click(() => {


        if(randomNumber < 0) {

        }
    });

    theseProducts.append(header, image, description, randomNumber, price, button);
    myProductList.append(theseProducts);

}


getMyProducts("http://demo.edument.se/api/products");

