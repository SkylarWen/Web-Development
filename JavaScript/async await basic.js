function hello(){
    console.log('hello');
}

async function hello1() {
    return 'hello';
}
//等同于
let hello1 = async()=>{
    return 'hello';
}
//等同于
let hello1 = async function(){
    return 'hello';
}

async function hello2() {
    return greeting = await Promise.resolve("Hello");
};

hello().then(alert);
