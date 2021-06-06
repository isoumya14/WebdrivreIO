class ReviewPage
{

    get productPrices()
    {
        return  $$("//tr/td[4]/strong")
    }

    get totalPrice()
    {
        return $("h3 strong")
    }

    sumOfProducts()
    {
        const sumOfProducts = this.productPrices.map(productPrice=>parseInt(productPrice.getText().split(".")[1].trim()))//it returns an array of 2 elements
        .reduce((acc,price)=> acc + price,0) 
        return sumOfProducts
    }

    totalFormattedPrice()
    {
       return  parseInt(this.totalPrice.getText().split(".")[1].trim())
    }


}

module.exports = new ReviewPage()