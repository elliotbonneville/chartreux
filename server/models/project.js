module.exports = (sequelize, DataTypes) =>
    sequelize.define('project', {
        user_id: DataTypes.TEXT,
        project: DataTypes.INTEGER,
        creation_date: DataTypes.DATE,
        archive: DataTypes.TEXT,
    }, {
        tableName: 'projects',
    });
