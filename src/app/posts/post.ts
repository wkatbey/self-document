export class Post {
    constructor(dateOfSubmission: string = null, textInput: string = null, 
        wasSubmissionModified: boolean = false, dateOfModification: string = null) {

        this.initializePostSubmission(dateOfSubmission, textInput);
        this.initializePostModification(wasSubmissionModified, dateOfModification);
    }

    initializePostSubmission(dateOfSubmission: string, textInput: string): void {
        this.dateOfSubmission = dateOfSubmission;
        this.textInput = textInput;
    }

    initializePostModification(wasSubmissionModified: boolean, dateOfModification: string): void {
        this.wasSubmissionModified = wasSubmissionModified;
        this.dateOfModification = dateOfModification;
    }

    getText(): string {
        return this.textInput;
    }

    wasSubmissionModified: boolean;
    dateOfModification: string;
    dateOfSubmission: string;
    textInput: string;
}
