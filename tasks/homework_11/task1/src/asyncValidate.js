const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = async (value) => {
    await sleep(1000);
    if (['cat@gmail.com', 'dog@gmail.com', 'PumaConcolor@gmail.com', 'rhino@gmail.com'].includes(value.email)) 
    // eslint-disable-next-line no-throw-literal
    { throw { 
        email: 'That e-mail is taken' } };
}

export default asyncValidate;