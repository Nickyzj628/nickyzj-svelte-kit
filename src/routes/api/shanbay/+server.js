import { json } from "@sveltejs/kit";

export const GET = async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return json({
        content: "shanbay",
    });
};
