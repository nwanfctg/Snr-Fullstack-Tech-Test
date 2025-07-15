export class Role {
    static ADMIN = new Role('ADMIN');
    static USER = new Role('USER');
    static MANAGER = new Role('MANAGER');
    static VIEWER = new Role('VIEWER');

    private constructor(public readonly name: string) {}

    toString() {
        return this.name;
    }

    static values(): Role[] {
        return [Role.ADMIN, Role.USER, Role.MANAGER, Role.VIEWER];
    }
}
