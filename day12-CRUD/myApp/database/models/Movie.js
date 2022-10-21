/* 1er paso: Exportar fun */
module.exports = function (sequelize, dataTypes ) {

    /* 2do paso : crear un alias para que sequelize sepa con cual modelo debe conectar */

    let alias = "Movie";

    /* 3er paso : Es crear una variable con la extructura de la tabla */

    let cols = {
        id : {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        title : {
            type : dataTypes.STRING
        },
        rating : {
            type : dataTypes.DECIMAL
        },
        awards : {
            type : dataTypes.INTEGER
        },
        release_date : {
            type : dataTypes.DATE
        },
        length : {
            type : dataTypes.INTEGER
        },
        genre_id : {
            type : dataTypes.INTEGER
        }
    } 

    /* 4ta paso: crear un obj lit con la configuracion de la tabla */
    let config = {
        tableName : "movies",
        timestamps : false,
        underscored : true
    }

    /* 5to paso : crear el metodo define() con los 3 parametros */
    
    let Movie = sequelize.define(alias, cols, config);

    /* 5.5 paso: crear las relaciones */

    Movie.associate = function(models) {
        Movie.belongsTo( models.Genre, {
            as : 'genres',
            foreignKey : 'genre_id'
        }),
        Movie.belongsToMany( models.Actor, {
            as : 'actors',
            through:'actor_movie',
            foreignKey : 'movie_id',
            otherKey:'actor_id',
            timestamps:false
        })
    }

    /*  retornar el valor del modelo */

    return Movie;
}