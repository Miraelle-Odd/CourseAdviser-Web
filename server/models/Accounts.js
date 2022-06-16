module.exports = (sequelize, DataTypes) => {
    const Accounts = sequelize.define("Accounts", {
        account_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING(10),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.CHAR(60),
            allowNull: false,
        },
        position: {
            type: DataTypes.STRING(8),
            allowNull: false,
            defaultValue: "employee"
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        token: {
            type: DataTypes.CHAR(60),
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING(8),
            allowNull: false,
            defaultValue: "disabled"
        },
    });

    return Accounts;
}