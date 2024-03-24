const app = Vue.createApp({
    data : function(){
        return {
            courseGoal : "Finish the course and learn Vue !"
        }; // always returns object
    }
});

app.mount('#user-goal');
