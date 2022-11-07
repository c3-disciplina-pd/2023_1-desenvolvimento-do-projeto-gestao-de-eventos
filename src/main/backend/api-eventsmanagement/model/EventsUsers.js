const { Sequelize } = require("sequelize");

module.exports = (Sequelize, _DataTypes) => {
    const EventsUsers = sequelize.define('event-user', {}, { timestamps: false }, )

    EventsUsers.associate = (models) => {
        models.Event.belongsToMany(models.User, {
            as: 'users',
            through: EventsUsers,
            foreignKey: 'event_id',
            otherKey: 'user_id',
        })
        models.User.belongsToMany(models.Event, {
            as: 'events',
            through: EventsUsers,
            foreignKey: 'user_id',
            otherKey: 'event_id'
        })
    }
    return EventsUsers;
}