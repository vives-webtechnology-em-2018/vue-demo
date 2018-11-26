
document.addEventListener('DOMContentLoaded', function(){
    var app = new Vue({
        el: '#app',
        data: {
          amount: 5
        },
        methods: {
            buttonClicked: function() {
                this.amount += 1
            },
            calculateColor: function() {
                let color = 'red'
                if(this.amount == 10) {
                    color = 'green'
                }
                return {
                    backgroundColor: color
                }
            }
        }
      })
})