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
    // when inheriting, make sure to use super.create_edit()
    protected create_edit (args: any) {
        this.image = args["image"]
        this.vpc = args["vpc"]
        this.vpc.addVM(this)
    }
}