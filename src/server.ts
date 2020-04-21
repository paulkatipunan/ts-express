// app/server.ts
import app from "./index";
import * as dotenv from "dotenv";

const port = process.env.PORT || 3000;

dotenv.config();

declare global { // This is to add user property in Request.
  namespace Express {
    interface Request {
      user: object
    }
  }
}


app.listen(port, () => {
	// tslint:disable-next-line:no-console
    console.log(`'Express server listening on port ${port}!`);
})