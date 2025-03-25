-height: 1.666
}

dt {
    font-weight: bold
}

dd {
    margin-left: 0
}

@media(min-width:768px) {
    .dl-horizontal dt {
        float: left;
        width: 160px;
        clear: left;
        text-align: right;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
    }
    .dl-horizontal dd {
        margin-left: 180px
    }
    .dl-horizontal dd:before,
    .dl-horizontal dd:after {
        content: " ";
        display: table
    }
    .dl-horizontal dd:after {
        clear: both
    }
    .dl-horizontal dd:before,
    .dl-horizontal dd:after {
        content: " ";
        display: table
    }
    .dl-horizontal dd:after {
        clear: both
    }
}

abbr[title],
abbr[data-original-title] {
    cursor: help;
    border-bottom: 1px dotted #999
}

abbr.initialism {
    font-size: 90%;
    text-transform: uppercase
}

blockquote {
    padding: 11.5px 23px;
    margin: 0 0 23px;
    border-left: 5px solid #81B547
}

blockquote p {
    font-size: 17.5px;
    font-weight: 300;
    line-height: 1.25;
    font-style: italic
}

blockquote p:last-child {
    margin-bottom: 0
}

blockquote small {
    display: block;
    line-height: 1.666;
    color: #999
}

blockquote small:before {
    content: '\2014 \00A0'
}

blockquote.pull-right {
    padding-right: 15px;
    padding-left: 0;
    border-right: 5px solid #81B547;
    border-left: 0
}

blockquote.pull-right p,
blockquote.pull-right small {
    text-align: right
}

blockquote.pull-right small:before {
    content: ''
}

blockquote.pull-right small:after {
    content: '\00A0 \2014'
}

q:before,
q:after,
blockquote:before,
blockquote:after {
    content: ""
}

address {
    display: block;
    margin-bottom: 23px;
    font-style: normal;
    line-height: 1.666
}

mark {
    background-color: #bee1c1;
    padding: 2px
}

code,
pre {
    font-family: Monaco, Menlo, Consolas, "Courier New", monospace
}

code {
    padding: 2px 4px;
    font-size: 90%;
    color: #c7254e;
    background-color: #f9f2f4;
    white-space: nowrap;
    border-radius: 4px
}

pre {
    display: block;
    padding: 11px;
    margin: 0 0 11.5px;
    font-size: 13px;
    line-height: 1.666;
    word-break: break-all;
    word-wrap: break-word;
    color: #333;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px
}

pre.prettyprint {
    margin-bottom: 23px
}

pre code {
    padding: 0;
    font-size: inherit;
    color: inherit;
    white-space: pre-wrap;
    background-color: transparent;
    border: 0
}

.pre-scrollable {
    max-height: 340px;
    overflow-y: scroll
}

.container {
    margin-right: auto;
    margin-left: auto
}

.container:before,
.container:after {
    content: " ";
    display: table
}

.container:after {
    clear: both
}

.container:before,
.container:after {
    content: " ";
    display: table
}

.container:after {
    clear: both
}

.row {
    margin-left: -15px;
    margin-right: -15px
}

.row:before,
.row:after {
    content: " ";
    display: table
}

.row:after {
    clear: both
}

.row:before,
.row:after {
    content: " ";
    display: table
}

.row:after {
    clear: both
}

.col-xs-1,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9,
.col-xs-10,
.col-xs-11,
.col-xs-12,
.col-sm-1,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12 {
    position: relative;
    min-height: 1px;
    padding-left: 5px;
    padding-right: 5px
}

.col-xs-1,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9,
.col-xs-10,
.col-xs-11 {
    float: left
}

.col-xs-1 {
    width: 8.333333333333332%
}

.col-xs-2 {
    width: 16.666666666666664%
}

.col-xs-3 {
    width: 25%
}

.col-xs-4 {
    width: 33.33333333333333%
}

.col-xs-5 {
    width: 41.66666666666667%
}

.col-xs-6 {
    width: 50%
}

.col-xs-7 {
    width: 58.333333333333336%
}

.col-xs-8 {
    width: 66.66666666666666%
}

.col-xs-9 {
    width: 75%
}

.col-xs-10 {
    width: 83.33333333333334%
}

.col-xs-11 {
    width: 91.66666666666666%
}

.col-xs-12 {
    width: 100%
}

@media(min-width:768px) {
    .container {
        max-width: 750px
    }
    .col-sm-1,
    .col-sm-2,
    .col-sm-3,
    .col-sm-4,
    .col-sm-5,
    .col-sm-6,
    .col-sm-7,
    .col-sm-8,
    .col-sm-9,
    .col-sm-10,
    .col-sm-11 {
        float: left
    }
    .col-sm-1 {
        width: 8.333333333333332%
    }
    .col-sm-2 {
        width: 16.666666666666664%
    }
    .col-sm-3 {
        width: 25%
    }
    .col-sm-4 {
        width: 33.33333333333333%
    }
    .col-sm-5 {
        width: 41.66666666666667%
    }
    .col-sm-6 {
        width: 50%
    }
    .col-sm-7 {
        width: 58.333333333333336%
    }
    .col-sm-8 {
        width: 66.66666666666666%
    }
    .col-sm-9 {
        width: 75%
    }
    .col-sm-10 {
        width: 83.33333333333334%
    }
    .col-sm-11 {
        width: 91.66666666666666%
    }
    .col-sm-12 {
        width: 100%
    }
    .col-sm-push-1 {
        left: 8.333333333333332%
    }
    .col-sm-push-2 {
        left: 16.666666666666664%
    }
    .col-sm-push-3 {
        left: 25%
    }
    .col-sm-push-4 {
        left: 33.33333333333333%
    }
    .col-sm-push-5 {
        left: 41.66666666666667%
    }
    .col-sm-push-6 {
        left: 50%
    }
    .col-sm-push-7 {
        left: 58.333333333333336%
    }
    .col-sm-push-8 {
        left: 66.66666666666666%
    }
    .col-sm-push-9 {
        left: 75%
    }
    .col-sm-push-10 {
        left: 83.33333333333334%
    }
    .col-sm-push-11 {
        left: 91.66666666666666%
    }
    .col-sm-pull-1 {
        right: 8.333333333333332%
    }
    .col-sm-pull-2 {
        right: 16.666666666666664%
    }
    .col-sm-pull-3 {
        right: 25%
    }
    .col-sm-pull-4 {
        right: 33.33333333333333%
    }
    .col-sm-pull-5 {
        right: 41.66666666666667%
    }
    .col-sm-pull-6 {
        right: 50%
    }
    .col-sm-pull-7 {
        right: 58.333333333333336%
    }
    .col-sm-pull-8 {
        right: 66.66666666666666%
    }
    .col-sm-pull-9 {
        right: 75%
    }
    .col-sm-pull-10 {
        right: 83.33333333333334%
    }
    .col-sm-pull-11 {
        right: 91.66666666666666%
    }
    .col-sm-offset-1 {
        margin-left: 8.333333333333332%
    }
    .col-sm-offset-2 {
        margin-left: 16.666666666666664%
    }
    .col-sm-offset-3 {
        margin-left: 25%
    }
    .col-sm-offset-4 {
        margin-left: 33.33333333333333%
    }
    .col-sm-offset-5 {
        margin-left: 41.66666666666667%
    }
    .col-sm-offset-6 {
        margin-left: 50%
    }
    .col-sm-offset-7 {
        margin-left: 58.333333333333336%
    }
    .col-sm-offset-8 {
        margin-left: 66.66666666666666%
    }
    .col-sm-offset-9 {
        margin-left: 75%
    }
    .col-sm-offset-10 {
        margin-left: 83.33333333333334%
   