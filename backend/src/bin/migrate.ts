import { sequelize } from '../database/database';
console.log("Starting migration")
const migration = async () => {
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        console.log("Sync Done.")
    }catch(err){
        console.log("Error running the migration", err)
    }
}

migration();