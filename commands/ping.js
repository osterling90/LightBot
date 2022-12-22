module.exports.run = (client, message, args) => {
    const serverPing = Math.abs((Date.now() - message.createdTimestamp))
    message.channel.send("Ping: " + serverPing + " ms")
}