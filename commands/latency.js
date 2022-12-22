module.exports.run = (client, message, args) => {
    const serverLatency = Math.round(client.ws.ping)
    message.channel.send("API Latency: " + serverLatency + " ms")
}