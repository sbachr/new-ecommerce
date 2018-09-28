var app = new Vue({
    el: "#app",
    data: {
        carts: [],
        filterCategory: [],
        rangePrice: 1,
        stocks: []
    },
    mounted() {
        var stocksCol = firebase.database().ref('items/');
        stocksCol.on('value', (snapshot) => {
            this.getItems(snapshot.val());
        });
    },
    methods: {
        getItems: function (snapshot) {
            let tempStocks = []

            for (let i in snapshot) {
                tempStocks.push(snapshot[i])
            }

            this.stocks = tempStocks
            console.log(this.stocks)
        },
        addtocart: function (id) {
            let cart = app.stocks[id]
            app.carts.push(cart)
        },
        checkoutCart: function () {
            app.carts = []
        },
        addListCategory: function (value, event) {
            console.log(this.filterCategory);
            console.log(event)
            // console.log(event)
            // app.filterCategory.push(value)
        },
        itemAdd: function () {
            // console.log(this.name, this.category, this.price, this.alt)
            console.log("submit nihhhh");

        }
    },
    computed: {
        maxPrice: function () {
            let priceses = this.stocks.reduce(function (result, stock) {
                result.push(Number(stock.price))
                // console.log(result)
                return result
            }, [])
            // console.log("=======max price========", Math.max(...priceses))
            return Math.max(...priceses)
        },
        minPrice: function () {
            let priceses = this.stocks.reduce(function (result, stock) {
                result.push(Number(stock.price))
                // console.log(result)
                return result
            }, [])
            // console.log("=======min price========", Math.min(...priceses))
            return Math.min(...priceses)
        },
        categoryDisp: function () {

            console.log("wayyy")
            let categoryDisp = this.stocks.reduce(function (result, cart) {
                result.push(cart.category)
                return result;
            }, [])
            return [...new Set(categoryDisp)]
        },
        categoryShow: function () {
            let list = [...new Set(this.filterCategory)]
            let limit = this.rangePrice
            if (list.length > 0) {
                return this.stocks.filter(function (stock) {
                    // console.log(limit)
                    // console.log(app.rangePrice)
                    // console.log(stock.price)
                    return list.indexOf(stock.category) != -1 && Number(stock.price) >= limit
                })
            } else {
                return this.stocks.filter(stock => {
                    // console.log("=======>",typeof this.rangePrice)
                    // console.log(stock.price)
                    // console.log(stock.price > 150000)
                    return Number(stock.price) >= limit
                })
            }
        },
    }

})


// [{
//     id:1,
//     name: "eye",
//     img: "https://images4.sw-cdn.net/product/picture/290x218_4954629_1053873_1459322305.jpg",
//     alt: "Mechanical eyelid assembly. in White Natural Versatile Plastic",
//     category: "robotic",
//     price: 100000
// },{
//     id:2,
//     name: "eye mechanical",
//     img: "https://images4.sw-cdn.net/product/picture/290x218_4954629_1053873_1459322305.jpg",
//     alt: "Mechanical eyelid assembly. in White Natural Versatile Plastic",
//     category: "robotic",
//     price: 100000
// },{
//     id:3,
//     name: "Iphone Mount Case",
//     img: "https://images2.sw-cdn.net/product/picture/710x528_21833085_10778326_1515706527.jpg",
//     alt: "Mechanical eyelid assembly. in White Natural Versatile Plastic",
//     category: "case",
//     price: 200000
// },{
//     id:4,
//     name: "Train Miniature",
//     img: "https://images2.sw-cdn.net/product/picture/710x528_3364465_225243_1459318871.jpg",
//     alt: "Sprinter Lighttrain (H0) 3d printed",
//     category: "miniature",
//     price: 400000
// },{
//     id:5,
//     name: "Organic Heart",
//     img: "https://images3.sw-cdn.net/product/picture/710x528_1814353_1597219_1459324190.jpg",
//     alt: "Inner workings Mech-Organic Heart 3d printed",
//     category: "jewerly",
//     price: 100000
// },]