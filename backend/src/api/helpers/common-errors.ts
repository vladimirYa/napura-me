interface IBasicError<T = string> {
    status: number;
    message: string;
    detailed_message?: T | null;
}

export enum ErrorTypes {
    UNAUTHORIZED = 401,
    BAD_REQUEST = 400
}

export class ErrorCreator {
    
    static errorFactory(errorType: ErrorTypes, detailed_message?: string): BasicError {
        switch(errorType) {
            case ErrorTypes.UNAUTHORIZED:
                return new BasicError(401, 'Unauthorized', detailed_message);
            case ErrorTypes.BAD_REQUEST: 
                return new BasicError(400, 'Bad Request', detailed_message);
        }
    }
}

class BasicError implements IBasicError {
    status: number;
    message: string;
    detailed_message?: string | null;
    constructor(status: number, message: string, detailed_message?: string) {
        this.status = status;
        this.message = message;
        this.detailed_message = detailed_message;
    }
}