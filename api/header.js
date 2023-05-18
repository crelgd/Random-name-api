const name = require('./name/name.json');

const randomName = () => {
    return name[Math.floor(Math.random() * name.length)]
}

module.exports = { randomName };
