<script>    
import { inputType } from "../utils";

export let value = "";

export let text;
export let id;
export let autocomplete;
export let type = "text";

const handleInput = e => {
    value = e.target.value;
    inputType(e);
};

</script>

<style>
    :global(input) {
		width: 300px;
		background: transparent;
		border: none;
		border-bottom: solid var(--main-accent-color) 2px;
		outline: none;
		font-size: 1.5em;
		text-align: center;
	}

	:global(label) {
		font-size: 1.5em;
		text-align: center;
		position: absolute;
		top: 10px;
		width: 100%;
		text-align: center;
		transition: font-size 100ms, top 100ms;
	}
    
	:global(.input-container) {
		position: relative;
	}
</style>

<div class="input-container">
    <label for={id}>{text}</label>
    <input {id} {type} name={id} autocomplete={autocomplete} {value} on:input="{handleInput}"/>
</div>