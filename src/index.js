module.exports = function check(str, bracketsConfig) {
    let check;
    let subStr;

    while (true) {
        check = false;
        bracketsConfig.forEach(config => {
            subStr = config.join('');
            if (str.includes(subStr)) {
                str = str.replace(subStr, '');
                check = true;
            }
        });
        if (!check) break;
    }
    return (str.length === 0) ? true : false;
}