"use server";

const { cookiesKey } = require("@/utils/temp_tokenKey");
const { decodingToken } = require("@/utils/token");
const { cookies } = require("next/headers");

const serverAuth = cookies().get(cookiesKey);

module.exports = { serverAuth: decodingToken(serverAuth.value) };
