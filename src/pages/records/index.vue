<template>
    <main>
        <h1>Hello records</h1>
        <br>
        <h2>El nombre chido es: {{nameParam}}</h2>
    </main>
</template>
<script>
export default {
    data(){
        return{
            nameParam:""
        }
    },
    created(){
        this.nameParam=this.$route.params.name;
    }
}
</script>

