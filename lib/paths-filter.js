const prepareParams = (paths = [], rules = []) => {
    const isCorrectPaths = Array.isArray(paths);
    const isCorrectRules = Array.isArray(rules);

    if (!isCorrectPaths) {
        paths = typeof paths === 'string' ? [paths] : [];
    }

    if (!isCorrectRules) {
        rules = typeof rules === 'string' ? [rules] : [];
    }

    return { paths, rules };

};

const filterPaths = (pathsParams = [], rulesParams = [], isValidRules = false) => {
    const params = prepareParams(pathsParams, rulesParams);
    const { paths, rules } = params;

    return paths.filter((item) => {
        const path = item.path.trim();

        if (!path.length) {
            return false;
        }

        return rules.some(regex => regex.test(path)) === isValidRules;
    });

};

export default filterPaths;