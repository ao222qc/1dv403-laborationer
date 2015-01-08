/**
 * Created by Adam on 2015-01-07.
 */
"use strict";

var pwd =
{
    initialize:0,

    init:function()
    {
        pwd.renderDesktop();
    },

    renderDesktop:function()
    {

        var icon;

        pwd.initialize = document.getElementById("background");
       // pwd.initialize.className = ("background-change");
        icon = document.createElement("img");
        icon.id = "icon";
        //icon.src = ""

        pwd.initialize.appendChild(icon);

        icon.onclick = function ()
        {
            var request;
            var response;
            var window;
            var container;
            var i;
            var img;
            var backgroundimage;
            var atag;
            var imgarray;

            window = document.createElement("div");
            window.id = "window";

            request = pwd.getRequest();

            request.onreadystatechange = function()
            {
                if(request.readyState === 4 && request.status === 200)
                {
                    response = JSON.parse(request.responseText);

                    for (i = 0; i <= response.length; i+=1)
                    {
                        var source;
                        var bigimage;
                        container = document.createElement("div");
                        container.id = "container";
                        img = document.createElement("img");
                        img.id = "thumbnail";
                        atag = document.createElement("a");
                        atag.href ="#href";



                        img.src = response[i].thumbURL;

                        img.bigimage = response[i].URL;

                        console.log(img.bigimage.src);

                        imgarray = document.getElementsByTagName("img");

                        //backgroundimage = response[i].URL;

                        for (var j = 0; j < imgarray.length; j+=1)
                        {
                            imgarray[j].addEventListener("click", pwd.changeBackground);
                        }
                        atag.appendChild(img);
                        container.appendChild(atag);
                        window.appendChild(container);
                    }
                }
            };

            pwd.initialize.appendChild(window);

            /*window.onclick = function ()
            {
                initialize.removeChild(window);
            };*/
        };

    },
    changeBackground:function()
    {
        //alert(this.bigimage);
       pwd.initialize.style.backgroundImage = "url(" + this.bigimage + ")";
    },

    getRequest:function()
    {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        xhr.send(null);
        return xhr;
    }
};

window.onload = pwd.init;
