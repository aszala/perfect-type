<script>    
import { inputType } from "../utils";

export let value = "";

export let text;
export let id;
export let autocomplete;
export let type = "text";
export let handler;

const handleInput = e => {
    value = e.target.value;
    inputType(e, handler);
};

</script>

<div class="input-container">
    <label for={id}>{text}</label>
    <input {id} {type} name={id} autocomplete={autocomplete} {value} on:input="{handleInput}"/>
</div>