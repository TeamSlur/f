import code from "./code";
import codeComment from "./codeComment";
import develop from "./develop";
import document from "./document";
import file from "./file";
import issue from "./issue";
import issueComment from "./issueComment";
import login from "./login";

const apis = {
    login : login,
    develop : develop,
    document : document,
    file : file,
    issue : issue,
    issueComment : issueComment,
    code : code,
    codeComment : codeComment
}

export default apis;