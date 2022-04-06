module.exports = (sequelize, DataTypes) => {
    const Appointments = sequelize.define("Appointments", {
        appoint_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        appoint_purpose: {
            type: DataTypes.STRING(20),
            allowNull: false,
            defaultValue: 'advise'
        },
        concern: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        appoint_time:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        sender_name:{
            type: DataTypes.STRING(50),
            allowNull: false,
            defaultValue: 'none'
        },
        sender_email: {
            type: DataTypes.STRING(50),
            allowNull: false,
        }
    });
    return Appointments;
}