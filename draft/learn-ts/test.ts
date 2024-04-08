type JSONResponse = {
    version: number;                        // Field
    /** In bytes*/
    payloadSize: number;                    // 
    outOfStock?: boolean;                   // 可选
    update: (retryTimes: number) => void;   // 箭头函数
    update(retryTimes: number): void;       // 函数
    (): JSONResponse;                       // 类型是可以调用的？
    [key: string]: number;                  // 接受任何key
    new(s: string): JSONResponse;           // ？？
    readonly body: string;                  // 只读
}

// HTTPAble: 可选地从现有接口或类型中获取属性
interface JSONResponse extends Response, HTTPAble {
    version: number;
    payloadSize: number;
    outOfStock?: boolean;
    update: (retryTimes: number) => void;
    update(retryTimes:number): void;
    (): JSONResponse;
    new(s: string): JSONResponse;
    [key: string]: number;
    readonly body: string;
}

