let filename: string
if (Deno.args.length != 0) {
    filename = Deno.args[0]
} else {
    filename = "./denovision.ts"
}

await import(filename)