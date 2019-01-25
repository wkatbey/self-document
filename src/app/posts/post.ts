export class Post {
    constructor(dateOfSubmission: string, textInput: string, wasSubmissionModified: boolean = false, 
        dateOfModification: string = null) {
        this.initializePostSubmission(dateOfSubmission, textInput);
        this.initializePostModification(wasSubmissionModified, dateOfModification);
    }

    initializePostSubmission(dateOfSubmission: string, textInput: string): void {
        this.dateOfSubmission = dateOfSubmission;
        this.textInput = textInput;
    }

    initializePostModification(wasSubmissionModified: boolean, dateOfModification: string) {
        this.wasSubmissionModified = wasSubmissionModified;
        this.dateOfModification = dateOfModification;
    }

    wasSubmissionModified: boolean;
    dateOfModification: string;
    dateOfSubmission: string;
    textInput: string;
}
