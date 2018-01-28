# @everymundo/json-utils
JSON Utilities such as safe JSON parser and pretty JSON stringifier.

## parseJson
Whenever we use JSON.parse we have to use it inside a try-catch block because a malformed json will raise an Error.

`parseJson` will do that for you and will return the Error object in case of an Error or your parsed object in case of success.

It's also known that a function with a try-catch block in it is almost always slower than its version without a try-catch block, thus using parseJson and checking whether or not the result is an instance of Error is usually faster than using a try catch block inside your function.

## prettyJson
This is a very simple shortcut way to use `JSON.stringify(variable, undefined, '  ');`, calling `prettyJson(variable)` looks nicer;
