
const argv=require('yargs').argv;
const geo=require('./geoadd');
geo.geocode(argv.a);
