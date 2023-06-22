import { createConnection } from "typeorm";
import express from 'express';
import { Person } from "./entities/Person";
import router from "./routes";
import { Country } from "./entities/Country";

const app = express();

const main = async () => {
    try{
        await createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: "postgres",
            database: 'test2',
            entities: [Person, Country],
            synchronize: true
        })

        app.use(express.json());
        app.use(router);

		app.listen(8080, () => {
			console.log('Now running on port 8080');
		});

    }catch(err){
        throw new Error(err)
    }
}


main()