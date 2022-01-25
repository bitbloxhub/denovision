export default class Resource {
    id: string
    create_edit (args: any): void {}
    constructor (id: string, args: any) {
        this.id = id
        this.create_edit(args)
    }
}