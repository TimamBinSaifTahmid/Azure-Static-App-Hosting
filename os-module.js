const os=require('os');

const userInfo=os.userInfo();
console.log(userInfo);

const upTime=os.uptime();
console.log(upTime);

const currentOs={
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem()

}
console.log(currentOs);