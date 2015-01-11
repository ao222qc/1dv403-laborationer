/**
 * Created by Adam on 2015-01-07.
 */
"use strict";

var pwd =
{
    initialize:0,
    window:0,
    statusbar:null,
    border:null,

    init:function()
    {
        pwd.renderDesktop();
    },

    renderDesktop:function()
    {
        var icon;
        var bar;

        pwd.initialize = document.getElementById("background");
        bar = document.createElement("div");
        bar.id="menubar";
        icon = document.createElement("img");
        icon.id = "icon";
        icon.src = "folder.png";
        bar.appendChild(icon);
        pwd.initialize.appendChild(bar);

        icon.addEventListener("click", pwd.renderWindow);
    },

    renderWindow:function()
    {
        var lastButton;
        var request;
        var closeIcon;

        lastButton = this;
        lastButton.removeEventListener("click", pwd.renderWindow);

        pwd.border = document.createElement("div");
        pwd.border.id = "border";
        pwd.border.innerHTML = "Image Viewer";

        pwd.statusbar = document.createElement("img");
        pwd.statusbar.id = "statusbar";
        pwd.statusbar.src = ("ajax-loader.gif");

        pwd.window = document.createElement("div");
        pwd.window.id = "window";

        closeIcon = document.createElement("img");
        closeIcon.id="closeIcon";

        pwd.border.appendChild(pwd.statusbar);
        pwd.border.appendChild(pwd.window);
        pwd.border.appendChild(closeIcon);

        pwd.initialize.appendChild(pwd.border);

        closeIcon.onclick = function ()
        {
            pwd.initialize.removeChild(pwd.border);
            lastButton.addEventListener("click", pwd.renderWindow);
        };

        request = pwd.getRequest();

        pwd.renderImages(request);
    },
    renderImages:function(request)
    {
        var response;
        var container;
        var i;
        var img;
        var atag;
        var arrayCopy;

        request.onreadystatechange = function()
        {
            if (request.readyState === 4 && request.status === 200)
            {
                pwd.border.removeChild(pwd.statusbar);

                response = JSON.parse(request.responseText);

                arrayCopy =  pwd.sortObjects(response);

                for (i = 0; i <= response.length; i += 1)
                {
                    container = document.createElement("div");
                    container.id = "container";
                    container.style.width = arrayCopy[0] + "px";
                    container.style.height = arrayCopy[1] + "px";
                    img = document.createElement("img");
                    img.id = "thumbnail";
                    atag = document.createElement("a");
                    atag.href = "#href";

                    img.src = response[i].thumbURL;

                    img.bigimage = response[i].URL;

                    img.addEventListener("click", pwd.changeBackground);

                    atag.appendChild(img);
                    container.appendChild(atag);
                    pwd.window.appendChild(container);
                }
            }
        }
    },

    changeBackground:function()
    {
        pwd.initialize.style.backgroundImage = "url(" + this.bigimage + ")";
    },

    getRequest:function()
    {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        xhr.send(null);
        return xhr;
    },

    sortObjects:function(arrayOfObjects)
    {
        var i;
        var widthArray = [];
        var heightArray = [];
        var resultArray = [];
        for (i = 0; i < arrayOfObjects.length; i+=1)
        {
            widthArray[i] = arrayOfObjects[i].thumbWidth;
            heightArray[i] =  arrayOfObjects[i].thumbHeight;
        }
        resultArray[0] = Math.max.apply(Math, widthArray);
        resultArray[1] = Math.max.apply(Math, heightArray);

        return resultArray;
    }

};
window.onload = pwd.init;

