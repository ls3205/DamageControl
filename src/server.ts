const express = require('express');

const server = express();

// @ts-ignore
server.all("/", (req, res) => {
    res.send("Bot is running.");
});

export function keepAlive() {
    server.listen(3000, () => {
        console.log('Server is ready.');
    });
};