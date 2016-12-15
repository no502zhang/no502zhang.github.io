var user = 'no502zhang';

Vue.component('blog-sidebar', {
    props: ['name', 'items'],
    template: '#blog-sidebar-template'
})

var blog = new Vue({
    el: '#blog',
    data: {
        path: 'blogs',
        dirs: [{ "url": "", "name": "" }],
        files: [{ "url": "", "name": "" }],
        content: '# Hello World!'
    },
    created: function () {
        getBlogList(this.path);
    },
    computed: {
        compiledMarkdown: function () {
            return marked(this.content, { sanitize: true })
        }
    }
});

/**
 * 初始化
 */
$(document).ready(function () {
    $(document).attr('title', user);
});

/**
 * 获取博客列表
 */
function getBlogList(path) {
    blogListURL = 'https://api.github.com/repos/' + user + '/' + user + '.github.io/contents/' + path;

    $.getJSON(blogListURL, function (json) {
        blog.dirs.splice(0, blog.dirs.length);
        blog.files.splice(0, blog.files.length);
        for (var i = 0; i < json.length; i++) {
            if (json[i].type == 'dir') {
                blog.dirs.push({ "url": json[i].path, "name": json[i].name });
            } else if (json[i].type == 'file') {
                blog.files.push({ "url": json[i].path, "name": json[i].name });
            }
        }
    });
}

/**
 * 获取博客内容
 */
function getBlogContent(blogURL) {
    $.get(blogURL, function (result) {
        blog.article = result;
    });
}