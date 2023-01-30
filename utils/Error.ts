export enum StatusCode {
    E200 = 200, // OK
    E400 = 400, // bad request due to client error
    E500 = 500  // there is something wrong with server, please try again later
}

export enum Message {
    OK = 'OK',
    ErrParams = 'Necessary params NOT provided',
    ServerError = 'There is something wrong with server, please try again later',
}

class Error<T> {
    info: T
    statusCode: StatusCode
    message: Message

    constructor(data: T, statusCode: StatusCode, message: Message){
        this.info = data
        this.statusCode = statusCode
        this.message = message
    }

}

export default Error
