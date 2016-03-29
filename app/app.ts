class HelloWorld {
    constructor(public message: string){      
        console.log('Hello World Constructed with msg!!!:' + message);  
    }
}

var hello = new HelloWorld('Hello from TS!!!');
console.log(hello.message);