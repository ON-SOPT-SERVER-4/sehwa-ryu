const { User, Post } = require('../models');

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Like', {
        // model's attributes (columns)
        UserId : {
            type: DataTypes.INTEGER,
            reference: {
                model : User,
                key: 'id',
            } 
        },
        PostId : {
            type: DataTypes.INTEGER,
            reference: {
                model : Post,
                key: 'id',
            } 
        }
    }, {
        // model's option 
        freezeTableName: true,
        timestamps: true, 
    })
}