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
            type: DataTypes.CHAR(32),
            defaultValue: "academic"
        },
        status: {
            type: DataTypes.STRING(8),
            allowNull: false,
            defaultValue: "disabled"
        },
    });
    const list = [
        {
            username: 'man0000001',
            password:'$2y$10$rX6klaekaVkaPtf7CZrZkuMmm8rapqdfTkP8KXhgd43Ov5DcdSQIC',
            position:'manager',
            email:'mailaaa@gmail.com',
            token:'activated',
            status:'enabled'
        },
        {
            username: 'man0000002',
            password:'$2y$10$/a2dEAaelZcLBfGRA4gSBuBiaIyxpzekqurVApfpfV9tmC77bwAAe',
            position:'employee',
            email:'emptester@gmail.com',
            token:'activated',
            status:'enabled'
        },
        {
            username: 'man0000003',
            password:'$2y$10$iOoCreOSi6LmDr3QyPNfKeShuFEWaNN1jgpYBLfvVWizrw0uP2Z0u',
            position:'manager',
            email:'mantester@gmail.com',
            token:'activated',
            status:'enabled'
        },
        {
            username: 'man0000004',
            password:'$2y$10$79KY8k5rrx/0FwznU96QPOZAlLQ3fkVegM.gQl1aRlplHHLMKNmC2',
            position:'employee',
            email:'emptester2@gmail.com',
            token:'activated',
            status:'enabled'
        },
        {
            username: 'test',
            password:'$2y$10$sg3QPostatL3XXU9TaWJXOQ1ldWzAaK4vGbZhs7KoKr5Xi/hhvsVS',
            position:'employee',
            email:'kurocrea@gmail.com',
            token:'activated',
            status:'enabled'
        },
        {
            username: 'aa',
            password:'$2y$10$FGrfbJXAzNd2TmHVkukJge/NrHy0TwhBb6V4Fes14B/tveleMZQoa',
            position:'employee',
            email:'test@gmail.com',
            token:'activated',
            status:'enabled'
        },
    ]
    list.forEach(element => {
        Accounts.sync().then(async function() {
            await Accounts.findOrCreate({ where: element })
        })
    });

    
    // Accounts.sync().then(async function(){
    //     await Accounts.hasOne(Personal_Infos, { foreignKey: 'account_id' });
    // })
    return Accounts;
}