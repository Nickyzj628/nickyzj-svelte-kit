<script>
    let count = $state(1);
</script>

<h1>Hello, sveltekit{"!".repeat(count)}</h1>
<button onclick={() => count++}>+1</button>
