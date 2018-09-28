Vue.component('admin-modal',{
    
    data:function(){
        return{
            url: '',
            name : '',
            category : '',
            price : '',
            alt : ''
        }
    },
    
    template:
            `
            <!-- The Modal -->
            <div class="modal fade" id="myAdmin" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                
                        <!-- Modal Header -->
                        <div class="modal-header">
                            <h4 class="modal-title">Admin Page</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                
                        <!-- Modal body -->
                        <div class="modal-body">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="customFile" v-on:change="handleFileUpload($event)">
                                <label class="custom-file-label" for="customFile">Choose file</label>
                                <button v-on:click="submitFile" type="submit">Submit</button>
                            </div>
                            <div class="form-group">
                                <label for="inputAddress2">url. img</label>
                                <input v-model="url" type="text" class="form-control" id="inputAddress2" placeholder="Mechanical eyelid assembly. in White Natural ... ">
                            </div>
                            <div class="form-group">
                                <label for="inputAddress2">Alt. img</label>
                                <input v-model="alt" type="text" class="form-control" id="inputAddress2" placeholder="Mechanical eyelid assembly. in White Natural ... ">
                            </div>
                            <br>
                            <div class="form-group">
                                <label for="inputAddress2">Name</label>
                                <input v-model="name" type="text" class="form-control" id="inputAddress2" placeholder="Eye mechanical, Train Miniature, or Iphone Mount Case">
                            </div>
                            <div class="form-group">
                                <label for="inputAddress2">Category</label>
                                <input v-model="category" type="text" class="form-control" id="inputAddress2" placeholder="robotic, case, or miniature">
                            </div>
                            <div class="form-group">
                                <label for="inputAddress2">Price</label>
                                <input v-model="price" type="text" class="form-control" id="inputAddress2" placeholder="100000, 20000, or 300000">
                            </div>
                        </div>
                
                        <!-- Modal footer -->
                        <div class="modal-footer">
                            <button type="button" v-on:click="itemAdd" class="btn btn-success" data-dismiss="modal">Submit</button>

                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                
                    </div>
                </div>
            </div>
            `,
    methods:{
        itemAdd:function(){
            if(this.alt, this.name, this.category, this.price){
                var newPostKey = firebase.database().ref().child('items').push().key;
    
                firebase.database().ref('items/' + newPostKey).set({
                    id: newPostKey,
                    name: this.name,
                    img: this.url,
                    alt: this.alt,
                    category: this.category,
                    price: this.price
                });
    
                this.name = ''
                this.url = ''
                this.alt = ''
                this.category = ''
                this.price = ''
            }
        },
        handleFileUpload : function(e){
            this.file = e.target.files[0]
        },
        submitFile:function(){
            let formData = new FormData()   
            formData.append('image', this.file)
            console.log(formData)
            axios
            .post('https://imageuploader.adrowicaksono.xyz/upload', formData)
            .then(link=>{
                console.log(link.data.link)
                this.url = link.data.link

            })
            
        }
    },
    
})