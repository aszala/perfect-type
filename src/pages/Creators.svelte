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
        top: 200px;
        margin: auto;
        width: 80%;
        max-width: 1000px;
        justify-content: space-evenly;
        font-size: 1.5em;
    }
</style>

<main>
    <div class="card-collection">
        <Card title="David Lu">
            <p>Taco Enthusiast</p>
            <p>Website:</p>
            <p>GitHub: <a href="https://github.com/davidlu51412">davidlu51412</a></p>
        </Card>
        <Card title="Abhay Zala">
            <p>Also a Taco Enthusiast</p>
            <p>Website: <a href="https://aszala.com">aszala.com</a></p>
            <p>GitHub: <a href="https://www.github.com/aszala">aszala</a></p>
        </Card>
    </div>
</main>