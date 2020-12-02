const { Users, Dietitians, Booths } = require('./models')
const { UsersAttr, DietitiansAttr, BoothsAttr } = require('./modelAttr')

let getAll = (model, modelAttr) => {
    model
    .findAll({attributes: Object.keys(modelAttr)})
    .then((dataku) => {
        // var allData = dataku.map((konten, index) => {
        //     return konten.dataValues
        // })
        return dataku[0].dataValues
    })
    .catch((err) => {
        return err
    })
}

// const users = await Users.findAll();
// console.log(users.every(user => user instanceof Users)); // true
// console.log("All users:", JSON.stringify(users, null, 2));

console.log(getAll(Users, UsersAttr))
// getAll(Dietitians, DietitiansAttr)
// getAll(Booths, BoothsAttr)