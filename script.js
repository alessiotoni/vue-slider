const vue = new Vue({
    el: "#root",

    data: {
        imgActive: 0,

        imgList: [
            {
                name: "snowboard",
                url: "https://sportivoeinforma.it/wp-content/uploads/2020/06/Migliori-Snowboard.jpg",
                pppp: ""
            },
            {
                name: "bungee jumping",
                url: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/fx4uvbaocigcytijeerw/IbarakiRyujinBridgeBungeeJumpingExperiencefromTokyo.webp",
            },
            {
                name: "bike",
                url: "https://www.ilbuonsenso.net/wp-content/uploads/2017/06/Fabrizio-Dragoni-bike-trial.jpg",
            },
            {
                name: "ski",
                url: "https://www.airolo.ch/immaginiNews/new_coppa_europa_freestyle_moguls___aerials_20212_212_2_tmb.jpg"
            },
            {
                name: "surf",
                url: "https://actiotrainer.com/wp-content/uploads/2021/03/AdobeStock_217065264-scaled.jpg"
            },
            {
                name: "motocross",
                url: "https://www.raisport.rai.it/dl/img/2019/06/1600x900_1560676907816.paracadutismo.jpg"
            },
            {
                name: "skateboard",
                url: "https://cdn.hipwallpaper.com/i/81/52/lBqeGV.jpg",
            },
            {
                name: "wingsuit",
                url: "https://wallpapercave.com/wp/8yrv201.jpg",
            }
        ],

        addedImg: {
            name: "",
            url: "",
        },

        stopAutoPlay: true,

        showAddImg: false,
    },

    methods: {
        backGroundColor: function (i) {
            return (i == this.imgActive ? 'rgb(179, 176, 176)' : null)
        },

        nextImg: function () {
            if (this.imgActive < (this.imgList.length - 1)) {
                this.imgActive++;

            } else {
                this.imgActive = 0;
            }
        },

        previousImg: function () {
            this.imgActive--;
            if (this.imgActive < 0) {
                this.imgActive = (this.imgList.length - 1);
            }
        },

        thisImg: function (i) {
            this.imgActive = i;
        },

        playedImg: function () {
            this.stopAutoPlay = false;

            var autoPlay = setInterval(() => {
                if (!this.stopAutoPlay) {
                    this.nextImg()
                }

                if (this.stopAutoPlay) {
                    clearInterval(autoPlay)
                };
            }, 1200);

        },

        stoppedImg: function () {
            this.stopAutoPlay = true;
        },

        addImg: function () {

            if (this.addedImg.name === "") {
                this.addedImg.name = "img_" + (this.imgList.length + 1);
            }
            if (this.addedImg.url !== "") {
                let copyAddedImg = {
                    name: this.addedImg.name,
                    url: this.addedImg.url
                }
                this.imgList.push(copyAddedImg);
            }
            this.addedImg.name = "";
            this.addedImg.url = "";
        },

        showButtonAdd: function () {
            this.showAddImg = !this.showAddImg
        },
    },

    mounted: function() {
        document.querySelector(".container-slide").focus()
    }

});