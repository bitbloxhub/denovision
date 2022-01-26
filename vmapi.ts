import Resource from "./resource.ts"

export class VPC extends Resource {
    private vms: Array<VM> = []
    private region!: string

    getRegion(): string {
        return this.region
    }

    getVMs(): Array<VM> {
        return this.vms
    }

    // when inheriting, make sure to use super.addVM()
    addVM(vm: VM) {
        this.vms.push(vm)
    }
}

export class VM extends Resource {
    image!: ArrayBuffer
    vpc!: VPC
    public!: boolean
    ip4!: string
    ip6!: string
    ip4p!: string
    ip6p!: string
    // when inheriting, make sure to use super.create_edit()
    create_edit (args: any) {
        this.image = args["image"]
        this.public = args["public"]
        this.vpc = args["vpc"]
        this.vpc.addVM(this)
    }
}