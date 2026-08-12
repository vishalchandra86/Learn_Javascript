//singleton Object
// const config = {
//     appName: "MyApp",
//     version: "1.0",
//     apiUrl: "https://example.com/api"
// };
// const logger = {
//     log(message) {
//         console.log(message);
//     }
// };

// Demo usage to produce console output
// logger.log(`Starting ${config.appName} v${config.version}`);
// logger.log(`API endpoint: ${config.apiUrl}`);
// console.log('Full config:', config);

const employee = {
    id: 101,
    name: "Akhilesh",
    address: {
        city: "Bangalore",
        state: "Karnataka",
        country: "India",
        pinCode: 560001
    }
};
// example logs
console.log(`Employee name is ${employee.name}, employee ID is ${employee.id}`);
console.log(`Employee address is ${employee.address.city}, ${employee.address.state}, ${employee.address.country}, ${employee.address.pinCode}`);

const keys = Object.keys(employee);
console.log('Employee keys:', keys);
keys.forEach(k => console.log(`${k}:`, employee[k]));