 function connect(crm) {
    if (crm === 'salesforce') {
        window.open('https://fivetran.com/connect-card/setup?redirect_uri=https://dmforce.com/success&auth=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkIjp7ImxvZ2luIjp0cnVlLCJ1c2VyIjoiY2hlbWljYWxseV9wcm9mbGlnYWN5IiwiYWNjb3VudCI6InN3YXBwaW5nX3R1Y2tlZCIsImdyb3VwIjoidHJhbnNmZXJyZWRfaW5kZWxpYmxlIiwiY29ubmVjdG9yIjoiY2F0ZmlzaF90b29sIiwibWV0aG9kIjoiUGJmQ2FyZCJ9LCJpYXQiOjE3MTM3MzcxNDF9.X-AlZaW_3SK32DCT_kyCjF89qrcd5qbH_DS-JA-pieE&hide_setup_guide=true', '_blank');
    } else {
        console.log('Connect function for ' + crm + ' is not implemented yet.');
    }
}
// v 0.06 04-20
