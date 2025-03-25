let host: string;
if (process.env.NODE_ENV === "production") {
  host = "https://joywithlearning.com/reportgenapi";
} else {
  host = "http://localhost:3030";
}

export { host };
