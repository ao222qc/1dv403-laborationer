{"filter":false,"title":"script.js","tooltip":"/5-pwd/script.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":41,"column":5},"action":"remove","lines":["init: function ()","    {","        var initialize = document.getElementById(\"firstBackground\");","        initialize.className = (\"background-change\");","        var icon = document.createElement(\"img\");","        icon.id = \"icon\";","","        initialize.addEventListener('webkitTransitionEnd', function ()","        {","            initialize.appendChild(icon);","        });","","        icon.onclick = function ()","        {","            var window;","            window = document.createElement(\"div\");","            window.id = \"window\";","","            var img = document.createElement(\"img\");","","            initialize.appendChild(window);","","            window.onclick = function () {","                initialize.removeChild(window);","            };","        };","    },","    getRequest:function()","    {","        var xhr = new XMLHttpRequest();","        xhr.open(\"GET\", \"http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/\", true);","        xhr.send(null);","","        xhr.onreadystatechange = function()","        {","            if(xhr.readyState === 4 && xhr.status === 200)","            {","                var hej = JSON.parse(xhr.responseText);","            }","            return hej;","        }","    }"]},{"start":{"row":0,"column":0},"end":{"row":110,"column":0},"action":"insert","lines":["/**"," * Created by Adam on 2015-01-07."," */","\"use strict\";","","var pwd =","{","    initialize:0,","","    init:function()","    {","        pwd.renderDesktop();","    },","","    renderDesktop:function()","    {","","        var icon;","","        pwd.initialize = document.getElementById(\"background\");","       // pwd.initialize.className = (\"background-change\");","        icon = document.createElement(\"img\");","        icon.id = \"icon\";","        //icon.src = \"\"","","        pwd.initialize.appendChild(icon);","","        icon.onclick = function ()","        {","            var request;","            var response;","            var window;","            var container;","            var i;","            var img;","            var backgroundimage;","            var atag;","            var imgarray;","","            window = document.createElement(\"div\");","            window.id = \"window\";","","            request = pwd.getRequest();","","            request.onreadystatechange = function()","            {","                if(request.readyState === 4 && request.status === 200)","                {","                    response = JSON.parse(request.responseText);","","                    for (i = 0; i <= response.length; i+=1)","                    {","                        var source;","                        var bigimage;","                        container = document.createElement(\"div\");","                        container.id = \"container\";","                        img = document.createElement(\"img\");","                        img.id = \"thumbnail\";","                        atag = document.createElement(\"a\");","                        atag.href =\"#href\";","","","","                        img.src = response[i].thumbURL;","","                        img.bigimage = response[i].URL;","","                        console.log(img.bigimage.src);","","                        imgarray = document.getElementsByTagName(\"img\");","","                        //backgroundimage = response[i].URL;","","                        for (var j = 0; j < imgarray.length; j+=1)","                        {","                            imgarray[j].addEventListener(\"click\", pwd.changeBackground);","                        }","                        atag.appendChild(img);","                        container.appendChild(atag);","                        window.appendChild(container);","                    }","                }","            };","","            pwd.initialize.appendChild(window);","","            /*window.onclick = function ()","            {","                initialize.removeChild(window);","            };*/","        };","","    },","    changeBackground:function()","    {","        //alert(this.bigimage);","       pwd.initialize.style.backgroundImage = \"url(\" + this.bigimage + \")\";","    },","","    getRequest:function()","    {","        var xhr;","        xhr = new XMLHttpRequest();","        xhr.open(\"GET\", \"http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/\", true);","        xhr.send(null);","        return xhr;","    }","};","","window.onload = pwd.init;",""]}]}]]},"ace":{"folds":[],"scrolltop":1139.2000632286072,"scrollleft":31,"selection":{"start":{"row":89,"column":16},"end":{"row":89,"column":16},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":78,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1420729479790,"hash":"f8674042b2b8fa00a7c93189387f42d18493ffa4"}