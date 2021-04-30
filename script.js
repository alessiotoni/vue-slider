const vue = new Vue({
    el: "#root",

    data: {
        img: {
            name: "inverno",
            urlImg: "https://www.freeage.it/wp-content/uploads/2020/05/armocromia-inverno.jpg"
        },
        imgList: [
            {
                name: "inverno",
                urlImg: "https://www.freeage.it/wp-content/uploads/2020/05/armocromia-inverno.jpg"
            },
            {
                name: "primavera",
                urlImg: "https://static2-viaggi.corriereobjects.it/wp-content/uploads/2021/03/iStock-1128908941.jpg?v=427355"
            },
            {
                name: "estate",
                urlImg: "https://studioidentity.net/wp-content/uploads/2017/07/6-curiosita%CC%80-sullestate_FB.jpg"
            },
            {
                name: "autunno",
                urlImg: "https://frasisocial.com/wp-content/uploads/2018/12/autunno.jpg"
            }
        ]
    },
    methods: {
        changeImg: function () {
            // if (this.img.name == "inverno"){
            //     this.img.name = "primavera"
            //     this.img.urlImg = "https://static2-viaggi.corriereobjects.it/wp-content/uploads/2021/03/iStock-1128908941.jpg?v=427355"
            // }

            this.imgList.forEach((element,i) => {
                if (element == this.img) {
                    this.img = {...element[(i + 1)]}
                }

            });



            
        }
    }

});