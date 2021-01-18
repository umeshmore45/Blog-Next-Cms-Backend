import contentstack from "contentstack";

const fetchData = async (contentType, entryId = null) => {
  const Stack = contentstack.Stack(
    process.env.API_KEY,
    process.env.DELIVERY_TOKEN,
    process.env.ENVIROMENT
  );

  if (entryId) {
    const Query = Stack.ContentType(contentType).Entry(entryId);

    return await Query.fetch().then(
      function success(entry) {
        let data = entry.toJSON();

        return { ...data };
      },
      function error(err) {
        console.log(err);
        return err;
      }
    );
  } else {
    const Query = Stack.ContentType(contentType).Query();

    return await Query.where("title")
      .includeSchema()
      .includeCount()
      .toJSON()
      .find()
      .then(
        function success(result) {
          return [...result[0]];
        },
        function error(err) {
          console.log(err);
          return err;
        }
      );
  }
};

export default fetchData;
