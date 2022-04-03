import { Sequelize }  from 'sequelize';


export const sequelize = new Sequelize(process.env.DB_SCHEMA || 'postgres',
                                process.env.DB_USER || 'postgres',
                                process.env.DB_PASSWORD || '',
                                {
                                    host: process.env.PGHOST || 'localhost',
                                    port: (process.env.DB_PORT && 
                                        parseInt(process.env.DB_PORT || "")) || 5432,
                                    dialect: 'postgres',
                                    dialectOptions: {
                                        ssl: process.env.DB_SSL == "true"
                                    }
                                });

