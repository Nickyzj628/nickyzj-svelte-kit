<script>
    import "mdui/components/divider.js";
    import "mdui/components/card.js";
    import { onMount } from "svelte";

    let count = $state(1);

    let shanbay = $state();
    onMount(() => {
        fetch("/api/shanbay")
            .then((res) => res.json())
            .then((data) => {
                shanbay = data.content;
            });
    });
</script>

<h1>HELLO, SVELTE KIT{"!".repeat(count)}</h1>
<mdui-button onclick={() => count++}>+1</mdui-button>

<mdui-card class="mt-3">
    {shanbay || "loading..."}
</mdui-card>
