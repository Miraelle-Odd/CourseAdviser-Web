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
        }
    });
    const list = [{
        account_id: 1,
        username: 'employee',
        password: '$2a$04$zFgKajsYE7s7a8qwT8HV0OqaaxwjH/trLKXUb75UA0/X1dlwBsPo6',
        position: 'employee',
        email: 'empngocanh@gmail.com',
        token: 'activated',
        status:'enabled'
    },
    {
        account_id: 2,
        username: 'manager',
        password: '$2a$04$zFgKajsYE7s7a8qwT8HV0OqaaxwjH/trLKXUb75UA0/X1dlwBsPo6',
        position: 'manager',
        email: 'manquynhthu@gmail.com',
        token: 'activated',
        status:'enabled'
    },
    {
        account_id: 3,
        username: 'emp0000003',
        password: '$2a$04$zFgKajsYE7s7a8qwT8HV0OqaaxwjH/trLKXUb75UA0/X1dlwBsPo6',
        position: 'employee',
        email: 'em3@gmail.com',
        token: 'activated',
        status:'enabled'
    },
    {
        account_id: 4,
        username: 'emp0000004',
        password: '$2a$04$zFgKajsYE7s7a8qwT8HV0OqaaxwjH/trLKXUb75UA0/X1dlwBsPo6',
        position: 'employee',
        email: 'em4@gmail.com',
        token: 'activated',
        status:'enabled'
    },
    {
        account_id: 5,
        username: 'man0000003',
        password: '$2a$04$zFgKajsYE7s7a8qwT8HV0OqaaxwjH/trLKXUb75UA0/X1dlwBsPo6',
        position: 'manager',
        email: 'ma3@gmail.com',
        token: 'activated',
        status:'enabled'
    },
    {
        account_id: 6,
        username: 'man0000004',
        password: '$2a$04$zFgKajsYE7s7a8qwT8HV0OqaaxwjH/trLKXUb75UA0/X1dlwBsPo6',
        position: 'manager',
        email: 'ma4@gmail.com',
        token: 'activated',
        status:'enabled'
    }
    ]
    list.forEach(element => {
        Accounts.sync().then(async function () {
            await sequelize.query("INSERT IGNORE INTO `accounts`(`account_id`, `username`, `password`, `position`, `email`, `token`, `status`) VALUES (:account_id, :username, :password, :position, :email, :token,:status) ",
            {
                replacements: {
                    account_id: element.account_id,
                    username: element.username,
                    password: element.password,
                    position: element.position,
                    email: element.email,
                    token: element.token,
                    status: element.status,
                }
            })
        })
    });
    return Accounts;
}