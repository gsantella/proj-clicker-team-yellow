const app2 = new Vue({
    el: '#app2',
    data: {
      leaderboards: []
    },
    created () {
        fetch('https://run.mocky.io/v3/2aca2482-2984-4cee-986b-1144596da3eb')
        .then(reposnse => reposnse.json())
        .then(json => {
            this.leaderboards = json.leaderboard
        })

    }
})