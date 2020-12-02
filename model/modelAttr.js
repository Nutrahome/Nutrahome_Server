const { DataTypes } = require('sequelize');

let UsersAttr = {
    uid:{type: DataTypes.INTEGER},
    ufname:{type: DataTypes.STRING},
    ulname:{type: DataTypes.STRING},
    uphone:{type: DataTypes.STRING},
    upin:{type: DataTypes.STRING},
    uweight:{type: DataTypes.INTEGER},
    uheight:{type: DataTypes.INTEGER},
    ucreatedon:{type: DataTypes.DATE},
    uupdatedon:{type: DataTypes.DATE},
    uphoto:{type: DataTypes.STRING},
}

let DietitiansAttr = {
    did:{type: DataTypes.INTEGER},
    dfname:{type: DataTypes.STRING},
    dlname:{type: DataTypes.STRING},
    dtitle:{type: DataTypes.STRING},
    dstr:{type: DataTypes.STRING},
    dpractice:{type: DataTypes.STRING},
    deducation:{type: DataTypes.STRING},
    dexpertise:{type: DataTypes.STRING},
    dexperience:{type: DataTypes.INTEGER},
    dcreatedon:{type: DataTypes.DATE},
    dupdatedon:{type: DataTypes.DATE},
    dphoto:{type: DataTypes.STRING},
}

let BoothsAttr = {
    bid:{type: DataTypes.INTEGER},
    bname:{type: DataTypes.STRING},
    btype:{type: DataTypes.STRING},
    bphoto:{type: DataTypes.STRING}
}

module.exports = {
    UsersAttr, DietitiansAttr, BoothsAttr
}