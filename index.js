const Contentstack = require("contentstack");

const Stack = Contentstack.Stack("api_key", "delivery_token", "environment_name");

const Query = Stack.ContentType("link").Query();

Query.where("url", "/about")
    .includeContentType()
    .includeCount()
    .toJSON()
    .find()
    .then(
        function success(result) {
            // result is array where -
            // result[0] =&gt; entry objects
            // result[result.length-1] =&gt; entry objects count included only when .includeCount() is queried.
            // result[1] =&gt; schema of the content type is included when .includeContentType() is queried.
            // result.map((r) => console.log(r));
            console.log(result[0]);
        },
        function error(err) {
            console.log(err);
        }
    );
