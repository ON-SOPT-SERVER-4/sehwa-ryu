module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Post', {
        // model's attributes (columns)
        title : {
            type: DataTypes.STRING(30),
            allowNull: false, 
        },
        contents : {
            type: DataTypes.TEXT(),
            allowNull: false, 
        },
        postImageUrl : {
            type: DataTypes.STRING(100),
            allowNull: true,
        }
    }, {
        // model's option 
        freezeTableName: true,
        timestamps: true, 
    })
}