export class PostEdit {
    constructor() {
        this.initializeForm();
    }

    initializeForm(): void {
        this.textValue = null;
    }

    clear(): void {
        this.initializeForm();
    }

    getText(): string {
        return this.textValue;
    }

    textValue: string;
}
