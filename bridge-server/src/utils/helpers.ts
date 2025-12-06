export const getNested = (obj: any, path: string[]) =>
    path.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);