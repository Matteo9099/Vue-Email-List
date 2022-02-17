const vue = new Vue({

    el:'#app',
    data: {
        emails: [],
        numEmail: 10
    },
    methods: {
        RandomEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((random) => {
                const email = random.data.response;

                if(!this.emails.includes(email))
                    this.emails.push(email);
                if(this.emails.length < this.numEmail) 
                    this.RandomEmail();
            })
        },
    },

    mounted() {
        this.RandomEmail(this.numEmail);
    }

})