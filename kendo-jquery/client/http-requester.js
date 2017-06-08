/* globals $ */

let app = {};

(function () {
    function ajax(method, url, body, headers = {}) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url,
                headers,
                method,
                data: JSON.stringify(body)
            })
                .done(resolve)
                .fail(reject);
        });
    }

    app = {
        apiGetJSON(url, headers = {}) {
            headers['X-Auth-Token'] = 'd0063ff1d3264556a92143db04f9b24a';
            return ajax('GET', url, null, headers);
        }
    };
})();