module.exports = (sequelize, DataTypes) =>
    sequelize.define('target', {
        project_id: DataTypes.INTEGER,
        site_name: DataTypes.TEXT,
        url: DataTypes.TEXT,
        site_host: DataTypes.TEXT,
        site_type: DataTypes.TEXT,
        site_date: DataTypes.DATE,
        desc: DataTypes.TEXT,
    }, {
        tableName: 'target_sites',
    });
