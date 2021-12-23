<script>
    import Card from "../components/Card.svelte";

    // svelte-ignore unused-export-let
    export let currentRoute;
    // svelte-ignore unused-export-let
    export let params;
</script>

<style>
    .card-collection {
        display: flex;
        position: relative;
        top: 100px;
        margin: auto;
        width: 80%;
        max-width: 1000px;
        justify-content: space-evenly;
        font-size: 1.5em;
    }
</style>

<main>
    <div class="card-collection">
        <Card title="david lu">
            <p>taco enthusiast</p>
            <p>website: <a href="https://youtu.be/QtBDL8EiNZo">davedlu.com</a></p>
            <p>linkedin: <a href="https://www.linkedin.com/in/davidluprofile">davidluprofile</a></p>
            <p>github: <a href="https://github.com/davidlu51412">davidlu51412</a></p>
        </Card>
        <Card title="abhay zala">
            <p>also a taco enthusiast</p>
            <p>website: <a href="https://aszala.com">aszala.com</a></p>
            <p>linkedin: <a href="https://www.linkedin.com/in/aszala">aszala</a></p>
            <p>github: <a href="https://www.github.com/aszala">aszala</a></p>
        </Card>
    </div>
</main>