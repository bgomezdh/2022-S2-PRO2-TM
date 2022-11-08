/* 1er paso: Exportar fun */
module.exports = function (sequelize, dataTypes) {

    /* 2do paso : crear un alias para que sequelize sepa con cual modelo debe conectar */

    let alias = 'Actor';

    /* 3er paso : Es crear una variable con la extructura de la tabla */

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        created_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        },
        rating: {
            type: dataTypes.DECIMAL
        },
        favorite_movie_id: {
            type: dataTypes.INTEGER
        }

    }

    /* 4ta paso: crear un obj lit con la configuracion de la tabla */
    let config = {
        tableName : "actors",
        timestamps: false,
        underscored : true
    }

    /* 5to paso : crear el metodo define() con los 3 parametros */

    let Actor = sequelize.define(alias, cols, config);

    /* 5.5 paso: crear las relaciones */
    Actor.associate = function (models) {
        Actor.belongsToMany(models.Movie, {
            as: 'movies',
            through: 'actor_movie',
            foreignKey: 'actor_id',
            otherKey: 'movie_id',
            timestamps: false,
            onDelete: 'cascade'
        });
    }


    /*  retornar el valor del modelo */

    return Actor;
}
