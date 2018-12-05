document.addEventListener("DOMContentLoaded", function() {
  Vue.use(VueMqtt.default, `mqtt://172.16.72.1:9001`)
  var app = new Vue({
    el: "#app",
    data: {
      amount: 5,
      value: '-'
    },
    methods: {
      buttonClicked: function() {
        this.amount += 1;
      },
      calculateColor: function() {
        let color = "red";
        if (this.amount == 10) {
          color = "green";
        }
        return {
          backgroundColor: color
        };
      }
    },
    mounted() {
      console.log("subscribe to mqtt")
      this.$mqtt.subscribe('plc1200_50_pn1/demo')
      this.$mqtt.subscribe('plc1200_50_pn1/temperatuur')
    },
    mqtt: {
      'plc1200_50_pn1/demo': function (message) {
        console.log(message)
        this.value = new TextDecoder('utf-8').decode(message)
      },
      'plc1200_50_pn1/temperatuur': function (message) {
        console.log(message)
        this.value = new TextDecoder('utf-8').decode(message)
      }
    }
  });
});
