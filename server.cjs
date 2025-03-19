(async () => {
    const { createServer } = await import("http");
    const { parse } = await import("url");
    const next = (await import("next")).default;

    const port = parseInt(process.env.PORT || "3000", 10);
    const dev = process.env.NODE_ENV !== "production";
    const app = next({ dev });
    const handle = app.getRequestHandler();

    app.prepare().then(() => {
        createServer((request, response) => {
            const parsedUrl = parse(request.url, true);
            handle(request, response, parsedUrl);
        }).listen(port);

        console.info(`> Server listening at http://localhost:${port} as ${dev ? "development" : process.env.NODE_ENV}`);
    });
})();
