Vue.component('navbar', {
    props:['carts'],
    data: function(){
        return{
            count:0
        }
    },
    template:
            `<div class="row">
                <nav class="navbar navbar-light col-lg-12">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">Hoyong-</a>
                        </div>
                        <ul class="nav navbar-nav">
                            <li class="active" ><a href="#" data-toggle="modal" data-target="#myAdmin">admin</a></li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="#" data-toggle="modal" data-target="#myCart"> <span class="glyphicon glyphicon-shopping-cart"></span> {{carts.length}}</a> </li>
                        </ul>
                    </div>
                </nav> 
            </div>

            
            `
})