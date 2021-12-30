const AvatarGenerator = require('avatar-generator')
const path = require("path")

const avatar = new AvatarGenerator({
    //All settings are optional.
    parts: ['background', 'face', 'clothes', 'head', 'hair', 'eye', 'mouth'], //order in which sprites should be combined
    partsLocation: path.join(__dirname, 'avatar_parts'), // path to sprites
    imageExtension: '.png' // sprite file extension
})

const randomWords = require('random-words')

let data = randomWords(1000);


for (let i=0;i<data.length;i++) {
    const variant = 'female'
    avatar.generate(`${data[i]}@example.com`, variant).then((image) => {
        image.resize(100,100)
        .png()
        .toFile(`avatars/${data[i]}_${variant}.png`)
    }); 
}


for (let i=0;i<data.length;i++) {
    const variant = 'male'
    avatar.generate(`${data[i]}@example.com`, variant).then((image) => {
        image.resize(100,100)
        .png()
        .toFile(`avatars/${data[i]}_${variant}.png`)
    }); 
}
