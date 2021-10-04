Vue.createApp({

    data() {

        return {
            word: "",
            allWords: []
        }
    },

    methods: {
            SaveWord(word)
            {
                this.allWords[0]=word
                this.allWords[1]=word.toLowerCase()
                this.allWords[2]=word.toUpperCase()
            }
    }

}).mount("#app")