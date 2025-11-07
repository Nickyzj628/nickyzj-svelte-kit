import adapter from "@sveltejs/adapter-node";

const NO_WARNING_FILTERS = new Set([
    "a11y_no_static_element_interactions",
    "a11y_click_events_have_key_events",
]);

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
    },
    compilerOptions: {
        warningFilter: (warning) => {
            return !NO_WARNING_FILTERS.has(warning.code);
        },
    },
};

export default config;
