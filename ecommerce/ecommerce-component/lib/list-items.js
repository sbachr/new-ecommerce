Vue.component('list-item', {
    props: ['stock'],
    data: function () {
        return {
            carts: [],
        }
    },
    methods: {
        addCart: function (e) {
            app.carts.push(e)
        }
    },
    template:
        `
            <li class="card flex-item col-lg-3 col-md-12">
                <div class="card-header">
                    <h3>{{stock.name}}</h3>
                    <br>
                </div>
                <div class="card-body">
                    <img v-bind:src="stock.img" width="290" heigth="218" v-bind:alt="stock.alt">
                    <br>
                    
                    <h5 class="text-secondary">category : {{stock.category}} </h5>
                    <h5 class="text-secondary">price : Rp {{stock.price}} </h5>
                
                </div>
                <div class="card-footer"></div>
                    <button v-on:click="addCart(stock)"  type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myCart">add to cart</button> 
                </div>                                
            </li>

            `,


})
