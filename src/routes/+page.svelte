<script>
    let count = $state(1);
</script>

<h1>HELLO, SVELTE KIT{"!".repeat(count)}</h1>
<mdui-button onclick={() => count++}>+1</mdui-button>
