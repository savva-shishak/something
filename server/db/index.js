import Sequelize from "sequelize"

const db = new Sequelize("users", "adminproject", "13052013", {
    host: 'localhost',
    dialect: 'postgres'
})

const Users = db.define("users", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    surname: {
        type: Sequelize.STRING,
        allowNull: false
    },

    patronymic: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    sex: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    
    descript: {
        type: Sequelize.TEXT,
        allowNull: false
    },

    login: {
        type: Sequelize.STRING,
        allowNull: false
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

db
    .sync()
    .then( result => console.log("успешно"))
    .catch( err => console.log(err));

export default Users