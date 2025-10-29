<script>
    const { children } = $props();
</script>

<nav>
    <a href="/">HOME</a>
    <a href="/blogs">BLOGS</a>
    <a href="/animes">ANIMES</a>
</nav>

{@render children()}
