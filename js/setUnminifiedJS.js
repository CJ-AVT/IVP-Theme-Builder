document.addEventListener('DOMContentLoaded', function () {
    fetch('https://unpkg.com/video.js@7.21.4/dist/video-js.min.css')
        .then(response => response.text())
        .then(data => {
            const css = unminifyCss(data);
            const textarea = document.getElementById('css-output-text');
            textarea.value = css;
        })
        .catch(error => console.error(error));
});

function unminifyCss(css) {
    css = css.replace(/;/g, ";\n");
    css = css.replace(/}/g, "\n}\n\n");
    css = css.replace(/(^|[^.\n\r})])\{/gm, "$1 {\n\t");
    css = css.replace(/(?<=})[^{}]+(?={)/g, function (match) {
        return match.replace(/([^;}{]*{[^{}]*})/g, function (match) {
            return '\n\t\t' + match.replace(/([\n\r][ \t]*)\./g, "$1\t.");
        });
    });
    css = css.replace(/(^|\n)[ \t]*/g, function (match) {
        var trimmed = match.trimLeft();
        return /\./.test(trimmed[0]) || trimmed[0] === '}' || trimmed[0] === '@' ? trimmed : match + '\t';
    });

    return css;
}