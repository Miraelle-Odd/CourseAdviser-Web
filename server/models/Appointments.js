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
            defaultValue: 'consultation'
        },
        concern: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        appoint_address: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        appoint_time: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        sender_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            defaultValue: 'none'
        },
        sender_email: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        sender_phone: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
    });
    return Appointments;
}