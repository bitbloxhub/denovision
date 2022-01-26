import SSHResource from "./ssh.ts"
new SSHResource("ssh", {
    username: "jonahgam",
    host: "extreme-creeper.local",
    commands: [
        "sudo -S touch /hissh"
    ]
})
console.log("testing")