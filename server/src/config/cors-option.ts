const corsOptions = {
  origin: [`${process.env.URL}`],
  methods: "GET,POST,PUT,DELETE,PATCH",
  credentials: true,
};

export default corsOptions;
