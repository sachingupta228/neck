declare module "ng-semantic" {
    export var SEMANTIC_COMPONENTS: Array<any>;
    export var SEMANTIC_DIRECTIVES: Array<any>;

    export class NgSemanticModule {}
}

declare module "Prism" {
    export const languages: any;
    export function highlight(html: string, language: any): string;
}