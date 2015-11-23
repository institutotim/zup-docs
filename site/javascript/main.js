(function(){
    function ready(fn) {
        if (document.readyState != 'loading'){
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    function init(){
        var navigationLinks = document.querySelectorAll('.rst-footer-buttons a, .rst-current-version a');
        Array.prototype.forEach.call(navigationLinks, function(el, i){
            el.innerHTML = el.innerHTML.replace('Next', 'Próximo');
            el.innerHTML = el.innerHTML.replace('Previous', 'Anterior');
        });


        var searchDocsPlaceholder = document.querySelectorAll('#rtd-search-form input[type="text"]')[0];
        searchDocsPlaceholder.setAttribute('placeholder', 'Pesquisar na documentação...');

        var footer = document.querySelectorAll('footer')[0];

        footer.innerHTML = footer.innerHTML.replace('Built with', 'Construído com');
        footer.innerHTML = footer.innerHTML.replace('using a', 'usando um');
        footer.innerHTML = footer.innerHTML.replace('provided by', 'fornecido por');

        var footerTheme = document.querySelectorAll('footer a');
        Array.prototype.forEach.call(footerTheme, function(el, i){
            el.innerHTML = el.innerHTML.replace('theme', 'tema');
        });


        var docsLink = document.querySelectorAll('.wy-breadcrumbs li a:first-child')[0];
        docsLink.innerHTML = docsLink.innerHTML.replace('Docs', 'Documentação');

        var versions = [];
        document.querySelectorAll('.wy-breadcrumbs')[0].innerHTML += '<select id="version_selector" class="pull-right"></select>';

        var version_selector = document.querySelectorAll('#version_selector')[0];
        version_selector.addEventListener('change', function(e, i){
            var path = window.location.pathname.match(/\/([^/]+)\/?$/)[1];
            var url = '/' + e.target.value;
            if(path) url += '/' + path;
            window.location = url;
        });

        var current_version = window.location.pathname.match(/^\/([^/]+)/)[1];
        if(!current_version) current_version = 'latest';

        var request = new XMLHttpRequest();
        request.open('GET', '/versions.json', true);
        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                versions = JSON.parse(request.responseText).versions;
                for (var i = 0; i < versions.length; i++){
                    var opt = document.createElement('option');
                    var version = versions[i];
                    opt.value = version;
                    if(version == 'latest') version = 'em desenvolvimento';
                    opt.innerHTML = 'Versão ' + version;
                    version_selector.appendChild(opt);
                    if(current_version == versions[i]){
                        version_selector.value = versions[i];
                    }
                }
            }
        };

        request.send();
    }

    ready(init);
})();