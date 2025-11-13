/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    const contentMap = new Map();

    for (const path of paths) {
        const parts = path.split(" ");
        const dir = parts[0];

        for (let i = 1; i < parts.length; i++) {
            const file = parts[i];

            const [filename, content] = file.split("(");
            const actualContent = content.slice(0, -1);
            const fullPath = dir + "/" + filename;

            if (!contentMap.has(actualContent)) {
                contentMap.set(actualContent, []);
            }
            contentMap.get(actualContent).push(fullPath);
        }
    }

    const result = [];
    for (const group of contentMap.values()) {
        if (group.length > 1) result.push(group);
    }

    return result;
}