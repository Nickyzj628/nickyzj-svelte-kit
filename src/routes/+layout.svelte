<script>
    import "$lib/layout.css";
    import "mdui/components/button-icon.js";
    import "mdui/components/layout-main.js";
    import "mdui/components/layout.js";
    import "mdui/components/list-item.js";
    import "mdui/components/list.js";
    import "mdui/components/navigation-bar-item.js";
    import "mdui/components/navigation-bar.js";
    import "mdui/components/navigation-rail-item.js";
    import "mdui/components/navigation-rail.js";
    import "mdui/components/top-app-bar-title.js";
    import "mdui/components/top-app-bar.js";
    import "mdui/mdui.css";
    import "virtual:uno.css";

    const { children } = $props();
</script>

<svelte:head>
    <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
    />
    <title>NICKYZJ</title>
</svelte:head>

<mdui-layout>
    <mdui-top-app-bar>
        <mdui-top-app-bar-title>NICKYZJ</mdui-top-app-bar-title>
        <div style="flex-grow: 1"></div>
        <mdui-button-icon icon="more_vert"></mdui-button-icon>
    </mdui-top-app-bar>

    <mdui-navigation-rail divider value="home">
        <mdui-navigation-rail-item icon="home" value="home" href="/">
            HOME
        </mdui-navigation-rail-item>
        <mdui-navigation-rail-item icon="article" value="blogs" href="/blogs">
            BLOGS
        </mdui-navigation-rail-item>
        <mdui-navigation-rail-item icon="tv" values="animes" href="/animes">
            ANIMES
        </mdui-navigation-rail-item>
        <mdui-button-icon icon="dark_mode" slot="bottom"></mdui-button-icon>
    </mdui-navigation-rail>

    <mdui-layout-main class="ml-3">
        {@render children()}
    </mdui-layout-main>
</mdui-layout>

<mdui-navigation-bar value="home">
    <mdui-navigation-bar-item icon="home" value="home" href="/">
        HOME
    </mdui-navigation-bar-item>
    <mdui-navigation-bar-item icon="article" value="blogs" href="/blogs">
        BLOGS
    </mdui-navigation-bar-item>
    <mdui-navigation-bar-item icon="tv" value="animes" href="/animes">
        ANIMES
    </mdui-navigation-bar-item>
</mdui-navigation-bar>
