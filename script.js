const vue = new Vue({
    el: "#root",

    data: {
        imgIndex: 0,

        imgList: [
            {
                title: "inverno",
                urlImg: "https://www.freeage.it/wp-content/uploads/2020/05/armocromia-inverno.jpg"
            },
            {
                title: "primavera",
                urlImg: "https://static2-viaggi.corriereobjects.it/wp-content/uploads/2021/03/iStock-1128908941.jpg?v=427355"
            },
            {
                title: "estate",
                urlImg: "https://studioidentity.net/wp-content/uploads/2017/07/6-curiosita%CC%80-sullestate_FB.jpg"
            },
            {
                title: "autunno",
                urlImg: "https://www.occhionotizie.it/wp-content/uploads/2020/09/111354497-edcba630-d5e8-4517-9fe1-8c103e1f11e3.jpg"
            }
        ]
    },

    methods: {

        nextImg: function () {
            this.imgIndex++;

            if (this.imgIndex == this.imgList.length) {
                this.imgIndex = 0;
            };
        },

        previousImg: function () {
            if (this.imgIndex > 0) {
                this.imgIndex--;;
            };

        },

        jumpImg: function (index) {
            console.log(index)
            this.imgIndex = index
            // index == imgList? 'true' : 'false';
        },
    },

});