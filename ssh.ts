import Resource from "./resource.ts"

export default class SSHResource extends Resource {
    private create_edit (args: any) {
        args["commands"].forEach(async (command: string) => {
            const p = Deno.run({
                cmd: ["ssh", "-o", "StrictHostKeyChecking=no", `${args["username"]}@${args["host"]}`, command]
            })
            await p.status()
        })
    }
}