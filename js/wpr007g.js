var vm = new Vue({
    el: "#wrap",
    data: {
        infoList: [],
        showInfoList: []
    },
    mounted: function () {
        this.init();
    },
    methods: {
        init: function () {
            var dateTemp = "2022/05/29";
            for (let i = 0; i < 30; i++) {
                let date = this.addDate(dateTemp, 1)
                this.infoList.push(date);
                dateTemp = date;
            }
            for(let i = 0; i < this.infoList.length; i++){
                let newDate = this.addDate(this.infoList[i], 3)
                var obj = {
                    no: i+1,
                    date1:this.infoList[i],
                    week1:this.getWeek(this.infoList[i]),
                    date2:newDate,
                    week2:this.getWeek(newDate),
                    date3:newDate,
                    week3:this.getWeek(newDate)
                }
                this.showInfoList.push(obj);
            }
            this.$forceUpdate();
        },
        addDate: function (date, days) {
            if (days == undefined || days == '') {
                days = 1;
            }
            var date = new Date(date);
            date.setDate(date.getDate() + days);
            var month = date.getMonth() + 1;
            var day = date.getDate();
            var mm = "'" + month + "'";
            var dd = "'" + day + "'";
            if (mm.length == 3) {
                month = "0" + month;
            }
            if (dd.length == 3) {
                day = "0" + day;
            }
            var newDate = date.getFullYear() + "/" + month + "/" + day;
            return newDate;
        },
        getWeek:function(date){
            var a = ["日", "月", "火", "水", "木", "金", "土"];
            var week = new Date(date).getDay();
            return a[week];
        }
    }
});